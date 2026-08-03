import Link from 'next/link'

export default function ServiceNotFound() {
  return (
    <section className="section-w bg-white min-h-[60vh] flex items-center justify-center">
      <div className="container-w text-center">
        <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
        <p className="text-body mb-8">
          The service you're looking for doesn't exist.
        </p>
        <Link href="/services" className="btn-w btn-primary-w">
          View All Services
        </Link>
      </div>
    </section>
  )
}
