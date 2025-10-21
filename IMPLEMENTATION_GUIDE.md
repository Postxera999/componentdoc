# MDX-Driven Documentation Implementation Guide

## Overview

This documentation system now supports MDX-like content structure where:
- Documentation content is separated from the UI layout
- Interactive components can be embedded directly in documentation
- Content is organized in a structured, maintainable format

## Architecture

### 1. Content Structure (`content/docs/`)

Each component documentation is defined as a TypeScript/TSX file with this structure:

\`\`\`tsx
export const componentDocContent = {
  title: "Component Name",
  category: "Category",
  description: "Brief description",
  sections: [
    {
      id: "section-id",
      title: "Section Title",
      content: <JSX content with interactive components />
    }
  ]
}
\`\`\`

### 2. Demo Wrapper Component

The `DemoWrapper` component provides:
- Preview/Code tabs for interactive examples
- Copy code functionality
- Consistent styling for all demos
- Optional title and description

Usage:
\`\`\`tsx
<DemoWrapper
  title="Example Title"
  description="What this example demonstrates"
  code={`// Your code here`}
>
  <YourInteractiveComponent />
</DemoWrapper>
\`\`\`

### 3. MDX Components Mapping

The `mdxComponents` object in `components/mdx-content.tsx` maps:
- Standard HTML elements to styled components
- Custom components (Button, Card, etc.)
- Demo wrapper for interactive examples

## Adding New Component Documentation

### Step 1: Create Content File

Create a new file in `content/docs/your-component.tsx`:

\`\`\`tsx
import { YourComponent } from "@/components/your-component"
import { DemoWrapper } from "@/components/demo-wrapper"

export const yourComponentDocContent = {
  title: "Your Component",
  category: "Category",
  description: "Component description",
  sections: [
    {
      id: "basic-usage",
      title: "Basic Usage",
      content: (
        <DemoWrapper
          title="Basic Example"
          code={`import { YourComponent } from '@/components/ui'

export default function Example() {
  return <YourComponent />
}`}
        >
          <YourComponent />
        </DemoWrapper>
      )
    }
  ]
}
\`\`\`

### Step 2: Update Component Docs

Import and use your content in `components/component-docs.tsx`:

\`\`\`tsx
import { yourComponentDocContent } from "@/content/docs/your-component"

// In the component:
const docContent = yourComponentDocContent
\`\`\`

## Integration with Figma + AI IDE + MCP

### Workflow

1. **Design in Figma**: Create component designs with proper variants and tokens
2. **Generate Code**: Use AI IDE with MCP to auto-generate component code
3. **Place Components**: Generated components go in `components/` directory
4. **Create Documentation**: Write documentation in `content/docs/` that imports and demonstrates the components
5. **Interactive Demos**: Wrap component examples in `DemoWrapper` for live interaction

### Example Workflow

\`\`\`
Figma Design → AI IDE + MCP → components/switch.tsx
                                      ↓
                          content/docs/switch.tsx (imports Switch)
                                      ↓
                          DemoWrapper with live <Switch /> component
\`\`\`

## Benefits

- **Separation of Concerns**: Content separate from layout
- **Type Safety**: TypeScript ensures correct structure
- **Reusability**: Components can be used in multiple docs
- **Maintainability**: Easy to update content without touching UI
- **Scalability**: Add new docs by creating new content files
- **Live Interaction**: Real components, not just code examples

## Future Enhancements

- Add true MDX parsing for Markdown files
- Implement dynamic routing for multiple component pages
- Add search functionality across documentation
- Support for versioning and changelog
- Integration with Figma API for design token sync
