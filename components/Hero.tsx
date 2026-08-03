'use client'

import { useState } from 'react'
import Link from 'next/link'
import emailjs from '@emailjs/browser'
import Eyebrow from '@/components/ui/Eyebrow'
import { EMAILJS_CONFIG } from '@/lib/emailjs'

export default function Hero() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.QUOTE_TEMPLATE_ID,
        {
          from_email: email,
          to_name: 'AL WASAT AL BARED',
          message: 'Quote request received. Please follow up with this customer.',
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      )

      if (result.text === 'OK') {
        setSubmitted(true)
        setEmail('')
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        setError('Failed to send request.')
      }
    } catch (err) {
      setError('Failed to send request.')
      console.error('EmailJS error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <header
        className="relative text-white pt-28 pb-36 md:pt-36 md:pb-44 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(120deg, rgba(21,23,31,0.92) 0%, rgba(21,23,31,0.65) 100%), url(/hero-bg.jpg)',
        }}
      >
        <div className="container-w text-center flex flex-col items-center">
          <Eyebrow centered className="justify-center">We Build The Best.</Eyebrow>
          <h1 className="text-[32px] md:text-[56px] text-white font-bold leading-[1.15] mb-5 max-w-[780px]">
            We Give Best Quality Metal Fabrication &amp; Aluminium Services
          </h1>
          <p className="text-on-dark-muted text-[15px] md:text-[17px] max-w-[560px] mb-8 leading-[1.75] mx-auto">
            Precision metal fabrication and aluminium works built on certified craftsmanship, on-time delivery, and equipment you can trust for every project across the UAE.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Link href="/services" className="btn-w btn-primary-w">
              Get Started
            </Link>
            <Link href="/contact" className="btn-w btn-outline-light-w">
              Contact Us
            </Link>
          </div>
        </div>
      </header>

      {/* Two-card overlap — dark left + white right */}
      <div className="relative z-20 -mt-[88px] md:-mt-[100px] pb-4">
        <div className="container-w">
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-7 items-stretch">
            {/* Left — dark quote card (narrower) */}
            <div className="lg:w-[38%] bg-iron rounded-[var(--radius-card)] p-8 md:p-10 flex flex-col justify-center">
              <h4 className="text-white text-[20px] font-semibold mb-3">Request For A Quote</h4>
              <p className="text-on-dark-muted text-sm leading-relaxed mb-6">
                Tell us about your project and get a response from our team within one business day.
              </p>
              <form onSubmit={handleQuoteSubmit} className="space-y-3">
                <div className="flex rounded-[var(--radius-btn)] overflow-hidden">
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={loading}
                    className="flex-1 border-none px-4 py-3.5 outline-none text-sm bg-white text-heading min-w-0 rounded-l-[var(--radius-btn)] disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="border-none bg-weld text-iron font-[family-name:var(--font-display)] font-semibold px-6 cursor-pointer hover:bg-weld-dark transition-colors shrink-0 rounded-r-[var(--radius-btn)] disabled:opacity-50"
                  >
                    {loading ? '...' : 'Request'}
                  </button>
                </div>
                {submitted && (
                  <p className="text-green-400 text-sm font-semibold">✓ Request sent successfully!</p>
                )}
                {error && (
                  <p className="text-red-400 text-sm font-semibold">{error}</p>
                )}
              </form>
            </div>

            {/* Right — white help card (wider, shadow) */}
            <div className="lg:flex-1 bg-white rounded-[var(--radius-card)] p-8 md:p-10 shadow-[var(--shadow-card)]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 items-start">
                {/* Service list — left column */}
                <ul className="space-y-3 text-sm text-body order-2 sm:order-1">
                  {['Steel Fabrication', 'Engineering Design', 'Aluminium Fabrication', 'Industrial Metal Works', 'Stainless Steel Works'].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-4 h-[2px] bg-weld shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Heading + copy — right column */}
                <div className="order-1 sm:order-2">
                  <h4 className="text-heading text-[20px] font-semibold mb-3">How Can I Help You?</h4>
                  <p className="text-body text-sm leading-relaxed mb-5">
                    From structural steel to precision fabrication, our team is ready to guide you through every stage of your project.
                  </p>
                  <Link
                    href="/services"
                    className="text-weld font-[family-name:var(--font-display)] font-semibold text-sm hover:text-weld-dark transition-colors"
                  >
                    Explore Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
