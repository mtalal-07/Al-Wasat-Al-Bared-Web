import { cn } from '@/lib/utils'

interface EyebrowProps {
  children: React.ReactNode
  centered?: boolean
  className?: string
}

export default function Eyebrow({ children, centered, className }: EyebrowProps) {
  return (
    <div className={cn('eyebrow', centered && 'center', className)}>
      {children}
    </div>
  )
}
