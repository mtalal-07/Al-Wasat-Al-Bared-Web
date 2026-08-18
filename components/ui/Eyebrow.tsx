import { cn } from '@/lib/utils'

interface EyebrowProps {
  children: React.ReactNode
  centered?: boolean
  blue?: boolean
  className?: string
}

export default function Eyebrow({ children, centered, blue, className }: EyebrowProps) {
  return (
    <div 
      className={cn('eyebrow', centered && 'center', blue && 'blue-variant', className)}
    >
      {children}
    </div>
  )
}
