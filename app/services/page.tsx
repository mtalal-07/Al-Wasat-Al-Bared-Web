"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import PageHero from '@/components/PageHero'
import { servicesData } from '@/lib/servicesData'
import { ScrollSplitCard } from '@/components/ui/scroll-split-card'
import Eyebrow from '@/components/ui/Eyebrow'

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <PageHero
        eyebrow="Our Services."
        title="Services You Can Trust"
        subtitle={`${servicesData.length} comprehensive metal fabrication solutions`}
        backgroundImage="/hero-bg.jpg"
      />

     

      {/* Services Grid Section */}
      <section className="section-w bg-steel">
        <div className="container-w">
          <div className="text-center mb-16">
            <Eyebrow centered>Complete Solutions</Eyebrow>
            <h2 className="section-title">All Our Services</h2>
            <p className="section-intro mx-auto">
              Comprehensive metal fabrication and manufacturing services for industrial, commercial, and residential projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {servicesData.map((service) => (
              <article 
                key={service.id} 
                className="bg-white rounded-[var(--radius-card)] border border-border-light shadow-[var(--shadow-card)] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-card-hover)] hover:border-transparent"
              >
                <div className="relative h-52 overflow-hidden group">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-bold text-sm" style={{ color: '#EE0000' }}>SVC {service.num}</span>
                  </div>
                  <h4 className="font-[family-name:var(--font-display)] text-[22px] font-semibold text-heading mb-2.5 leading-[1.35]">
                    {service.title}
                  </h4>
                  <p className="font-[family-name:var(--font-body)] text-[16px] font-bold text-body leading-[1.7] mb-4">
                    {service.description}
                  </p>
                  <Link 
                    href={`/services/${service.id}`}
                    className="font-semibold text-[14px] inline-flex items-center gap-1.5 px-5 py-2.5 rounded-[4px] transition-all hover:opacity-90"
                    style={{ backgroundColor: '#2A2F7A', color: '#ffffff' }}
                  >
                    View Details →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
