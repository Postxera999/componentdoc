/*
 * Auto-register demo components from content/demos into MDX scope.
 */

import type { ComponentType } from "react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const require: any

// Scan demo components under content/demos (supports nested directories)
const ctx = (require as any).context("../content/demos", true, /\.(tsx|jsx)$/)

export const autoMdxComponents: Record<string, ComponentType<any>> = {}

ctx.keys().forEach((k: string) => {
  const mod = ctx(k)
  const Comp = (mod as any).default as ComponentType<any>
  if (!Comp) return

  // Derive tag name from file name (last segment, PascalCase)
  const nameSegment = k.replace(/^\.\//, "").split("/").pop() || ""
  const base = nameSegment.replace(/\.(tsx|jsx)$/i, "")
  const tagName = base
    .replace(/[-_]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .replace(/\s+/g, "")

  autoMdxComponents[tagName] = Comp
})