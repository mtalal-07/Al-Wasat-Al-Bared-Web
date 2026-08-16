'use client'

import { BadgeCheck, MessagesSquare, Headphones } from 'lucide-react'
import { StaggerItem, StaggerReveal } from '@/components/ui/scroll-reveal'
import { motion } from 'framer-motion'

const features = [
  {
    variant: 'yellow' as const,
    icon: BadgeCheck,
    title: '100% Guarantee',
    description: 'Every repair is backed by our workmanship guarantee.',
  },
  {
    variant: 'dark' as const,
    icon: MessagesSquare,
    title: 'Free Consultations',
    description: 'Talk through your project with our team before you commit.',
  },
  {
    variant: 'white' as const,
    icon: Headphones,
    title: '24/7 Support',
    description: 'Emergency crews on call around the clock, every day of the week.',
  },
]

export default function FeatureStrip() {
  return (
    <div className="relative z-20 -mt-[80px] md:-mt-[100px] mb-8 md:mb-12 pt-24 md:pt-32">
      <div className="container-w">
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6" stagger={0.15}>
          {features.map(({ variant, icon: Icon, title, description }) => (
            <StaggerItem key={title} variant="scale-up">
              <motion.div
                className={`rounded-[var(--radius-card)] px-8 py-10 md:px-10 md:py-10 flex flex-row items-start gap-5 min-h-[140px] cursor-default ${
                  variant === 'yellow'
                    ? 'bg-weld'
                    : variant === 'dark'
                      ? 'bg-iron'
                      : 'bg-white shadow-[var(--shadow-card)]'
                }`}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className={`w-[56px] h-[56px] rounded-[var(--radius-chip)] flex items-center justify-center shrink-0 ${
                    variant === 'yellow' ? 'bg-iron text-weld' : 'bg-weld text-iron'
                  }`}
                  whileHover={{ rotate: 8, scale: 1.08 }}
                  transition={{ duration: 0.35 }}
                >
                  <Icon size={24} strokeWidth={1.75} />
                </motion.div>

                <div className="min-w-0 flex-1">
                  <h4
                    className={`font-[family-name:var(--font-display)] text-[19px] md:text-[20px] font-semibold mb-2 leading-[1.35] ${
                      variant === 'yellow' ? 'text-iron' : variant === 'dark' ? 'text-white' : 'text-heading'
                    }`}
                  >
                    {title}
                  </h4>
                  <p
                    className={`font-[family-name:var(--font-body)] text-[14px] leading-[1.7] ${
                      variant === 'yellow' ? 'text-iron/70' : variant === 'dark' ? 'text-on-dark-muted' : 'text-body'
                    }`}
                  >
                    {description}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </div>
  )
}
