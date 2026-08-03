import { Phone } from 'lucide-react'
import Eyebrow from '@/components/ui/Eyebrow'

export default function CtaBanner() {
  return (
    <section
      className="relative text-white text-center py-16 md:py-20 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          'linear-gradient(120deg, rgba(21,23,31,0.93), rgba(21,23,31,0.7)), url(/cta2.jpg)',
      }}
    >
      <div className="container-w">
        <Eyebrow centered className="justify-center">We&apos;re Ready Anytime.</Eyebrow>
        <h2 className="section-title text-white max-w-[700px] mx-auto">
          Always On Standby, Any Time You Call
        </h2>
        <p className="max-w-[560px] mx-auto mb-8 text-on-dark-muted">
          Urgent repair or unplanned downtime — our emergency crews are one call away, day or night.
        </p>
        <a href="tel:+97165344415" className="btn-w btn-primary-w inline-flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-dark flex items-center justify-center">
            <Phone size={16} />
          </div>
          +971 6 534 4415
        </a>
      </div>
    </section>
  )
}
