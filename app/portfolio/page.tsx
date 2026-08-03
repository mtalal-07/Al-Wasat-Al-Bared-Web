import { Metadata } from 'next'
import Portfolio from '@/components/Portfolio'
import PageHero from '@/components/PageHero'
import CtaBanner from '@/components/CtaBanner'

export const metadata: Metadata = {
  title: 'Projects | AL WASAT AL BARED ENG. TURNING LLC',
  description: 'View our featured projects and showcase of metal fabrication work across the UAE.',
}

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Projects."
        title="Our Projects"
        subtitle="Showcase of our recent manufacturing projects and successful collaborations"
        backgroundImage="/project-industrial-platforms.jpg"
      />
      <Portfolio />
      <CtaBanner />
    </>
  )
}
