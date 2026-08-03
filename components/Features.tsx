import { Award, Clock, Users, Zap } from 'lucide-react'
import Image from 'next/image'

export default function Features() {
  return (
    <section className="py-20 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=600&fit=crop"
              alt="Modern manufacturing facility"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">Why Choose Us</p>
              <h3 className="text-4xl font-bold font-serif">Excellence in Every Detail</h3>
            </div>

            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="text-gold" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Industry Certification</h4>
                  <p className="text-gray-300 leading-relaxed">
                    ISO 9001 certified and recognized for maintaining the highest quality standards in metal fabrication.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-gold" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Fast Turnaround</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Efficient production processes ensure quick delivery without compromising on quality or precision.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="text-gold" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Expert Team</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Experienced engineers and technicians dedicated to delivering exceptional results on every project.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="text-gold" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Advanced Technology</h4>
                  <p className="text-gray-300 leading-relaxed">
                    State-of-the-art CNC machinery and equipment for precision manufacturing and custom solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
