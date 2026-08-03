'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Phone, Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50">
      {/* Main navbar */}
      <nav className="bg-white py-5 border-b border-border-light">{/* ... rest remains the same ... */}
        <div className="container-w flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 font-[family-name:var(--font-display)] font-bold text-[22px] text-heading">
            <span className="w-[64px] h-[64px] rounded-[6px] flex items-center justify-center text-iron font-extrabold text-sm"><img src="/logo.png" alt="logo" /></span>
            AL WASAT
          </Link>

          <div className="hidden lg:flex gap-9 font-medium text-[15px]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${isActive(item.href) ? 'text-weld' : 'text-heading hover:text-weld'}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <div className="icon-box-w yellow w-11 h-11">
              <Phone size={18} />
            </div>
            <div>
              <div className="text-xs text-body">Get Consultation</div>
              <a href="tel:+97165344415" className="font-[family-name:var(--font-display)] font-bold text-heading text-[15px]">
                +971 6 534 4415
              </a>
            </div>
          </div>

          <button
            className="lg:hidden p-2 text-heading"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-white border-t border-border-light">
            <div className="container-w py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block py-3 px-2 rounded transition-colors ${
                    isActive(item.href) ? 'text-weld bg-steel' : 'text-heading hover:text-weld hover:bg-steel'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border-light">
                <a href="tel:+97165344415" className="btn-w btn-primary-w w-full justify-center">
                  Get Consultation
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
