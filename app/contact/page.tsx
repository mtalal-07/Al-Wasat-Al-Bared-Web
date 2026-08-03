import { Metadata } from 'next'
import Contact from '@/components/Contact'
import CtaBanner from '@/components/CtaBanner'

export const metadata: Metadata = {
  title: 'Contact | AL WASAT AL BARED ENG. TURNING LLC',
  description: 'Get in touch with AL WASAT for metal fabrication quotes and project consultations in Sharjah, UAE.',
}

export default function ContactPage() {
  return (
    <>
      <Contact />
      <CtaBanner />
    </>
  )
}
