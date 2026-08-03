import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/PageHero'
import CtaBanner from '@/components/CtaBanner'
export const metadata: Metadata = {
  title: 'Services | AL WASAT AL BARED ENG. TURNING LLC',
  description: 'Complete metal fabrication services including steel, stainless steel, aluminium fabrication, handrails, staircases, fencing, acoustic barriers, and more.',
}

export default function ServicesPage() {
  const services = [
    { 
      id: 'engineering-design-consultation', 
      num: '01',
      title: 'Engineering Design & Consultation', 
      description: 'Engineering studies, design calculations, project drawings, re-engineering solutions, and metal construction consulting.', 
      image: '/service-engineering-design.jpg' 
    },
    { 
      id: 'steel-fabrication', 
      num: '02',
      title: 'Steel Fabrication', 
      description: 'Mild Steel (MS) Fabrication, Galvanized Steel (GMS), Structural Steel Works, and Custom Steel Fabrication.', 
      image: '/service-steel-fabrication.jpg' 
    },
    { 
      id: 'stainless-steel-fabrication', 
      num: '03',
      title: 'Stainless Steel Fabrication', 
      description: 'Stainless Steel Structures, custom stainless steel works, and decorative & industrial SS fabrication.', 
      image: '/service-stainless-steel.jpg' 
    },
    { 
      id: 'aluminium-fabrication', 
      num: '04',
      title: 'Aluminium Fabrication', 
      description: 'Aluminium structures, aluminium railings, and comprehensive aluminium fabrication works.', 
      image: '/service-aluminium-fabrication.jpg' 
    },
    { 
      id: 'handrails-railing-systems', 
      num: '05',
      title: 'Handrails & Railing Systems', 
      description: 'Aluminium, Stainless Steel, and Galvanized Steel Handrails, safety railings, and balustrades.', 
      image: '/service-handrails-rails.jpg' 
    },
    { 
      id: 'industrial-metal-works', 
      num: '06',
      title: 'Industrial Metal Works', 
      description: 'Industrial platforms, walkways, staircases, steel gratings, and access platforms.', 
      image: '/service-industrial-metal.jpg' 
    },
    { 
      id: 'commercial-residential-staircases', 
      num: '07',
      title: 'Commercial & Residential Staircases', 
      description: 'Steel staircases, stainless steel staircases, aluminium staircases, and custom stair systems.', 
      image: '/service-staircases.jpg' 
    },
    { 
      id: 'fencing-systems', 
      num: '08',
      title: 'Fencing Systems', 
      description: 'Security fencing, mesh fencing, barricade systems, and boundary walls.', 
      image: '/service-fencing-systems.jpg' 
    },
    { 
      id: 'acoustic-barrier-works', 
      num: '09',
      title: 'Acoustic Barrier Works', 
      description: 'Industrial noise barriers and acoustic wall systems for effective sound control.', 
      image: '/service-acoustic-barriers.jpg' 
    },
    { 
      id: 'acoustic-louvers', 
      num: '10',
      title: 'Acoustic Louvers', 
      description: 'Acoustic louvers, ventilation louvers, and noise control solutions.', 
      image: '/service-acoustic-louvers.jpg' 
    },
    { 
      id: 'pipe-anchor-supports', 
      num: '11',
      title: 'Pipe Anchor Supports', 
      description: 'Pipe support fabrication, anchor support systems, and industrial pipe structures.', 
      image: '/service-pipe-anchors.jpg' 
    },
    { 
      id: 'machine-turning-works', 
      num: '12',
      title: 'Machine Turning Works', 
      description: 'Precision turning, lathe machine works, and custom machining for high-quality components.', 
      image: '/service-machine-turning.jpg' 
    },
    { 
      id: 'metal-bending-works', 
      num: '13',
      title: 'Metal Bending Works', 
      description: 'Sheet metal bending, custom metal forming, and fabrication bending services.', 
      image: '/service-metal-bending.jpg' 
    },
  ]

  return (
    <>
      <PageHero
        eyebrow="Our Services."
        title="Services You Can Trust"
        subtitle="13 comprehensive metal fabrication solutions"
        backgroundImage="/service-steel-fabrication.jpg"
      />

      <section className="section-w bg-white">
        <div className="container-w">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service) => (
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
                    Read More
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
