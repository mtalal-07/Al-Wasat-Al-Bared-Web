import { Phone } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section className="py-6">
      <div className="container-w">
        <a 
          href="tel:+97165344415" 
          className="block rounded-2xl p-6 flex items-center justify-between cursor-pointer hover:opacity-90 transition-opacity" 
          style={{ backgroundColor: '#F6A821' }}
        >
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-800">Call us today</span>
            <span className="text-xl font-bold text-gray-900">+971 6 534 4415</span>
          </div>
          <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center">
            <Phone size={20} className="text-white" />
          </div>
        </a>
      </div>
    </section>
  )
}
