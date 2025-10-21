"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Check, Code2, Eye } from "lucide-react"
import { useState } from "react"

interface DemoWrapperProps {
  children: React.ReactNode
  code?: string
  title?: string
  description?: string
}

export function DemoWrapper({ children, code, title, description }: DemoWrapperProps) {
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState("preview")

  const handleCopy = () => {
    if (code) {
      navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <Card className="overflow-hidden my-6">
      {title && (
        <div className="border-b border-border bg-muted/30 px-4 py-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium">{title}</h3>
            {code && (
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleCopy}>
                {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
              </Button>
            )}
          </div>
        </div>
      )}

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="border-b border-border bg-muted/10">
          <TabsList className="h-10 bg-transparent border-0 rounded-none w-full justify-start px-4">
            <TabsTrigger
              value="preview"
              className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
            >
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </TabsTrigger>
            {code && (
              <TabsTrigger
                value="code"
                className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
              >
                <Code2 className="h-4 w-4 mr-2" />
                Code
              </TabsTrigger>
            )}
          </TabsList>
        </div>

        <TabsContent value="preview" className="p-8 m-0">
          <div className="demoScope flex flex-wrap gap-4 items-center justify-center">{children}</div>
        </TabsContent>

        {code && (
          <TabsContent value="code" className="m-0">
            <div className="bg-muted/50 p-6 overflow-x-auto">
              <pre className="text-sm font-mono">
                <code className="text-foreground">{code}</code>
              </pre>
            </div>
          </TabsContent>
        )}
      </Tabs>

      {description && (
        <div className="border-t border-border bg-muted/10 px-4 py-3">
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      )}
      <style jsx>{`
        .demoScope :is(h1,h2,h3,h4,h5,h6,p,ul,ol,code,a) {
          margin: 0;
          font: inherit;
          color: inherit;
        }
      `}</style>
    </Card>
  )
}
