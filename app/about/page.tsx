import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Play, Target, Shield, Handshake } from 'lucide-react'
import PageHero from '@/components/PageHero'
import '../marquee.css'

export const metadata: Metadata = {
  title: 'About Us | AL WASAT AL BARED ENG. TURNING LLC',
  description: 'Learn about our metal fabrication company, certified quality, state-of-the-art machinery, and expert technical team serving UAE since 2016.',
}

export default function AboutPage() {
  return (
    <>
      {/* PAGE BANNER */}
      <PageHero
        eyebrow="About Us"
        title="About Us"
        subtitle="HOME > ABOUT US"
        backgroundImage="/about3.jpg"
      />

      {/* ABOUT INTRO */}
      <section className="py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
            {/* Left Text Column */}
            <div>
              <div className="flex items-center gap-2.5 text-weld font-display font-semibold uppercase text-[13px] tracking-[1.5px] mb-3.5">
                <span className="w-5 h-0.5 bg-weld inline-block"></span>
                About Us
              </div>
              <h2 className="font-display text-[32px] font-bold text-heading leading-[1.3] mb-[22px] max-w-[440px]">
                Forging Strength From Raw Steel
              </h2>
              <div className="flex gap-4 border-l-[3px] border-weld pl-[18px] mb-5">
                <p className="text-[14px] text-heading font-medium">
                  Since 2016, AL WASAT AL BARED ENG. TURNING LLC has been providing hands-on fabrication expertise, certified welding, and modern equipment for every project we undertake, no matter the scale.
                </p>
              </div>
              <p className="text-[14px] text-body mb-8">
                From single-site repairs to full structural builds, our crews are trained to deliver precise, on-schedule work that holds up under real industrial load. Our integrated approach to engineering, fabrication, and installation ensures comprehensive solutions and value-added services.
              </p>
              <div className="flex items-center gap-5">
                <Link href="/contact" className="inline-flex items-center gap-2.5 px-[30px] py-4 bg-weld text-dark font-display font-semibold text-[14px] rounded-[4px] hover:bg-[#DD8F0F] transition-all">
                  Contact Us
                </Link>
                <button className="w-12 h-12 rounded-full bg-dark text-weld flex items-center justify-center hover:bg-heading transition-all">
                  <Play size={14} fill="currentColor" />
                </button>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="relative">
              <div className="absolute left-[-1px] top-0 bottom-0 w-[52px] bg-weld text-dark flex items-center justify-center font-display font-bold text-[13px] tracking-[0.5px] rounded-l-[8px]"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                8+ YEARS OF EXPERIENCE
              </div>
              <div className="pl-[52px]">
                <Image
                  src="/About_Image.jpg"
                  alt="Metal fabrication at work"
                  width={800}
                  height={400}
                  className="w-full h-[400px] object-cover rounded-[8px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUALITY POLICY */}
      <section className="bg-white py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center gap-2.5 text-weld font-display font-semibold uppercase text-[13px] tracking-[1.5px] mb-3.5 justify-center">
              <span className="w-5 h-0.5 bg-weld inline-block"></span>
              Our Commitment
            </div>
            <h2 className="font-display text-[32px] font-bold text-heading leading-[1.3] mb-[22px]">
              Quality Policy
            </h2>
          </div>
          
          <div className="max-w-[900px] mx-auto">
            <p className="text-[15px] text-body leading-relaxed mb-8">
              Our policy is to identify and meet the needs of our customers by providing quality products and services delivered on time and in accordance with their requirements through professionally trained technicians.
            </p>
            
            <p className="text-[15px] text-body leading-relaxed mb-6">
              To implement this policy, AL WASAT AL BARED ENG ensures:
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-weld mt-1">•</span>
                <span className="text-[14px] text-body leading-relaxed">
                  Systematic evaluation of designs and re-engineering to deliver cost-effective performance and assure the quality of our services.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-weld mt-1">•</span>
                <span className="text-[14px] text-body leading-relaxed">
                  Implementing products quality checks throughout production stages.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-weld mt-1">•</span>
                <span className="text-[14px] text-body leading-relaxed">
                  Timely delivery of products and services to our customers.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-weld mt-1">•</span>
                <span className="text-[14px] text-body leading-relaxed">
                  Continuous involvement and skill enhancement of employees through training.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-weld mt-1">•</span>
                <span className="text-[14px] text-body leading-relaxed">
                  Regular maintenance of our machines, equipment, and tools.
                </span>
              </li>
            </ul>
            
            <p className="text-[15px] text-body leading-relaxed">
              We are dedicated to total client satisfaction by meeting or exceeding expectations in study, quality fabrication, delivery, installation, and knowledgeable customer service. We never compromise on quality and are committed to keeping our customers satisfied by offering high-quality products at very competitive prices.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#F6F6F8] py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[8px] overflow-hidden shadow-[0_20px_40px_rgba(21,23,31,0.08)]">
            {/* Image Column */}
            <div className="relative min-h-[420px]">
              <Image
                src="/project-bending-works2.jpg"
                alt="Metal fabrication close up"
                fill
                className="object-cover"
              />
            </div>

            {/* Content Column */}
            <div className="p-14 relative">
              <div className="flex items-center gap-2.5 text-weld font-display font-semibold uppercase text-[13px] tracking-[1.5px] mb-3.5">
                <span className="w-5 h-0.5 bg-weld inline-block"></span>
                Why Choose Us
              </div>
              <h2 className="font-display text-[28px] font-bold text-heading leading-[1.3] mb-[18px] max-w-[440px]">
                From Raw Steel To Finished Structure
              </h2>
              <p className="text-[14px] text-body mb-9 max-w-[440px]">
                Certified teams, modern equipment, and honest quotes — everything we do is built around getting the job done right the first time.
              </p>

              {/* Stats */}
              <div className="flex gap-[60px] mb-9">
                <div>
                  <div className="font-display font-extrabold text-[32px] text-[#DD8F0F]">753+</div>
                  <div className="text-[13px] text-body mt-1">Project Completed</div>
                </div>
                <div>
                  <div className="font-display font-extrabold text-[32px] text-[#DD8F0F]">342+</div>
                  <div className="text-[13px] text-body mt-1">Satisfied Clients</div>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="mb-[18px] max-w-[440px]">
                <div className="flex justify-between text-[13px] font-semibold text-heading font-display mb-2">
                  <span>Fabrication Services</span>
                  <span>92%</span>
                </div>
                <div className="h-1.5 bg-[#E7E7EC] rounded overflow-hidden">
                  <div className="h-full bg-weld rounded" style={{ width: '92%' }}></div>
                </div>
              </div>

              <div className="max-w-[440px]">
                <div className="flex justify-between text-[13px] font-semibold text-heading font-display mb-2">
                  <span>Arrival Time</span>
                  <span>97%</span>
                </div>
                <div className="h-1.5 bg-[#E7E7EC] rounded overflow-hidden">
                  <div className="h-full bg-weld rounded" style={{ width: '97%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VISION */}
      <section className="py-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
            {/* Image Column */}
            <div className="relative">
              <div className="absolute w-[90px] h-[90px] bg-weld bottom-[-20px] right-[-20px] rounded-[6px] -z-10"></div>
              <Image
                src="/cnc-turning-service-scaled.jpeg"
                alt="Steel workshop"
                width={800}
                height={420}
                className="w-full h-[420px] object-cover rounded-[8px]"
              />
            </div>

            {/* Text Column */}
            <div>
              <div className="flex items-center gap-2.5 text-weld font-display font-semibold uppercase text-[13px] tracking-[1.5px] mb-3.5">
                <span className="w-5 h-0.5 bg-weld inline-block"></span>
                Our Vision
              </div>
              <h2 className="font-display text-[32px] font-bold text-heading leading-[1.3] mb-[18px] max-w-[440px]">
                Building The Industry&apos;s Most Trusted Fabrication Name
              </h2>
              <p className="text-[14px] text-body mb-8 max-w-[460px]">
                We want every client — from a single repair to a full industrial contract — to know AL WASAT as the standard for precision, safety, and reliability in metal work across the UAE.
              </p>

              {/* Values Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="flex flex-col gap-3">
                  <div className="w-[46px] h-[46px] bg-dark text-weld rounded-[6px] flex items-center justify-center text-[19px]">
                    <Target size={19} />
                  </div>
                  <h4 className="font-display text-[15px] font-bold text-heading">Precision First</h4>
                  <p className="text-[12.5px] text-body">Every weld tested and inspected before it leaves our shop.</p>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="w-[46px] h-[46px] bg-dark text-weld rounded-[6px] flex items-center justify-center text-[19px]">
                    <Shield size={19} />
                  </div>
                  <h4 className="font-display text-[15px] font-bold text-heading">Safety Always</h4>
                  <p className="text-[12.5px] text-body">Certified crews trained to strict industrial safety standards.</p>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="w-[46px] h-[46px] bg-dark text-weld rounded-[6px] flex items-center justify-center text-[19px]">
                    <Handshake size={19} />
                  </div>
                  <h4 className="font-display text-[15px] font-bold text-heading">Honest Partnership</h4>
                  <p className="text-[12.5px] text-body">Transparent pricing and timelines, no surprises later.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT MARQUEE */}
      <section className="bg-[#F6F6F8] border-b-[3px] border-weld py-14 md:py-16 text-center overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 mb-12">
          <h2 className="font-display text-[32px] md:text-[36px] font-extrabold text-heading leading-[1.3]">
            Trusted by Industry Leaders
          </h2>
        </div>
        <div className="marquee-mask">
          <div className="marquee-track-smooth">
            {/* Set A */}
            <span className="marquee-item-dot">INTERCOOL CENTRAL AIR CONDITIONING</span>
            <span className="marquee-item-dot">CONVERSION ELECTROMECHANICAL</span>
            <span className="marquee-item-dot">SIEMENS</span>
            <span className="marquee-item-dot">FAWAZ GROUP</span>
            <span className="marquee-item-dot">STATE CONSTRUCTION</span>
            <span className="marquee-item-dot">PRIME ELECTROMECHANICAL</span>
            <span className="marquee-item-dot">RELIANCE ELECTROMECHANICAL</span>
            <span className="marquee-item-dot">AL MARWAID GENERAL CONTRACTING GROUP</span>
            <span className="marquee-item-dot">AL DHABI CONTRACTING LLC</span>
            <span className="marquee-item-dot">SPECON ELECTROMECHANICAL</span>
            <span className="marquee-item-dot">DESCON ABU DHABI</span>
            <span className="marquee-item-dot">TRANSGULF ELECTROMECHANICAL</span>
            <span className="marquee-item-dot">TROJAN GENERAL CONTRACTING LLC</span>
            <span className="marquee-item-dot">FIBREX</span>
            <span className="marquee-item-dot">ELEMEC ELECTROMECHANICAL</span>
            <span className="marquee-item-dot">TECH GROUP</span>
            <span className="marquee-item-dot">LOOTAH GROUP</span>
            <span className="marquee-item-dot">UNESIA ALUMINIUM CONTRACTING CO.LLC</span>
            <span className="marquee-item-dot">WALL TECH TECHNOLOGY</span>
            <span className="marquee-item-dot">BOSCO GROUP</span>
            {/* Set B (duplicate for seamless loop) */}
            <span className="marquee-item-dot">INTERCOOL CENTRAL AIR CONDITIONING</span>
            <span className="marquee-item-dot">CONVERSION ELECTROMECHANICAL</span>
            <span className="marquee-item-dot">SIEMENS</span>
            <span className="marquee-item-dot">FAWAZ GROUP</span>
            <span className="marquee-item-dot">STATE CONSTRUCTION</span>
            <span className="marquee-item-dot">PRIME ELECTROMECHANICAL</span>
            <span className="marquee-item-dot">RELIANCE ELECTROMECHANICAL</span>
            <span className="marquee-item-dot">AL MARWAID GENERAL CONTRACTING GROUP</span>
            <span className="marquee-item-dot">AL DHABI CONTRACTING LLC</span>
            <span className="marquee-item-dot">SPECON ELECTROMECHANICAL</span>
            <span className="marquee-item-dot">DESCON ABU DHABI</span>
            <span className="marquee-item-dot">TRANSGULF ELECTROMECHANICAL</span>
            <span className="marquee-item-dot">TROJAN GENERAL CONTRACTING LLC</span>
            <span className="marquee-item-dot">FIBREX</span>
            <span className="marquee-item-dot">ELEMEC ELECTROMECHANICAL</span>
            <span className="marquee-item-dot">TECH GROUP</span>
            <span className="marquee-item-dot">LOOTAH GROUP</span>
            <span className="marquee-item-dot">UNESIA ALUMINIUM CONTRACTING CO.LLC</span>
            <span className="marquee-item-dot">WALL TECH TECHNOLOGY</span>
            <span className="marquee-item-dot">BOSCO GROUP</span>
          </div>
        </div>
      </section>
    </>
  )
}
