import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, Clock } from 'lucide-react'

const socialLinks = [
  { href: '#', label: 'Facebook', text: 'f' },
  { href: '#', label: 'Twitter', text: 't' },
  { href: '#', label: 'LinkedIn', text: 'in' },
  { href: '#', label: 'Instagram', text: 'ig' },
]

export default function Footer() {
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ]

  const legalLinks = [
    { href: '#', label: 'FAQ' },
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Terms & Condition' },
  ]

  return (
    <footer className="text-on-dark-muted text-sm pt-20" style={{ backgroundColor: '#4B5563' }}>
      <div className="container-w">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10 pb-16 border-b border-border-dark">
          {/* About */}
          <div>
            <div className="flex items-center gap-2.5 font-[family-name:var(--font-display)] font-bold text-[22px] text-white mb-4">
              <span className="w-[64px] h-[64px] rounded-[6px] flex items-center justify-center text-iron font-extrabold text-sm">
                <Image src="/logo.png" alt="AL WASAT logo" width={64} height={64} className="object-contain" />
              </span>
              AL WASAT
            </div>
            <p className="leading-relaxed mb-5">
              Certified Metal Fabrication, Turning, And Engineering Services For Industrial, Commercial, And Residential Projects Across The UAE Since 2016.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ href, label, text }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="social-icon-no-hover w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-semibold"
                  style={{ backgroundColor: '#2A2F7A', color: '#ffffff', border: 'none' }}
                >
                  {text}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-base font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-[#2A2F7A]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white text-base font-semibold mb-5">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-weld transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-base font-semibold mb-5">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" style={{ color: '#2A2F7A' }} />
                Shed # 22, Industrial Area # 1, Sajja, Sharjah, UAE
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} className="flex-shrink-0 mt-0.5" style={{ color: '#2A2F7A' }} />
                Sat - Thu : 8:00 am - 5:00 pm
              </li>
            </ul>
            <a href="tel:+97165344415" className="flex items-center gap-3 bg-charcoal rounded-[var(--radius-card)] p-3.5 mt-4 cursor-pointer hover:opacity-90 transition-opacity">
              <div className="icon-box-w yellow w-9 h-9">
                <Phone size={15} />
              </div>
              <div>
                <span className="text-xs block">Call Us Today</span>
                <strong className="text-white text-[15px] block">+971 6 534 4415</strong>
              </div>
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 py-6 text-[13px]">
          <span>Copyright © 2026 AL WASAT AL BARED ENG. TURNING LLC. All Rights Reserved.</span>
          <span>
            Metal Fabrication &amp; Manufacturing
          </span>
        </div>
      </div>
    </footer>
  )
}
