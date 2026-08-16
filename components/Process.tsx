'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Building2, Calendar, CreditCard, Wrench } from 'lucide-react'
import Eyebrow from '@/components/ui/Eyebrow'
import { ScrollReveal, StaggerItem, StaggerReveal } from '@/components/ui/scroll-reveal'
import { motion } from 'framer-motion'

const steps = [
  {
    icon: Building2,
    variant: 'dark' as const,
    title: 'Select Your Services',
    description: 'Tell us what kind of metal fabrication or aluminium work you need.',
  },
  {
    icon: Calendar,
    variant: 'yellow' as const,
    title: 'Make an Appointment',
    description: 'Pick a time that works for a site visit or consultation.',
  },
  {
    icon: CreditCard,
    variant: 'dark' as const,
    title: 'Make Payment',
    description: 'Transparent, itemized quotes with flexible payment options.',
  },
  {
    icon: Wrench,
    variant: 'yellow' as const,
    title: 'Get Amazing Services',
    description: 'Our certified crew delivers the finished work on schedule.',
  },
]

export default function Process() {
  return (
    <section className="section-w bg-white">
      <div className="container-w">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          <ScrollReveal variant="fade-right" duration={0.85}>
            <div className="relative pb-12 md:pb-16 group">
              <div className="relative pl-10 sm:pl-12 md:pl-14">
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-[32px] sm:w-[40px] md:w-[48px] bg-weld rounded-[0px] z-0 origin-top"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                />

                <div className="relative z-[1] overflow-hidden">
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.5 }}>
                    <Image
                      src="/how we work.jpg"
                      alt="Fabrication team at work"
                      width={800}
                      height={750}
                      className="rounded-[0px] w-full h-[520px] md:h-[640px] lg:h-[750px] object-cover shadow-[var(--shadow-card)] transition-transform duration-700 group-hover:scale-105"
                    />
                  </motion.div>
                </div>

                <motion.div
                  className="absolute bottom-0 left-6 sm:left-10 md:left-14 max-w-[340px] z-[2] bg-white rounded-[var(--radius-card)] p-6 md:p-7 shadow-[0_20px_40px_rgba(21,23,31,0.12)]"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.65, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6, boxShadow: '0 28px 56px rgba(21,23,31,0.16)' }}
                >
                  <p className="text-[15px] md:text-[16px] text-heading font-medium leading-[1.6] mb-3">
                    Get A Free Estimate Or Schedule An Appointment With Us.
                  </p>
                  <Link href="/contact" className="read-more-w text-[15px] font-semibold">
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal variant="blur-up">
              <Eyebrow>How We Works.</Eyebrow>
              <h2 className="section-title text-[32px] md:text-[40px] leading-[1.2]">
                Procedure For Getting Our Best Service
              </h2>
              <p className="text-[16px] md:text-[17px] text-body leading-[1.75] mb-10 max-w-[540px]">
                A simple four-step process, from first contact to finished job, designed to keep you informed at every stage.
              </p>
            </ScrollReveal>

            <StaggerReveal className="relative pl-1" stagger={0.14}>
              <div className="absolute left-[26px] top-6 bottom-6 w-px bg-border-light hidden sm:block" />

              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <StaggerItem key={step.title} variant="fade-left">
                    <motion.div
                      className={`flex gap-5 md:gap-6 items-start relative group ${index < steps.length - 1 ? 'mb-8 md:mb-9' : ''}`}
                      whileHover={{ x: 6 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className={`icon-box-w w-[52px] h-[52px] shrink-0 relative z-[1] ${
                          step.variant === 'yellow' ? 'yellow' : 'dark'
                        }`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon size={22} strokeWidth={1.75} />
                      </motion.div>
                      <div className="pt-1">
                        <h4 className="font-[family-name:var(--font-display)] text-[18px] md:text-[20px] font-semibold text-heading mb-2 leading-[1.35]">
                          {step.title}
                        </h4>
                        <p className="font-[family-name:var(--font-body)] text-[15px] md:text-[16px] text-body leading-[1.75]">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  </StaggerItem>
                )
              })}
            </StaggerReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
