'use client'

import Link from 'next/link'
import { MapPin, Clock, Phone } from 'lucide-react'
import Eyebrow from '@/components/ui/Eyebrow'
import { useInView } from '@/hooks/useCountUp'
import { useEffect, useState } from 'react'

const skills = [
  { label: 'Metal Fabrication', pct: 98 },
  { label: 'Metal Works', pct: 96 },
  { label: 'Arrival Time', pct: 99 },
  { label: 'Modern Technology', pct: 97 },
  { label: 'Certified Team', pct: 98 },
]

const checklist = [
  'We Have Professional Workers',
  'On Time In Progress',
  'Friendly To Serve Customers',
  'Give The Best & Fair',
]

function SkillBar({ label, pct, active, delay }: { label: string; pct: number; active: boolean; delay: number }) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (!active) return
    const t = setTimeout(() => setWidth(pct), delay)
    return () => clearTimeout(t)
  }, [active, pct, delay])

  return (
    <div className="mb-6">
      <div className="flex justify-between font-[family-name:var(--font-display)] font-semibold text-white text-[15px] mb-2.5">
        {label}
        <span className="text-weld">{pct}%</span>
      </div>
      <div className="h-1.5 bg-border-dark rounded-full overflow-hidden">
        <div
          className="h-full bg-weld rounded-full transition-all duration-[1.2s] ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}

export default function WhyChooseUs() {
  const { ref, inView } = useInView(0.15)

  return (
    <section
      ref={ref}
      className="relative text-white section-w center-text pb-32 md:pb-40 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'linear-gradient(120deg, rgba(21,23,31,0.93) 0%, rgba(21,23,31,0.82) 100%), url(/hero-bg.jpg)',
      }}
    >
      <div className="container-w relative z-[1]">
        <Eyebrow centered>Why Choose Us.</Eyebrow>
        <h2 className="section-title text-white">Trust Our Expertise</h2>
        <p className="section-intro mx-auto text-on-dark-muted">
          Reliable delivery, certified teams, and modern equipment come together so every metal fabrication job is handled right the first time.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-12 text-left items-start">
          <div>
            <h3 className="text-white text-[22px] font-semibold mb-8">This Is Our Expertise</h3>
            {skills.map((skill, i) => (
              <SkillBar key={skill.label} {...skill} active={inView} delay={i * 100} />
            ))}
          </div>

          <div className="bg-charcoal border border-border-dark rounded-[var(--radius-card)] p-8 md:p-10 shadow-[0_24px_48px_rgba(0,0,0,0.35)] lg:-mt-4 lg:translate-y-2">
            <h3 className="text-white text-[22px] font-semibold mb-3.5">We Are Always Ready To Serve</h3>
            <p className="text-sm mb-5 text-on-dark-muted">Whatever the scale of the job, our crews show up prepared, on schedule, and ready to work.</p>
            <ul className="space-y-3 mb-6">
              {checklist.map((item) => (
                <li key={item} className="flex gap-2.5 items-center text-sm text-on-dark-muted">
                  <span className="w-5 h-5 bg-weld text-iron rounded-full flex items-center justify-center text-[11px] flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn-w btn-primary-w mb-6 inline-flex">
              Contact Us
            </Link>
            <div className="flex flex-col gap-3.5 border-t border-border-dark pt-6">
              <div className="flex gap-3.5 items-center text-sm text-white">
                <div className="w-9 h-9 bg-iron border border-weld text-weld rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={14} />
                </div>
                Shed # 22, Industrial Area # 1, Sajja, Sharjah, UAE
              </div>
              <div className="flex gap-3.5 items-center text-sm text-white">
                <div className="w-9 h-9 bg-iron border border-weld text-weld rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock size={14} />
                </div>
                Sat - Thu : 8:00 am - 5:00 pm
              </div>
              <div className="flex gap-3.5 items-center text-sm text-white">
                <div className="w-9 h-9 bg-iron border border-weld text-weld rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={14} />
                </div>
                +971 6 534 4415
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
