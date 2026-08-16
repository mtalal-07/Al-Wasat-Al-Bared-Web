"use client"

import { cn } from "@/lib/utils"
import {
  motion,
  useInView,
  useReducedMotion,
  type Transition,
  type Variants,
} from "framer-motion"
import { useRef, type ReactNode } from "react"

export type ScrollRevealVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale-up"
  | "blur-up"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  variant?: ScrollRevealVariant
  delay?: number
  duration?: number
  once?: boolean
  amount?: number
  as?: keyof typeof motion
}

const variantMap: Record<ScrollRevealVariant, Variants> = {
  "fade-up": {
    hidden: { opacity: 0, y: 48 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-down": {
    hidden: { opacity: 0, y: -48 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-left": {
    hidden: { opacity: 0, x: -56 },
    visible: { opacity: 1, x: 0 },
  },
  "fade-right": {
    hidden: { opacity: 0, x: 56 },
    visible: { opacity: 1, x: 0 },
  },
  "scale-up": {
    hidden: { opacity: 0, scale: 0.92, y: 24 },
    visible: { opacity: 1, scale: 1, y: 0 },
  },
  "blur-up": {
    hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
}

export function ScrollReveal({
  children,
  className,
  variant = "fade-up",
  delay = 0,
  duration = 0.7,
  once = true,
  amount = 0.2,
  as = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, amount })
  const shouldReduceMotion = useReducedMotion()
  const Component = motion[as] as typeof motion.div

  const transition: Transition = shouldReduceMotion
    ? { duration: 0.01 }
    : { duration, delay, ease: [0.22, 1, 0.36, 1] }

  return (
    <Component
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={inView || shouldReduceMotion ? "visible" : "hidden"}
      variants={variantMap[variant]}
      transition={transition}
    >
      {children}
    </Component>
  )
}

interface StaggerRevealProps {
  children: ReactNode
  className?: string
  stagger?: number
  delayChildren?: number
  once?: boolean
  amount?: number
}

export function StaggerReveal({
  children,
  className,
  stagger = 0.12,
  delayChildren = 0.08,
  once = true,
  amount = 0.15,
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, amount })
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={inView || shouldReduceMotion ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: shouldReduceMotion
            ? { duration: 0.01 }
            : { staggerChildren: stagger, delayChildren },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

interface StaggerItemProps {
  children: ReactNode
  className?: string
  variant?: ScrollRevealVariant
}

export function StaggerItem({
  children,
  className,
  variant = "fade-up",
}: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className={cn(className)}
      variants={variantMap[variant]}
      transition={
        shouldReduceMotion
          ? { duration: 0.01 }
          : { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
      }
    >
      {children}
    </motion.div>
  )
}
