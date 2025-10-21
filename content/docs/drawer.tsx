import { DemoWrapper } from "@/components/demo-wrapper"
import { Button } from "@/components/ui/button"
import { Plus, ChevronRight } from "lucide-react"

export const drawerDocContent = {
  title: "Drawer",
  category: "Navigation",
  description: "抽屉组件用于展示侧边或底部滑出的面板，通常包含一组操作或导航项。",
  sections: [
    {
      id: "when-to-use",
      title: "何时使用",
      content: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>需要在不离开当前页面的情况下展示额外信息或操作</li>
            <li>用于展示导航菜单、筛选选项或设置面板</li>
            <li>需要临时性的内容展示，不影响主要内容区域</li>
          </ul>
        </div>
      ),
    },
    {
      id: "drawer-container",
      title: "Drawer 容器",
      content: (
        <div className="space-y-6">
          <p className="text-muted-foreground">Drawer 容器定义了抽屉的整体结构和布局，包含两种模式：</p>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Default 模式</h3>
            <p className="text-sm text-muted-foreground">基础抽屉模式，用于展示列表或设置项，仅包含内容列表。</p>
            <DemoWrapper
              title="基础抽屉"
              code={`<div className="w-80 bg-background border rounded-lg p-4">
  <h3 className="text-lg font-semibold mb-4">Sort By</h3>
  <div className="space-y-1">
    <button className="w-full text-left px-3 py-2 rounded-md hover:bg-accent">
      Price: Low to High
    </button>
    <button className="w-full text-left px-3 py-2 rounded-md bg-accent">
      Price: High to Low
    </button>
    <button className="w-full text-left px-3 py-2 rounded-md hover:bg-accent">
      Newest First
    </button>
  </div>
</div>`}
            >
              <div className="w-80 bg-background border rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-4">Sort By</h3>
                <div className="space-y-1">
                  <button className="w-full text-left px-3 py-2 rounded-md hover:bg-accent transition-colors">
                    Price: Low to High
                  </button>
                  <button className="w-full text-left px-3 py-2 rounded-md bg-accent transition-colors">
                    Price: High to Low
                  </button>
                  <button className="w-full text-left px-3 py-2 rounded-md hover:bg-accent transition-colors">
                    Newest First
                  </button>
                </div>
              </div>
            </DemoWrapper>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">With Button 模式</h3>
            <p className="text-sm text-muted-foreground">
              带有明确操作按钮的抽屉模式，适用于需要用户确认或关闭的情况。
            </p>
            <DemoWrapper
              title="带按钮的抽屉"
              code={`<div className="w-80 bg-background border rounded-lg p-4">
  <h3 className="text-lg font-semibold mb-4">Sort By</h3>
  <div className="space-y-1 mb-4">
    <button className="w-full text-left px-3 py-2 rounded-md hover:bg-accent">
      Price: Low to High
    </button>
    <button className="w-full text-left px-3 py-2 rounded-md bg-accent">
      Price: High to Low
    </button>
    <button className="w-full text-left px-3 py-2 rounded-md hover:bg-accent">
      Newest First
    </button>
  </div>
  <Button className="w-full">Close</Button>
</div>`}
            >
              <div className="w-80 bg-background border rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-4">Sort By</h3>
                <div className="space-y-1 mb-4">
                  <button className="w-full text-left px-3 py-2 rounded-md hover:bg-accent transition-colors">
                    Price: Low to High
                  </button>
                  <button className="w-full text-left px-3 py-2 rounded-md bg-accent transition-colors">
                    Price: High to Low
                  </button>
                  <button className="w-full text-left px-3 py-2 rounded-md hover:bg-accent transition-colors">
                    Newest First
                  </button>
                </div>
                <Button className="w-full">Close</Button>
              </div>
            </DemoWrapper>
          </div>
        </div>
      ),
    },
    {
      id: "drawer-item",
      title: "Drawer Item",
      content: (
        <div className="space-y-6">
          <p className="text-muted-foreground">Drawer Item 是构成 Drawer 容器内容的基本单元，支持多种状态和配置。</p>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">状态 (States)</h3>
            <DemoWrapper
              title="不同状态的 Drawer Item"
              code={`<div className="space-y-2">
  <button className="w-full text-left px-3 py-2 rounded-md hover:bg-accent">
    Default
  </button>
  <button className="w-full text-left px-3 py-2 rounded-md bg-accent">
    Active
  </button>
  <button className="w-full text-left px-3 py-2 rounded-md bg-primary text-primary-foreground">
    Selected
  </button>
  <button className="w-full text-left px-3 py-2 rounded-md text-muted-foreground cursor-not-allowed" disabled>
    Disabled
  </button>
</div>`}
            >
              <div className="w-80 space-y-2">
                <button className="w-full text-left px-3 py-2 rounded-md hover:bg-accent transition-colors">
                  Default
                </button>
                <button className="w-full text-left px-3 py-2 rounded-md bg-accent transition-colors">Active</button>
                <button className="w-full text-left px-3 py-2 rounded-md bg-primary text-primary-foreground transition-colors">
                  Selected
                </button>
                <button
                  className="w-full text-left px-3 py-2 rounded-md text-muted-foreground cursor-not-allowed"
                  disabled
                >
                  Disabled
                </button>
              </div>
            </DemoWrapper>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">配置 (Variants)</h3>
            <DemoWrapper
              title="不同配置的 Drawer Item"
              code={`<div className="space-y-2">
  <button className="w-full text-left px-3 py-2 rounded-md hover:bg-accent">
    Default Item
  </button>
  <button className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-accent">
    <span>With Suffix</span>
    <ChevronRight className="h-4 w-4" />
  </button>
  <button className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent">
    <Plus className="h-4 w-4" />
    <span>With Prefix</span>
  </button>
  <button className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-accent">
    <div className="flex items-center gap-2">
      <Plus className="h-4 w-4" />
      <span>Prefix and Suffix</span>
    </div>
    <ChevronRight className="h-4 w-4" />
  </button>
</div>`}
            >
              <div className="w-80 space-y-2">
                <button className="w-full text-left px-3 py-2 rounded-md hover:bg-accent transition-colors">
                  Default Item
                </button>
                <button className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-accent transition-colors">
                  <span>With Suffix</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
                <button className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent transition-colors">
                  <Plus className="h-4 w-4" />
                  <span>With Prefix</span>
                </button>
                <button className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-accent transition-colors">
                  <div className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    <span>Prefix and Suffix</span>
                  </div>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </DemoWrapper>
          </div>
        </div>
      ),
    },
    {
      id: "api",
      title: "API",
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Drawer Container Props</h3>
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-3 font-semibold">属性</th>
                    <th className="text-left p-3 font-semibold">说明</th>
                    <th className="text-left p-3 font-semibold">类型</th>
                    <th className="text-left p-3 font-semibold">默认值</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="hover:bg-muted/50">
                    <td className="p-3 font-mono text-xs">title</td>
                    <td className="p-3">抽屉标题</td>
                    <td className="p-3 font-mono text-xs">string</td>
                    <td className="p-3">-</td>
                  </tr>
                  <tr className="hover:bg-muted/50">
                    <td className="p-3 font-mono text-xs">variant</td>
                    <td className="p-3">抽屉模式</td>
                    <td className="p-3 font-mono text-xs">'default' | 'with-button'</td>
                    <td className="p-3">'default'</td>
                  </tr>
                  <tr className="hover:bg-muted/50">
                    <td className="p-3 font-mono text-xs">onClose</td>
                    <td className="p-3">关闭回调</td>
                    <td className="p-3 font-mono text-xs">() =&gt; void</td>
                    <td className="p-3">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Drawer Item Props</h3>
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-3 font-semibold">属性</th>
                    <th className="text-left p-3 font-semibold">说明</th>
                    <th className="text-left p-3 font-semibold">类型</th>
                    <th className="text-left p-3 font-semibold">默认值</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="hover:bg-muted/50">
                    <td className="p-3 font-mono text-xs">state</td>
                    <td className="p-3">项状态</td>
                    <td className="p-3 font-mono text-xs">'default' | 'active' | 'selected' | 'disabled'</td>
                    <td className="p-3">'default'</td>
                  </tr>
                  <tr className="hover:bg-muted/50">
                    <td className="p-3 font-mono text-xs">prefix</td>
                    <td className="p-3">前缀图标</td>
                    <td className="p-3 font-mono text-xs">ReactNode</td>
                    <td className="p-3">-</td>
                  </tr>
                  <tr className="hover:bg-muted/50">
                    <td className="p-3 font-mono text-xs">suffix</td>
                    <td className="p-3">后缀元素</td>
                    <td className="p-3 font-mono text-xs">ReactNode</td>
                    <td className="p-3">-</td>
                  </tr>
                  <tr className="hover:bg-muted/50">
                    <td className="p-3 font-mono text-xs">onClick</td>
                    <td className="p-3">点击回调</td>
                    <td className="p-3 font-mono text-xs">() =&gt; void</td>
                    <td className="p-3">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ),
    },
  ],
}
