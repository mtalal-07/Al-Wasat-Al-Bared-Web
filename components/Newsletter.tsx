'use client'

import { useState } from 'react'
import Eyebrow from '@/components/ui/Eyebrow'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section className="bg-iron text-white text-center py-16 md:py-[70px]">
      <div className="container-w">
        <Eyebrow centered className="justify-center">Subscribe &amp; Follow Us</Eyebrow>
        <h3 className="text-white text-2xl md:text-[28px] font-bold my-2.5 mb-8">
          Subscribe &amp; Get More Information
        </h3>
        <form
          onSubmit={handleSubmit}
          className="flex max-w-[520px] mx-auto rounded-[var(--radius-btn)] overflow-hidden border border-border-dark"
        >
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 border-none px-5 py-4 outline-none bg-white text-heading font-[family-name:var(--font-body)]"
          />
          <button
            type="submit"
            className="border-none bg-weld text-iron font-[family-name:var(--font-display)] font-semibold px-8 cursor-pointer hover:bg-weld-dark transition-colors"
          >
            Subscribe
          </button>
        </form>
        {submitted && (
          <p className="text-weld font-semibold mt-4">✓ Thank you for subscribing!</p>
        )}
      </div>
    </section>
  )
}
