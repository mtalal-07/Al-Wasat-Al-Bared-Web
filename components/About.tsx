import Image from 'next/image'
import { Clock, HardHat } from 'lucide-react'
import Eyebrow from '@/components/ui/Eyebrow'

export default function About() {
  const tags = [
    'Steel Fabrication',
    'Aluminium Fabrication',
    'Stainless Steel Works',
    'Industrial Metal Works',
    'CNC Machining',
  ]

  return (
    <section className="bg-white text-heading pt-16 md:pt-20 pb-16 md:pb-24 section-w">
      <div className="container-w">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 xl:gap-16 lg:items-stretch">
          {/* Left — collage image */}
          <div className="about-collage">
            <div className="about-collage-bar"></div>
            <div className="about-collage-main">
              <Image
                src="/welding1.jpg"
                alt="Metal fabrication at work"
                width={640}
                height={900}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="about-collage-frame">
              <Image
                src="/welding2.jpg"
                alt="Fabrication workshop"
                width={480}
                height={680}
                className="w-full h-full object-cover rounded-[5px]"
              />
            </div>
          </div>

          {/* Right — defines row height */}
          <div className="flex flex-col justify-between py-1 lg:py-2 min-h-[500px] lg:min-h-0">
            <div>
              <Eyebrow>About Al Wasat.</Eyebrow>
              <h2 className="section-title max-w-[540px]">
                We Are Metal Fabrication &amp; Aluminium Expert Company
              </h2>
              <p className="text-body text-[15px] md:text-[16px] leading-[1.75] mb-8 max-w-[540px]">
                Since 2016, AL WASAT AL BARED ENG. TURNING LLC has delivered precision steel, aluminium, and stainless steel fabrication. Every project is handled with certified craftsmanship, on-time delivery, and equipment you can trust.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex gap-3.5 items-start">
                  <div className="icon-box-w yellow w-[52px] h-[52px] shrink-0">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h4 className="text-heading text-[17px] font-semibold mb-1.5">Strict Deadline</h4>
                    <p className="text-[13px] text-body leading-[1.65]">We plan around your schedule, not ours.</p>
                  </div>
                </div>
                <div className="flex gap-3.5 items-start">
                  <div className="w-[52px] h-[52px] shrink-0 rounded-[var(--radius-chip)] border-2 border-iron flex items-center justify-center text-iron">
                    <HardHat size={22} />
                  </div>
                  <div>
                    <h4 className="text-heading text-[17px] font-semibold mb-1.5">Talented Staff</h4>
                    <p className="text-[13px] text-body leading-[1.65]">Certified fabricators across every specialty.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
