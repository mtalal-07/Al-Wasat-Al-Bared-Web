'use client'

import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { KineticTextReveal } from '@/components/ui/kinetic-text-reveal'

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="hero hero-centered" id="top">
      <Image
        className="hero-image"
        src="/hero1.png"
        alt="Metal worker welding in a fabrication workshop"
        fill
        priority
        sizes="100vw"
      />
      <div className="hero-overlay" />
      <div className="hero-content hero-content-centered">
        <h1 className="hero-kinetic-title hero-title-centered">
          <KineticTextReveal
            text="Precision Metalwork"
            splitBy="words"
            direction="up"
            stagger={0.08}
            delay={0.35}
            className="block text-white"
            segmentClassName="text-white"
          />
          <div className="mt-1">
            <span className="liquid-text-base liquid-text" data-text="Built For Industry">
              Built For Industry
            </span>
          </div>
        </h1>

        <motion.p
          className="hero-copy hero-copy-centered"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          From First Sketch To Final Installation, We Make Metal Work Harder, Last Longer, And Look Considered.
        </motion.p>
      </div>

      <motion.div
        className="hero-scroll"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        
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
