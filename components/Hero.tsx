'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowDownRight, ChevronDown } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { KineticTextReveal } from '@/components/ui/kinetic-text-reveal'

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="hero" id="top">
      <Image
        className="hero-image"
        src="/hero3.png"
        alt="Metal worker welding in a fabrication workshop"
        fill
        priority
        sizes="100vw"
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        <motion.p
          className="eyebrow light"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <span /><span /> UAE-based metal fabrication
        </motion.p>

        <h1 className="hero-kinetic-title">
          <KineticTextReveal
            text="Precision metalwork."
            splitBy="words"
            direction="up"
            stagger={0.08}
            delay={0.35}
            className="block text-white"
            segmentClassName="text-white"
          />
          <KineticTextReveal
            text="Built for industry."
            splitBy="words"
            direction="up"
            stagger={0.08}
            delay={0.65}
            className="block text-weld mt-1"
            segmentClassName="text-weld not-italic"
          />
        </h1>

        <motion.p
          className="hero-copy"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          From first sketch to final installation, we make metal work harder, last longer, and look considered.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 1.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link className="button button-accent" href="#quote">
            Request a quote <ArrowRight />
          </Link>
          <Link className="button button-ghost" href="/portfolio">
            Explore our work <ArrowDownRight />
          </Link>
        </motion.div>

        <motion.div
          className="hero-proof"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 1.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <span><b>2016</b> established</span>
          <span><b>UAE</b> based</span>
          <span><b>01</b> trusted partner</span>
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <span>Scroll to explore</span>
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown />
        </motion.div>
      </motion.div>
    </section>
  )
}
