"use client"

import { useEffect, useMemo, useState } from "react"
import type { ReactNode } from "react"
import { MDXProvider } from "@mdx-js/react"
import { mdxComponents } from "@/components/mdx-content"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Menu, X, ChevronRight, Sparkles } from "lucide-react"

// 将文件名或路径段转换为标题格式
const toTitleCase = (s: string) => s
  .replace(/[-_]/g, " ")
  .replace(/\s+/g, " ")
  .trim()
  .replace(/\b\w/g, (c) => c.toUpperCase())

// 自动扫描 docs 目录下的所有 MDX 文档（支持多层级目录）
// Webpack context import fallback（Next 不支持 import.meta.glob 时使用）
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const require: any
const req = (require as any).context("../docs", true, /\.mdx$/)
const mdxModules: Record<string, any> = {}
req.keys().forEach((k: string) => {
  const mod = req(k)
  const normalized = `../docs/${k.replace(/^\.\//, "")}`
  mdxModules[normalized] = mod
})

type DocEntry = {
  Component: React.ComponentType<any>
  meta: { title: string; category: string; description?: string }
  categoryPath: string[]
}

const mdxDocs: Record<string, DocEntry> = {}
for (const [path, mod] of Object.entries(mdxModules)) {
  const Component = (mod as any).default
  if (!Component) continue
  const meta = (mod as any).meta || {}
  const rel = path.replace("../docs/", "")
  const segments = rel.split("/").filter(Boolean)
  const filename = segments.pop() || ""
  const slug = filename.replace(/\.(mdx|md)$/i, "")
  const title = toTitleCase(slug)
  const pathFromDirs = segments.map(toTitleCase)
  const categoryPath = meta.category ? String(meta.category).split("/").filter(Boolean).map(toTitleCase) : pathFromDirs
  const category = categoryPath.length ? categoryPath[categoryPath.length - 1] : "General"
  mdxDocs[slug] = {
    Component,
    meta: { title, category, description: "" },
    categoryPath,
  }
}

// 构建多层级目录树
type TreeNode = { children: Record<string, TreeNode>; items: { slug: string; title: string }[] }
const buildTree = (): TreeNode => {
  const root: TreeNode = { children: {}, items: [] }
  for (const [slug, entry] of Object.entries(mdxDocs)) {
    const path = entry.categoryPath
    let node = root
    if (path.length === 0) {
      root.items.push({ slug, title: entry.meta.title })
      continue
    }
    for (const segment of path) {
      if (!node.children[segment]) node.children[segment] = { children: {}, items: [] }
      node = node.children[segment]
    }
    node.items.push({ slug, title: entry.meta.title })
  }
  return root
}

export function ComponentDocs() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const slugs = Object.keys(mdxDocs)
  const defaultSlug = slugs[0] || ""
  const [activeSlug, setActiveSlug] = useState(defaultSlug)
  const [anchorLinks, setAnchorLinks] = useState<{ id: string; label: string }[]>([])

  const isMdx = useMemo(() => mdxDocs[activeSlug] !== undefined, [activeSlug])
  const meta = useMemo(() => {
    if (isMdx) return mdxDocs[activeSlug].meta
    return { title: activeSlug || "", category: "Components", description: "" }
  }, [activeSlug, isMdx])

  // 为 MDX 内容生成目录锚点（基于 h2）
  useEffect(() => {
    if (!isMdx) {
      setAnchorLinks([])
      return
    }
    const updateAnchors = () => {
      const container = document.getElementById("doc-content")
      if (!container) return setAnchorLinks([])
      const headings = Array.from(container.querySelectorAll("h2")) as HTMLHeadingElement[]
      const links = headings.map((h) => {
        const raw = h.textContent || ""
        const id = h.id || raw.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "")
        if (!h.id) h.id = id
        return { id, label: raw }
      })
      setAnchorLinks(links)
    }
    updateAnchors()
    const raf = requestAnimationFrame(updateAnchors)
    return () => cancelAnimationFrame(raf)
  }, [activeSlug, isMdx])

  const MdxComp = isMdx ? mdxDocs[activeSlug].Component : null

  // 目录树与展开状态
  const tree = useMemo(() => buildTree(), [])
  const [expanded, setExpanded] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {}
    for (const name of Object.keys(tree.children)) initial[name] = true
    return initial
  })
  const toggle = (key: string) => setExpanded((prev) => ({ ...prev, [key]: !prev[key] }))

  const renderLevel = (node: TreeNode, path: string[] = []) => {
    const elements: ReactNode[] = []
    // 渲染当前层级的分类
    for (const [name, child] of Object.entries(node.children)) {
      const key = [...path, name].join("/")
      const isOpen = expanded[key] ?? true
      elements.push(
        <div key={key} className="mb-4">
          <button
            onClick={() => toggle(key)}
            className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider"
          >
            <span>{name}</span>
            <ChevronRight className={`h-4 w-4 transition-transform ${isOpen ? "rotate-90" : ""}`} />
          </button>
          {isOpen && (
            <div className="space-y-1 pl-2">
              {renderLevel(child, [...path, name])}
            </div>
          )}
        </div>
      )
    }
    // 渲染当前层级的直接文档项
    if (node.items.length > 0) {
      elements.push(
        <div key={`items-${path.join("/")}`} className="space-y-1">
          {node.items.map((item) => {
            const isActive = activeSlug === item.slug
            const enabled = Boolean(mdxDocs[item.slug])
            return (
              <button
                key={item.slug}
                onClick={() => {
                  if (enabled) {
                    setActiveSlug(item.slug)
                    setSidebarOpen(false)
                  }
                }}
                disabled={!enabled}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors ${
                  isActive ? "bg-accent text-accent-foreground font-medium" : "hover:bg-muted text-foreground"
                } ${!enabled ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <span>{item.title}</span>
              </button>
            )
          })}
        </div>
      )
    }
    return elements
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center px-4">
          <Button variant="ghost" size="icon" className="md:hidden mr-2" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          <div className="flex items-center gap-2 mr-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-semibold text-lg">Component Library</span>
            </div>
          </div>

          <div className="flex-1 flex items-center gap-4 max-w-2xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search components..." className="pl-9 bg-muted/50" />
              <kbd className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                ⌘K
              </kbd>
            </div>
          </div>

          <nav className="ml-auto flex items-center gap-6">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Design
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Development
            </a>
            <a href="#" className="text-sm font-medium text-primary border-b-2 border-primary pb-[13px] -mb-[1px]">
              Components
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Resources
            </a>
            <Badge variant="outline" className="ml-2">
              v5.27.5
            </Badge>
          </nav>
        </div>
      </header>

      <div className="flex">
        {/* Left Sidebar */}
        <aside
          className={`fixed md:sticky top-14 left-0 z-40 h-[calc(100vh-3.5rem)] w-64 border-r border-border bg-background transition-transform md:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } overflow-y-auto`}
        >
          <div className="p-4 space-y-6">
            {renderLevel(tree)}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <div className="max-w-5xl mx-auto p-6 md:p-8 lg:p-12">
            {/* Title Section */}
            <div className="mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <span>Components</span>
                <ChevronRight className="h-4 w-4" />
                <span>{meta.category}</span>
                <ChevronRight className="h-4 w-4" />
                <span className="text-foreground">{meta.title}</span>
              </div>
              <h1 className="text-4xl font-bold mb-4 text-balance">{meta.title}</h1>
              {meta.description && (
                <p className="text-lg text-muted-foreground leading-relaxed">{meta.description}</p>
              )}
            </div>

            {/* Content */}
            {MdxComp ? (
              <MDXProvider components={mdxComponents}>
                <div id="doc-content">
                  <MdxComp />
                </div>
              </MDXProvider>
            ) : (
              <div className="text-sm text-muted-foreground">No documentation available.</div>
            )}
          </div>
        </main>

        {/* Right Sidebar - Table of Contents */}
        <aside className="hidden xl:block sticky top-14 h-[calc(100vh-3.5rem)] w-64 border-l border-border overflow-y-auto">
          <div className="p-6">
            <h3 className="text-sm font-semibold mb-4">On this page</h3>
            <nav className="space-y-2">
              {anchorLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>
      </div>
    </div>
  )
}
