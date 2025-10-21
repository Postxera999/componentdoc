import { mdxComponents } from "@/components/mdx-content"
import { createElement } from "react"

// Simple MDX-like parser for demonstration
// In production, use @next/mdx or next-mdx-remote
export function parseMDXContent(content: string) {
  const lines = content.split("\n")
  const elements: any[] = []
  const currentElement = ""
  let inCodeBlock = false
  let codeContent = ""

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // Handle code blocks
    if (line.startsWith("```")) {
      if (inCodeBlock) {
        elements.push(createElement(mdxComponents.pre, { key: i }, createElement("code", {}, codeContent.trim())))
        codeContent = ""
        inCodeBlock = false
      } else {
        inCodeBlock = true
      }
      continue
    }

    if (inCodeBlock) {
      codeContent += line + "\n"
      continue
    }

    // Handle headings
    if (line.startsWith("# ")) {
      elements.push(createElement(mdxComponents.h1, { key: i }, line.slice(2)))
    } else if (line.startsWith("## ")) {
      elements.push(createElement(mdxComponents.h2, { key: i }, line.slice(3)))
    } else if (line.startsWith("### ")) {
      elements.push(createElement(mdxComponents.h3, { key: i }, line.slice(4)))
    }
    // Handle list items
    else if (line.startsWith("- ") || line.startsWith("* ")) {
      elements.push(createElement(mdxComponents.li, { key: i }, line.slice(2)))
    }
    // Handle paragraphs
    else if (line.trim() !== "") {
      elements.push(createElement(mdxComponents.p, { key: i }, line))
    }
  }

  return elements
}
