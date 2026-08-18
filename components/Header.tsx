'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Phone, Mail, Clock, Menu, X } from 'lucide-react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact Us' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className="modern-header">
      {/* Top Contact Bar */}
      <div className="header-top-bar">
        <div className="container-w">
          <div className="header-top-content">
            <div className="contact-info">
              <a href="tel:+97165344415" className="contact-item hover:opacity-80 transition-opacity">
                <Phone size={16} />
                <span>+971 6 534 4415</span>
              </a>
              <a href="mailto:info@alwasatllc.ae" className="contact-item hover:opacity-80 transition-opacity">
                <Mail size={16} />
                <span>info@alwasatllc.ae</span>
              </a>
              <div className="contact-item">
                <Clock size={16} />
                <span>Sat - Thu: 8:00 AM - 5:00 PM, Friday - CLOSED</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="header-main">
        <div className="container-w">
          <div className="header-main-content">
            <Link href="/" className="brand-modern" aria-label="Al Wasat home">
              <img src="/logo.png" alt="Al Wasat Logo" className="brand-logo-modern" />
              <div className="brand-text-modern">
                <span className="brand-name">AL WASAT AL BARED</span>
                <span className="brand-subtitle">ENG. TURNING LLC</span>
              </div>
            </Link>
            
            <nav className={menuOpen ? 'nav-links-modern is-open' : 'nav-links-modern'} aria-label="Main navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${isActive(item.href) ? 'nav-link-active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            
            <button className="menu-button-modern" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
