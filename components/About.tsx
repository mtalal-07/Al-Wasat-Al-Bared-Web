'use client'

import Image from 'next/image'
import { Clock, HardHat } from 'lucide-react'
import Eyebrow from '@/components/ui/Eyebrow'
import { ScrollReveal, StaggerItem, StaggerReveal } from '@/components/ui/scroll-reveal'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="bg-white text-heading pt-16 md:pt-20 pb-16 md:pb-24 section-w">
      <div className="container-w">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 xl:gap-16 lg:items-stretch">
          <ScrollReveal variant="fade-right" duration={0.85} amount={0.2}>
            <div className="about-collage group">
              <div className="about-collage-bar transition-transform duration-700 group-hover:scale-y-105 origin-top" />
              <motion.div
                className="about-collage-main overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src="/welding1.jpg"
                  alt="Metal fabrication at work"
                  width={640}
                  height={900}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
              <motion.div
                className="about-collage-frame overflow-hidden"
                whileHover={{ scale: 1.03, rotate: -1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src="/welding2.jpg"
                  alt="Fabrication workshop"
                  width={480}
                  height={680}
                  className="w-full h-full object-cover rounded-[5px] transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>
            </div>
          </ScrollReveal>

          <div className="flex flex-col justify-between py-1 lg:py-2 min-h-[500px] lg:min-h-0">
            <StaggerReveal className="flex flex-col" stagger={0.14}>
              <StaggerItem variant="blur-up">
                <Eyebrow>About Al Wasat.</Eyebrow>
              </StaggerItem>
              <StaggerItem variant="fade-up">
                <h2 className="section-title max-w-[540px]">
                  We Are Metal Fabrication &amp; Aluminium Expert Company
                </h2>
              </StaggerItem>
              <StaggerItem variant="fade-up">
                <p className="text-body text-[15px] md:text-[16px] leading-[1.75] mb-8 max-w-[540px]">
                  Since 2016, AL WASAT AL BARED ENG. TURNING LLC has delivered precision steel, aluminium, and stainless steel fabrication. Every project is handled with certified craftsmanship, on-time delivery, and equipment you can trust.
                </p>
              </StaggerItem>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <StaggerItem variant="fade-left">
                  <motion.div
                    className="flex gap-3.5 items-start group cursor-default"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="icon-box-w yellow w-[52px] h-[52px] shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <Clock size={22} />
                    </div>
                    <div>
                      <h4 className="text-heading text-[17px] font-semibold mb-1.5">Strict Deadline</h4>
                      <p className="text-[13px] text-body leading-[1.65]">We plan around your schedule, not ours.</p>
                    </div>
                  </motion.div>
                </StaggerItem>
                <StaggerItem variant="fade-right">
                  <motion.div
                    className="flex gap-3.5 items-start group cursor-default"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-[52px] h-[52px] shrink-0 rounded-[var(--radius-chip)] border-2 border-iron flex items-center justify-center text-iron transition-all duration-300 group-hover:bg-iron group-hover:text-weld group-hover:scale-110">
                      <HardHat size={22} />
                    </div>
                    <div>
                      <h4 className="text-heading text-[17px] font-semibold mb-1.5">Talented Staff</h4>
                      <p className="text-[13px] text-body leading-[1.65]">Certified fabricators across every specialty.</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              </div>
            </StaggerReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
