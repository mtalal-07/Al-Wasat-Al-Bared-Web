'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Wrench, Settings, Hammer, Shield, ArrowRight } from 'lucide-react'
import Eyebrow from '@/components/ui/Eyebrow'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Wrench,
    iconVariant: 'yellow' as const,
    title: 'Steel Fabrication',
    description: 'Structural-grade fabrication built to hold up under real industrial load.',
  },
  {
    icon: Shield,
    iconVariant: 'dark' as const,
    title: 'Handrails & Railings',
    description: 'Safety-first railing systems designed for compliance and durability.',
  },
  {
    icon: Settings,
    iconVariant: 'yellow' as const,
    title: 'Acoustic Louvers',
    description: 'Heavy-duty platforms, walkways, and gratings built for load and durability.',
  },
  {
    icon: Hammer,
    iconVariant: 'dark' as const,
    title: 'Acoustic Barriers',
    description: 'High-precision machine turning for cylindrical components and custom parts.',
  },
]

const cardHover = {
  y: -6,
  boxShadow: '0 24px 48px rgba(21, 23, 31, 0.1)',
  borderColor: 'transparent',
}

function ServiceCard({
  icon: Icon,
  iconVariant,
  title,
  description,
}: (typeof services)[0]) {
  return (
    <motion.article
      className="relative bg-white rounded-[var(--radius-card)] border border-border-light shadow-[var(--shadow-card)] pt-12 pb-9 px-7 text-center h-full"
      whileHover={cardHover}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className={`absolute -top-7 left-1/2 -translate-x-1/2 w-[52px] h-[52px] rounded-[var(--radius-chip)] flex items-center justify-center shadow-[0_8px_20px_rgba(21,23,31,0.12)] z-10 ${
          iconVariant === 'yellow' ? 'bg-weld text-iron' : 'bg-iron text-weld'
        }`}
        whileHover={{ scale: 1.08, rotate: 4 }}
        transition={{ duration: 0.3 }}
      >
        <Icon size={22} strokeWidth={1.75} />
      </motion.div>
      <h4 className="font-[family-name:var(--font-display)] text-[22px] font-semibold text-heading mb-2.5 leading-[1.35]">
        {title}
      </h4>
      <p className="font-[family-name:var(--font-body)] text-[14px] text-body leading-[1.7] mb-5 max-w-[280px] mx-auto">
        {description}
      </p>
      <span className="read-more-w text-[14px] font-semibold">Read More</span>
    </motion.article>
  )
}

export default function Services() {
  return (
    <section className="section-w bg-white pt-8 md:pt-12">
      <div className="container-w">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          <ScrollReveal variant="fade-right" className="flex flex-col justify-center md:pr-4 lg:pr-6 pb-4 md:pb-0">
            <Eyebrow>Our Services</Eyebrow>
            <h2 className="section-title mb-4 leading-[1.2]">We Provide Best Services</h2>
            <p className="font-[family-name:var(--font-body)] text-[15px] text-body leading-[1.75]">
              From structural steel to precision aluminium works, our services cover every stage of your project — planning, fabrication, and finishing.
            </p>
          </ScrollReveal>

          {services.map((service, index) => (
            <ScrollReveal key={service.title} variant="scale-up" delay={index * 0.1} className="h-full pt-7">
              <Link href="/services" className="block h-full">
                <ServiceCard {...service} />
              </Link>
            </ScrollReveal>
          ))}

          <ScrollReveal variant="blur-up" delay={0.2} className="md:col-span-2 lg:col-span-1">
            <motion.article
              className="relative rounded-[var(--radius-card)] overflow-hidden min-h-[260px] flex flex-col items-center justify-center text-center px-8 py-12 shadow-[var(--shadow-card)] group"
              whileHover={{ y: -6, boxShadow: '0 24px 48px rgba(21, 23, 31, 0.15)' }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/service-steel-fabrication.jpg"
                alt=""
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                aria-hidden
              />
              <div
                className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-90"
                style={{
                  background: 'linear-gradient(180deg, rgba(21,23,31,0.55) 0%, rgba(21,23,31,0.88) 100%)',
                }}
              />
              <div className="relative z-[1]">
                <h4 className="font-[family-name:var(--font-display)] text-white text-[20px] md:text-[22px] font-semibold mb-3 leading-[1.3]">
                  Explore More Services
                </h4>
                <p className="font-[family-name:var(--font-body)] text-[14px] text-on-dark-muted leading-[1.7] mb-6 max-w-[260px] mx-auto">
                  See the full range of metal fabrication and aluminium services we offer.
                </p>
                <Link href="/services" className="btn-w btn-primary-w text-[15px] py-3.5 px-8 inline-flex items-center gap-2 group/btn">
                  All Services
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
