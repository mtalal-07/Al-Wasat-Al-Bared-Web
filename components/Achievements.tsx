import { Award, TrendingUp, Users, Globe } from 'lucide-react'

export default function Achievements() {
  const achievements = [
    {
      icon: Award,
      number: '8+',
      label: 'Years of Experience',
      description: 'Trusted partner in metal fabrication since our establishment'
    },
    {
      icon: TrendingUp,
      number: '500+',
      label: 'Projects Completed',
      description: 'Successful delivery across diverse industries and applications'
    },
    {
      icon: Users,
      number: '50+',
      label: 'Industry Partners',
      description: 'Long-term relationships with leading companies worldwide'
    },
    {
      icon: Globe,
      number: '100%',
      label: 'Quality Assured',
      description: 'ISO 9001 certified processes and zero-defect commitment'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">Our Success</p>
          <h3 className="text-4xl md:text-5xl font-bold text-navy font-serif">Proven Track Record</h3>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement) => {
            const Icon = achievement.icon
            return (
              <div key={achievement.label} className="text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-gold" size={32} />
                </div>
                <h4 className="text-4xl font-bold text-gold mb-1 font-serif">{achievement.number}</h4>
                <p className="text-navy font-semibold text-lg mb-2">{achievement.label}</p>
                <p className="text-charcoal text-sm leading-relaxed">{achievement.description}</p>
              </div>
            )
          })}
        </div>

        {/* Additional Content */}
        <div className="mt-16 bg-light-bg p-8 md:p-12 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-bold text-navy mb-3 font-serif">Our Mission</h4>
              <p className="text-charcoal leading-relaxed">
                To deliver exceptional precision manufacturing solutions that exceed client expectations through innovation, quality, and dedicated service.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-navy mb-3 font-serif">Our Vision</h4>
              <p className="text-charcoal leading-relaxed">
                To be the preferred metal fabrication partner, recognized for technical excellence, reliability, and commitment to customer success.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-navy mb-3 font-serif">Our Values</h4>
              <p className="text-charcoal leading-relaxed">
                Integrity, Quality, Innovation, and Customer Focus drive every decision and action we take in our operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
