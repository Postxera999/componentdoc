"use client"

import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"

export default function Demo123() {
  return (
    <TooltipProvider>
      <div className="w-80 bg-background border rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4">Demo 123</h3>
        <div className="space-y-1">
          <button className="w-full text-left px-3 py-2 rounded-md hover:bg-accent transition-colors">
            Option A
          </button>
          <button className="w-full text-left px-3 py-2 rounded-md bg-accent transition-colors">
            Option B
          </button>
          <button className="w-full text-left px-3 py-2 rounded-md hover:bg-accent transition-colors">
            Option C
          </button>
        </div>
      </div>
      <Toaster />
      <Sonner />
    </TooltipProvider>
  )
}
