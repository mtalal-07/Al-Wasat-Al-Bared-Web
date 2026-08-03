import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | AL WASAT AL BARED ENG. TURNING LLC',
  description: 'Get in touch with our team. Contact us for project quotes, inquiries, and metal fabrication solutions. Phone: +971 6 534 4415',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
