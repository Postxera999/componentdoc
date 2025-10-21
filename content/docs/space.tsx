import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DemoWrapper } from "@/components/demo-wrapper"
import { Upload } from "lucide-react"

export const spaceDocContent = {
  title: "Space",
  category: "Layout",
  description: "Set components spacing with consistent and flexible layout system.",

  sections: [
    {
      id: "when-to-use",
      title: "When to Use",
      content: (
        <>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Space is used to set spacing between components. It provides a consistent way to manage gaps.
          </p>
          <ul className="space-y-3 text-muted-foreground mb-6">
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Avoid components clinging together and set a unified space.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Use Space.Compact when components need to be compact (available since version 4.24.0).</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "difference",
      title: "Difference with Flex",
      content: (
        <ul className="space-y-3 text-muted-foreground mb-6">
          <li className="flex gap-3">
            <span className="text-primary mt-1">•</span>
            <span>
              Space provides spacing for inline elements, suitable for horizontal or vertical arrangement of multiple
              child elements with equal spacing.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary mt-1">•</span>
            <span>
              Flex provides layout capabilities for block-level elements without adding extra elements, suitable for
              vertical or horizontal layouts with more flexibility and control.
            </span>
          </li>
        </ul>
      ),
    },
    {
      id: "examples",
      title: "Code Examples",
      content: (
        <>
          <DemoWrapper
            title="Basic Usage"
            description="Arrange components horizontally with equal spacing."
            code={`import { Space, Button } from '@/components/ui'

export default function BasicSpace() {
  return (
    <Space>
      <Button>Space</Button>
      <Button>Button</Button>
      <Button>
        <Upload /> Click to Upload
      </Button>
      <Button>Confirm</Button>
    </Space>
  )
}`}
          >
            <Button>Space</Button>
            <Button variant="default">Button</Button>
            <Button variant="outline">
              <Upload className="h-4 w-4 mr-2" />
              Click to Upload
            </Button>
            <Button variant="secondary">Confirm</Button>
          </DemoWrapper>

          <DemoWrapper
            title="Vertical Space"
            description="Arrange components vertically with consistent spacing."
            code={`import { Space, Card } from '@/components/ui'

export default function VerticalSpace() {
  return (
    <Space direction="vertical">
      <Card>Card content 1</Card>
      <Card>Card content 2</Card>
    </Space>
  )
}`}
          >
            <div className="w-full space-y-4">
              <Card className="p-6">
                <h4 className="font-semibold mb-2">Card</h4>
                <p className="text-muted-foreground">Card content 卡片内容</p>
              </Card>
              <Card className="p-6">
                <h4 className="font-semibold mb-2">Card</h4>
                <p className="text-muted-foreground">Card content 卡片内容</p>
              </Card>
            </div>
          </DemoWrapper>
        </>
      ),
    },
    {
      id: "api",
      title: "API",
      content: (
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="text-left p-4 font-semibold text-sm">Property</th>
                  <th className="text-left p-4 font-semibold text-sm">Description</th>
                  <th className="text-left p-4 font-semibold text-sm">Type</th>
                  <th className="text-left p-4 font-semibold text-sm">Default</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-4 font-mono text-sm text-primary">align</td>
                  <td className="p-4 text-sm">Align items</td>
                  <td className="p-4 text-sm font-mono text-muted-foreground">start | end | center | baseline</td>
                  <td className="p-4 text-sm">-</td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-4 font-mono text-sm text-primary">direction</td>
                  <td className="p-4 text-sm">The space direction</td>
                  <td className="p-4 text-sm font-mono text-muted-foreground">vertical | horizontal</td>
                  <td className="p-4 text-sm">horizontal</td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-4 font-mono text-sm text-primary">size</td>
                  <td className="p-4 text-sm">The space size</td>
                  <td className="p-4 text-sm font-mono text-muted-foreground">small | middle | large | number</td>
                  <td className="p-4 text-sm">small</td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-4 font-mono text-sm text-primary">wrap</td>
                  <td className="p-4 text-sm">Auto wrap line</td>
                  <td className="p-4 text-sm font-mono text-muted-foreground">boolean</td>
                  <td className="p-4 text-sm">false</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      ),
    },
  ],
}
