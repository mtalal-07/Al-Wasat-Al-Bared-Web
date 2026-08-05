import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/PageHero'
import CtaBanner from '@/components/CtaBanner'
import { servicesData } from '@/lib/servicesData'

export const metadata: Metadata = {
  title: 'Services | AL WASAT AL BARED ENG. TURNING LLC',
  description: 'Complete metal fabrication services including steel, stainless steel, aluminium fabrication, handrails, staircases, fencing, acoustic barriers, and more.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services."
        title="Services You Can Trust"
        subtitle={`${servicesData.length} comprehensive metal fabrication solutions`}
        backgroundImage="/service-steel-fabrication.jpg"
      />

      <section className="section-w bg-white">
        <div className="container-w">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {servicesData.map((service) => (
              <article 
                key={service.id} 
                className="bg-white rounded-[var(--radius-card)] border border-border-light shadow-[var(--shadow-card)] overflow-hidden transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(21,23,31,0.1)] hover:border-transparent"
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
                    <span className="text-weld font-bold text-sm">SVC {service.num}</span>
                  </div>
                  <h4 className="font-[family-name:var(--font-display)] text-[18px] font-semibold text-heading mb-2.5 leading-[1.35]">
                    {service.title}
                  </h4>
                  <p className="font-[family-name:var(--font-body)] text-[14px] text-body leading-[1.7] mb-4">
                    {service.description}
                  </p>
                  <Link 
                    href={`/services/${service.id}`}
                    className="read-more-w"
                  >
                    View Details →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
