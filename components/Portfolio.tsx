'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Eyebrow from '@/components/ui/Eyebrow'

export default function Portfolio() {
  const projectRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    projectRefs.current.forEach((ref, index) => {
      if (!ref) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Add animation class when element is in viewport
              entry.target.classList.add('project-visible')
              observer.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.2,
          rootMargin: '0px 0px -100px 0px',
        }
      )

      observer.observe(ref)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  const projects = [
    {
      id: 1,
      code: 'PRJ_01',
      title: 'Aluminum Handrailings & Fittings',
      category: 'GMS, SS, Aluminum',
      description: 'It is a good idea to think of your PC as an office. It stores files, programs, pictures. This can be compared to an office\'s files, machines and decorations. The operating system is the boss. With this image in mind, think of an office you\'ve visited that was slow and inefficient.',
      image: '/project-aluminum-handrailings.jpg',
    },
    {
      id: 2,
      code: 'PRJ_02',
      title: 'Industrial Metal Platforms',
      category: 'MS Galvanized, SS, Aluminum',
      description: 'Heavy-duty platforms, staircases, walkways, and gratings engineered for industrial environments. Built with precision and designed to withstand demanding operational conditions while ensuring safety and reliability.',
      image: '/project-industrial-platforms.jpg',
    },
    {
      id: 3,
      code: 'PRJ_03',
      title: 'Commercial Handrails & Staircases',
      category: 'GMS, SS, Aluminum',
      description: 'Elegant commercial and residential staircase systems combining aesthetic appeal with structural integrity. Custom-designed to complement architectural styles while meeting all safety standards and building codes.',
      image: '/project-commercial-handrails.jpg',
    },
    {
      id: 4,
      code: 'PRJ_04',
      title: 'Fencing Walls & Barriers',
      category: 'Barricade, Mesh',
      description: 'Custom fencing solutions with mesh and barricade systems providing security and perimeter control. Engineered for durability and designed to integrate seamlessly with surrounding infrastructure.',
      image: '/project-fencing-walls.jpg',
    },
    {
      id: 5,
      code: 'PRJ_05',
      title: 'Acoustic Barrier Works',
      category: 'Acoustic Solutions',
      description: 'Industrial noise reduction barrier installations designed to control sound transmission effectively. Engineered solutions that combine acoustic performance with structural integrity for demanding applications.',
      image: '/project-acoustic-barriers.jpg',
    },
    {
      id: 6,
      code: 'PRJ_06',
      title: 'Acoustic Louvers',
      category: 'Acoustic Solutions',
      description: 'Specialized louvers combining ventilation and sound control for mechanical equipment enclosures. Precision-engineered to balance airflow requirements with effective noise attenuation.',
      image: '/project-acoustic-louvers.jpg',
    },
    {
      id: 7,
      code: 'PRJ_07',
      title: 'Piping Anchor Supports',
      category: 'Structural Engineering',
      description: 'Precision-engineered anchor supports for piping systems in industrial facilities. Designed to handle thermal expansion, vibration, and operational loads while maintaining pipe alignment.',
      image: '/project-piping-anchors.jpg',
    },
    {
      id: 8,
      code: 'PRJ_08',
      title: 'Stainless Steel Works',
      category: 'Stainless Steel',
      description: 'Corrosion-resistant fabrication for demanding environments including food processing, pharmaceuticals, and marine applications. Premium quality stainless steel work with superior finishing.',
      image: '/project-stainless-steel-works.jpg',
    },
    {
      id: 9,
      code: 'PRJ_09',
      title: 'Metal Bending Works',
      category: 'Custom Fabrication',
      description: 'Precision bending for specialized metal components using advanced press brake technology. Complex multi-bend formations executed with tight tolerances and consistent quality.',
      image: '/project-bending-works2.jpg',
    },
  ]

  return (
    <section className="section-w bg-white">
      <div className="container-w">
        <div className="center-text mb-16">
          <Eyebrow centered>Our Projects.</Eyebrow>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-intro mx-auto">
            A showcase of our completed fabrication projects and client collaborations.
          </p>
        </div>

        {/* Alternating Projects Layout */}
        <div className="space-y-20">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0
            
            return (
              <article 
                key={project.id}
                ref={(el) => {
                  projectRefs.current[index] = el
                }}
                className="relative project-card opacity-0"
                style={{
                  transitionDelay: `${index * 0.1}s`
                }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Text Content */}
                  <div 
                    className={`project-text bg-[#D4B896] text-white p-12 md:p-16 lg:min-h-[400px] flex flex-col justify-center relative z-10 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                    style={{ backgroundColor: '#D4B896' }}
                  >
                    <div className="max-w-md">
                      <h3 className="text-3xl md:text-4xl font-bold mb-4 uppercase leading-tight text-white">
                        {project.title}
                      </h3>
                      <div className="w-16 h-1 bg-white/40 mb-6" />
                      <p className="text-white/90 text-base leading-relaxed mb-6">
                        {project.description}
                      </p>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-white/70">
                          {project.category}
                        </span>
                        <span className="text-white/40">•</span>
                        <span className="text-xs font-bold uppercase tracking-wider text-white/70">
                          {project.code}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div 
                    className={`project-image relative h-[400px] lg:h-[500px] overflow-hidden ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Subtle overlay for contrast */}
                    <div className="absolute inset-0 bg-iron/5" />
                  </div>
                </div>

                {/* Number Badge - Positioned on the overlap */}
                <div 
                  className={`project-badge absolute top-8 ${
                    isEven ? 'left-8' : 'right-8'
                  } bg-weld text-iron w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg z-20 shadow-lg`}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
