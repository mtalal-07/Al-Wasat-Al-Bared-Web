'use client'

import { Trophy, Wrench, Smile, Factory } from 'lucide-react'
import { useCountUp, useInView } from '@/hooks/useCountUp'

const stats = [
  { icon: Trophy, value: 500, label: 'Project Completed' },
  { icon: Wrench, value: 50, label: 'Equipment' },
  { icon: Smile, value: 100, label: 'Clients' },
  { icon: Factory, value: 25, label: 'Industry' },
]

function StatItem({
  icon: Icon,
  value,
  label,
  active,
}: {
  icon: typeof Trophy
  value: number
  label: string
  active: boolean
}) {
  const count = useCountUp(value, active)

  return (
    <>
      <div className="w-[50px] h-[50px] border-[1.5px] border-weld rounded-full flex items-center justify-center text-weld mx-auto mb-4">
        <Icon size={20} strokeWidth={1.75} />
      </div>
      <div className="font-[family-name:var(--font-display)] font-bold text-[32px] md:text-[42px] text-heading leading-none">
        {count}
        <span className="text-weld text-[22px] align-top">+</span>
      </div>
      <div className="text-sm text-body mt-1.5">{label}</div>
    </>
  )
}

export default function Stats() {
  const { ref, inView } = useInView(0.2)

  return (
    <section className="bg-white pt-10 pb-16 md:pb-20">
      <div className="container-w" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center px-5 ${
                i < stats.length - 1 ? 'lg:border-r lg:border-border-light' : ''
              } ${inView ? 'animate-stat-in' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <StatItem icon={stat.icon} value={stat.value} label={stat.label} active={inView} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
