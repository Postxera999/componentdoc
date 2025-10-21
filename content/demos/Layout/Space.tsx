import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Upload } from "lucide-react"

export default function Space() {
  return (
    <div className="w-full space-x-4 flex">
      <Button>Space</Button>
      <Button variant="default">Button</Button>
      <Button variant="outline">
        <Upload className="h-4 w-4 mr-2" />
        Click to Upload
      </Button>
      <Button variant="secondary">Confirm</Button>
    </div>
  )
}