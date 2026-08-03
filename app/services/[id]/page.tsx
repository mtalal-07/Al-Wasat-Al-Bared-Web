import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { CheckCircle2, ArrowLeft } from 'lucide-react'
import { servicesData } from '@/lib/servicesData'
import CtaBanner from '@/components/CtaBanner'

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    id: service.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const service = servicesData.find((s) => s.id === id)
  
  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: `${service.title} | AL WASAT AL BARED ENG. TURNING LLC`,
    description: service.description,
  }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const service = servicesData.find((s) => s.id === id)

  if (!service) {
    notFound()
  }

  // Get other services for recommendations
  const otherServices = servicesData.filter((s) => s.id !== service.id).slice(0, 3)

  return (
    <>
      {/* Enhanced Hero Section with Weldery Design */}
      <section className="svc-hero relative" style={{
        background: `linear-gradient(100deg, rgba(21,23,31,.94) 0%, rgba(21,23,31,.80) 45%, rgba(21,23,31,.55) 100%)`
      }}>
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={service.image}
            alt=""
            fill
            className="object-cover"
            priority
            aria-hidden
          />
        </div>

        <div className="container-w">
          {/* Breadcrumb Row */}
          <div className="svc-breadcrumb">
            <Link href="/services" className="svc-back">
              <span className="arrow">←</span> Back to All Services
            </Link>
            <div className="svc-index-badge">SVC. {service.num}</div>
          </div>

          {/* Eyebrow */}
          <div className="svc-eyebrow">{service.category}</div>

          {/* Title */}
          <h1 className="svc-title">{service.title}</h1>

          {/* Description */}
          <p className="svc-desc">{service.description}</p>

          {/* Service Tags */}
          <div className="svc-tags">
            {service.tags.map((tag, index) => (
              <span key={index} className="svc-tag">
                <span className="dot">●</span>{tag}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="svc-ctas">
            <Link href="/contact" className="btn-w btn-primary-w">
              Request This Service
            </Link>
            <Link href="/contact" className="btn-w btn-outline-light-w">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-w bg-white">
        <div className="container-w">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-2">
              {/* Overview */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-body leading-relaxed mb-6">
                  {service.longDescription}
                </p>
                
                <div className="relative h-[400px] rounded-[var(--radius-card)] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Features */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-weld flex-shrink-0 mt-1" size={20} />
                      <span className="text-body">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Applications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.applications.map((application, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-weld flex-shrink-0 mt-1" size={20} />
                      <span className="text-body">{application}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Benefits</h2>
                <div className="bg-slate-50 rounded-[var(--radius-card)] p-8">
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="text-weld flex-shrink-0 mt-1" size={20} />
                        <span className="text-body">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact Card */}
              <div className="bg-iron text-white rounded-[var(--radius-card)] p-8 mb-8">
                <h3 className="text-xl font-bold mb-4">Get a Quote</h3>
                <p className="text-on-dark-muted text-sm mb-6">
                  Interested in this service? Contact us for a detailed quote and consultation.
                </p>
                <Link 
                  href="/contact" 
                  className="btn-w btn-primary-w w-full justify-center"
                >
                  Contact Us
                </Link>
                
                <div className="mt-8 pt-8 border-t border-white/10">
                  <h4 className="font-semibold mb-3">Quick Contact</h4>
                  <div className="space-y-3 text-sm text-on-dark-muted">
                    <div>
                      <span className="block text-white font-medium mb-1">Phone</span>
                      +971 50 123 4567
                    </div>
                    <div>
                      <span className="block text-white font-medium mb-1">Email</span>
                      info@alwasatalbared.ae
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Services */}
              <div className="bg-slate-50 rounded-[var(--radius-card)] p-6">
                <h3 className="text-lg font-bold mb-4">Other Services</h3>
                <div className="space-y-4">
                  {otherServices.map((otherService) => (
                    <Link
                      key={otherService.id}
                      href={`/services/${otherService.id}`}
                      className="block group"
                    >
                      <div className="flex gap-3">
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={otherService.image}
                            alt={otherService.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold mb-1 group-hover:text-weld transition-colors">
                            {otherService.title}
                          </h4>
                          <p className="text-xs text-body line-clamp-2">
                            {otherService.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                
                <Link 
                  href="/services" 
                  className="block text-center mt-6 text-sm font-semibold text-iron hover:text-weld transition-colors"
                >
                  View All Services →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
