'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import emailjs from '@emailjs/browser'
import PageHero from '@/components/PageHero'
import Eyebrow from '@/components/ui/Eyebrow'
import { EMAILJS_CONFIG } from '@/lib/emailjs'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.CONTACT_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
          to_name: 'AL WASAT AL BARED',
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      )

      if (result.text === 'OK') {
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', company: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        setError('Failed to send message. Please try again.')
      }
    } catch (err) {
      setError('Failed to send message. Please try again or contact us directly.')
      console.error('EmailJS error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Get In Touch."
        title="Contact Us Today"
        subtitle="Have questions or ready to discuss your project?"
        backgroundImage="/hero-bg.jpg"
      />

      <section className="section-w bg-steel">
        <div className="container-w">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-[var(--radius-card)] shadow-[var(--shadow-card)]">
              <Eyebrow>Send Message.</Eyebrow>
              <h2 className="text-[24px] font-semibold text-heading mb-6">Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-border-light rounded-[var(--radius-btn)] outline-none focus:border-weld bg-white text-heading h-[48px]"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-border-light rounded-[var(--radius-btn)] outline-none focus:border-weld bg-white text-heading h-[48px]"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+971 X XXXX XXXX"
                    className="w-full px-4 py-3 border border-border-light rounded-[var(--radius-btn)] outline-none focus:border-weld bg-white text-heading h-[48px]"
                  />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className="w-full px-4 py-3 border border-border-light rounded-[var(--radius-btn)] outline-none focus:border-weld bg-white text-heading h-[48px]"
                  />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 border border-border-light rounded-[var(--radius-btn)] outline-none focus:border-weld bg-white text-heading h-32 resize-none"
                />
                <button 
                  type="submit" 
                  className="btn-w btn-dark-w w-full justify-center"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
                {submitted && (
                  <p className="text-green-600 font-semibold text-center bg-green-50 p-3 rounded-md">
                    ✓ Thank you! We&apos;ll get back to you soon.
                  </p>
                )}
                {error && (
                  <p className="text-red-600 font-semibold text-center bg-red-50 p-3 rounded-md">
                    {error}
                  </p>
                )}
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <Eyebrow>Contact Info.</Eyebrow>
                <h2 className="text-[24px] font-semibold text-heading">Contact Information</h2>
              </div>

              {[
                { Icon: MapPin, title: 'Address', lines: ['AL WASAT AL BARED ENG. TURNING LLC', 'Shed # 22, Industrial Area # 1', 'Sajja, Sharjah, UAE'] },
                { Icon: Phone, title: 'Phone', lines: ['+971 6 534 4415', 'Available Saturday - Thursday'] },
                { Icon: Mail, title: 'Email', lines: ['info@alwasatllc.ae', 'projects@alwasatllc.ae'] },
                { Icon: Clock, title: 'Business Hours', lines: ['Saturday - Thursday: 8:00 AM - 5:00 PM', 'Friday: Closed'] },
              ].map(({ Icon, title, lines }) => (
                <div key={title} className="flex gap-4">
                  <div className="icon-box-w yellow w-12 h-12">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h5 className="font-bold text-heading mb-1">{title}</h5>
                    {lines.map((line) => (
                      <p key={line} className="text-body text-sm">{line}</p>
                    ))}
                  </div>
                </div>
              ))}

              <div className="relative h-64 rounded-[var(--radius-card)] overflow-hidden shadow-[var(--shadow-card)]">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.1878264892766!2d55.6377093!3d25.3078467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6338e14c5d73%3A0xb3a70550d9fc7e98!2sAl%20Wasat%20Al%20Bared%20Eng%20%26%20Tur%20L.L.C!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AL WASAT AL BARED location map"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
