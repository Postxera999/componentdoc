"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { DemoWrapper } from "./demo-wrapper"
import { Upload, Sparkles } from "lucide-react"
import { autoMdxComponents } from "@/lib/auto-mdx-components"

// MDX Components mapping
export const mdxComponents = {
  // Custom components
  DemoWrapper,
  Demo: DemoWrapper,
  Button,
  Card,
  Input,
  Badge,
  Upload,
  Sparkles,

  // Auto-registered demo components from content/demos
  ...autoMdxComponents,

  // HTML elements with custom styling
  h1: ({ children, ...props }: any) => (
    <h1 className="text-4xl font-bold mb-4 text-balance" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: any) => (
    <h2 className="text-2xl font-semibold mb-4 mt-8" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: any) => (
    <h3 className="text-xl font-semibold mb-3 mt-6" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }: any) => (
    <p className="text-muted-foreground leading-relaxed mb-4" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }: any) => (
    <ul className="space-y-3 text-muted-foreground mb-6" {...props}>
      {children}
    </ul>
  ),
  li: ({ children, ...props }: any) => (
    <li className="flex gap-3" {...props}>
      <span className="text-primary mt-1">•</span>
      <span>{children}</span>
    </li>
  ),
  code: ({ children, ...props }: any) => (
    <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-primary" {...props}>
      {children}
    </code>
  ),
  pre: ({ children, ...props }: any) => (
    <pre className="bg-muted/50 p-4 rounded-lg overflow-x-auto mb-4" {...props}>
      {children}
    </pre>
  ),
  table: ({ children, ...props }: any) => (
    <Card className="overflow-hidden my-6">
      <div className="overflow-x-auto">
        <table className="w-full" {...props}>
          {children}
        </table>
      </div>
    </Card>
  ),
  thead: ({ children, ...props }: any) => (
    <thead className="bg-muted/50 border-b border-border" {...props}>
      {children}
    </thead>
  ),
  tbody: ({ children, ...props }: any) => (
    <tbody className="divide-y divide-border" {...props}>
      {children}
    </tbody>
  ),
  th: ({ children, ...props }: any) => (
    <th className="text-left p-4 font-semibold text-sm" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }: any) => (
    <td className="p-4 text-sm" {...props}>
      {children}
    </td>
  ),
  tr: ({ children, ...props }: any) => (
    <tr className="hover:bg-muted/30 transition-colors" {...props}>
      {children}
    </tr>
  ),
}
