declare module '*.mdx' {
  import type { FC } from 'react'
  const MDXComponent: FC<any>
  export default MDXComponent
  export const meta: {
    title: string
    category: string
    description?: string
  }
}