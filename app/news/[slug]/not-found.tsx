import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="py-24 md:py-32 bg-steel text-center">
      <div className="container-w">
        <h1 className="text-6xl md:text-8xl font-bold text-heading mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-heading mb-4">Article Not Found</h2>
        <p className="text-body mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the article you're looking for. It may have been removed or the link might be incorrect.
        </p>
        <Link href="/" className="btn-w btn-primary-w inline-flex items-center gap-2">
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>
    </section>
  )
}
