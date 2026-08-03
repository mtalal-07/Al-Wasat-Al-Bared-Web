import { Metadata } from 'next'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Stats from '@/components/Stats'
import WhyChooseUs from '@/components/WhyChooseUs'
import FeatureStrip from '@/components/FeatureStrip'
import Services from '@/components/Services'
import CtaBanner from '@/components/CtaBanner'
import Process from '@/components/Process'
import Testimonial from '@/components/Testimonial'
import News from '@/components/News'

export const metadata: Metadata = {
  title: 'AL WASAT AL BARED ENG. TURNING LLC | Metal Fabrication & Manufacturing',
  description: 'Premium metal fabrication, turning, and manufacturing services in UAE. Industrial solutions for precision parts and components.',
}

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <WhyChooseUs />
      <FeatureStrip />
      <Services />
      <CtaBanner />
      <Process />
      <Testimonial />
      <News />
    </>
  )
}
