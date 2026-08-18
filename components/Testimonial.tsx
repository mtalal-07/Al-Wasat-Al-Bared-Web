'use client'

import { useState, useRef } from 'react'
import { Star, ChevronLeft, ChevronRight, User } from 'lucide-react'
import { KineticTextReveal } from '@/components/ui/kinetic-text-reveal'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { motion, AnimatePresence } from 'framer-motion'

export default function Testimonial() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const testimonials = [
    {
      id: 1,
      text: "Outstanding steel fabrication work. Al Wasat delivered our industrial platforms ahead of schedule with exceptional quality. Their attention to detail and professional approach made the entire project seamless and stress-free.",
      author: "Sarah Johnson",
      company: "INTERCOOL CENTRAL AIR CONDITIONING",
      rating: 5,
      date: "10 days ago"
    },
    {
      id: 2,
      text: "Visited the fabrication site and was impressed. Products are particularly of high quality, especially welds which looked really great. The quality of work and customization after visiting went over all options satisfied.",
      author: "Mohammed Hassan",
      company: "CONVERSION ELECTROMECHANICAL",
      rating: 5,
      date: "2 weeks ago"
    },
    {
      id: 3,
      text: "My buying experience was exceptional and received me very politely. The service experience is also very good with outstanding performance. I never experienced such kind of quality performance. Very good service overall.",
      author: "Ahmed Al-Mansoori",
      company: "SIEMENS",
      rating: 5,
      date: "1 week ago"
    },
    {
      id: 4,
      text: "I love the steel fabrication quality and the customer service is excellent. They respond in a timely manner with loads of information about products, accessories and maintenance. Professional team throughout.",
      author: "David Thompson",
      company: "FAWAZ GROUP",
      rating: 5,
      date: "3 weeks ago"
    },
    {
      id: 5,
      text: "Professional team with excellent technical knowledge and expertise. The handrailing systems they installed exceeded our expectations significantly. Highly recommended for any metal fabrication project requirements.",
      author: "Khalid Rahman",
      company: "STATE CONSTRUCTION",
      rating: 5,
      date: "1 month ago"
    },
    {
      id: 6,
      text: "Reliable partner for our acoustic barrier projects throughout. Al Wasat's engineering expertise and quality workmanship have been consistently outstanding across multiple installations. Excellent collaboration.",
      author: "James Wilson",
      company: "PRIME ELECTROMECHANICAL",
      rating: 5,
      date: "2 months ago"
    },
    {
      id: 7,
      text: "Exceptional stainless steel fabrication services delivered on time. Their precision work and timely delivery made them our preferred contractor for all metalwork requirements. Outstanding quality control.",
      author: "Omar Abdullah",
      company: "RELIANCE ELECTROMECHANICAL",
      rating: 5,
      date: "1 week ago"
    },
    {
      id: 8,
      text: "Top-notch industrial metal works and fabrication services. The platforms and walkways they fabricated are robust and meet all our safety standards perfectly. Great collaboration throughout the project.",
      author: "Robert Chen",
      company: "AL MARWAID GENERAL CONTRACTING GROUP",
      rating: 5,
      date: "3 weeks ago"
    },
    {
      id: 9,
      text: "Quality aluminium fabrication at competitive prices delivered. Al Wasat's technical team provided excellent solutions for our complex architectural requirements. Professional service from start to finish.",
      author: "Hassan Al-Zaabi",
      company: "AL DHABI CONTRACTING LLC",
      rating: 5,
      date: "2 weeks ago"
    },
    {
      id: 10,
      text: "Excellent workmanship and project management throughout the process. The steel structures were delivered on time and installed with precision. Very satisfied with their professional service and quality.",
      author: "Michael Anderson",
      company: "SPECON ELECTROMECHANICAL",
      rating: 5,
      date: "1 month ago"
    },
    {
      id: 11,
      text: "Their machine turning works are outstanding with precision. High precision components manufactured to exact specifications consistently. Reliable partner for our manufacturing needs and requirements.",
      author: "Ali Mohammed",
      company: "DESCON ABU DHABI",
      rating: 5,
      date: "3 weeks ago"
    },
    {
      id: 12,
      text: "Impressive metal bending capabilities with excellent results. Complex custom shapes fabricated with tight tolerances perfectly. Al Wasat continues to be our trusted fabrication partner always.",
      author: "Jennifer Lee",
      company: "TRANSGULF ELECTROMECHANICAL",
      rating: 5,
      date: "2 weeks ago"
    },
    {
      id: 13,
      text: "Professional pipe anchor support fabrication services delivered. Engineering team provided excellent technical solutions for our industrial piping systems. Highly recommended for all projects.",
      author: "Rashid Al-Dhaheri",
      company: "TROJAN GENERAL CONTRACTING LLC",
      rating: 5,
      date: "1 week ago"
    },
    {
      id: 14,
      text: "Outstanding quality and service throughout the project duration. The fencing systems were installed professionally and look great. Al Wasat exceeded our expectations in every aspect of work.",
      author: "Daniel Martinez",
      company: "FIBREX",
      rating: 5,
      date: "4 weeks ago"
    },
    {
      id: 15,
      text: "Reliable stainless steel fabrication services with great quality. Clean welds, excellent finishing, and timely project completion. Very happy with the results and professional team approach.",
      author: "Fatima Al-Hashemi",
      company: "ELEMEC ELECTROMECHANICAL",
      rating: 5,
      date: "2 weeks ago"
    },
    {
      id: 16,
      text: "Exceptional acoustic louver installation with perfect results. The noise reduction performance is excellent and the installation was completed efficiently. Great technical expertise demonstrated.",
      author: "Thomas Wright",
      company: "TECH GROUP",
      rating: 5,
      date: "3 weeks ago"
    },
    {
      id: 17,
      text: "Professional approach and high-quality fabrication throughout. The commercial staircases they built are both functional and aesthetically pleasing. Excellent craftsmanship and attention to detail.",
      author: "Abdullah Al-Mazrouei",
      company: "LOOTAH GROUP",
      rating: 5,
      date: "1 month ago"
    },
    {
      id: 18,
      text: "Top quality aluminium works delivered on schedule perfectly. Their team demonstrated excellent technical skills and delivered beyond our expectations. Will definitely use their services again.",
      author: "Patricia Brown",
      company: "UNESIA ALUMINIUM CONTRACTING CO.LLC",
      rating: 5,
      date: "2 weeks ago"
    },
    {
      id: 19,
      text: "Impressive industrial platform fabrication with great quality. Strong, durable structures installed professionally and safely. Al Wasat's technical expertise and quality control are exceptional.",
      author: "Yousef Al-Suwaidi",
      company: "WALL TECH TECHNOLOGY",
      rating: 5,
      date: "1 week ago"
    },
    {
      id: 20,
      text: "Excellent structural steel fabrication with perfect results. Professional team, quality materials, and precise execution throughout. Very satisfied with the entire project delivery and outcome.",
      author: "Christopher Evans",
      company: "BOSCO GROUP",
      rating: 5,
      date: "3 weeks ago"
    },
  ]

  const visibleTestimonials = [
    testimonials[currentSlide],
    testimonials[(currentSlide + 1) % testimonials.length],
    testimonials[(currentSlide + 2) % testimonials.length],
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-w bg-[#F8F9FA]">
      <div className="container-w">
        <ScrollReveal variant="blur-up" className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            <KineticTextReveal
              text="Read reviews,"
              splitBy="words"
              direction="up"
              stagger={0.06}
              className="text-gray-600 font-normal block"
              segmentClassName="text-gray-600 font-normal"
            />
            <KineticTextReveal
              text="ride with confidence."
              splitBy="words"
              direction="up"
              stagger={0.06}
              delay={0.3}
              className="text-heading block"
              segmentClassName="text-heading"
            />
          </h2>

          <motion.div
            className="flex items-center justify-center gap-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="text-3xl font-bold text-heading">4.8/5</div>
            <div className="flex items-center gap-2">
              <Star size={28} style={{ color: '#2A2F7A', fill: '#2A2F7A' }} />
              <span className="text-xl font-bold text-heading">Trustpilot</span>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Full Width Testimonials */}
        <div className="w-full">
          {/* Marquee Container */}
          <div 
            className="testimonial-marquee-container"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div 
              className="testimonial-marquee-track"
              animate={{
                x: [0, -100 * testimonials.length * 0.5]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: testimonials.length * 5,
                  ease: "linear",
                },
              }}
              style={{
                animationPlayState: isPaused ? 'paused' : 'running'
              }}
            >
              {/* Duplicate testimonials for seamless loop */}
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <motion.article
                  key={`marquee-${testimonial.id}-${index}`}
                  className="testimonial-marquee-card bg-white rounded-xl p-6 shadow-sm flex flex-col"
                  whileHover={{ y: -6, boxShadow: '0 16px 32px rgba(21,23,31,0.1)', scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Testimonial Text */}
                  <p className="text-gray-600 text-[15px] leading-relaxed mb-6 flex-grow line-clamp-4">
                    {testimonial.text}
                  </p>

                  {/* Bottom Section - Fixed at Bottom */}
                  <div className="mt-auto">
                    {/* Star Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} style={{ color: '#2A2F7A', fill: '#2A2F7A' }} />
                      ))}
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                        <User size={20} className="text-gray-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-heading text-[14px] mb-1 truncate">
                          {testimonial.author}
                        </h4>
                        <p className="text-gray-500 text-[12px]">{testimonial.date}</p>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
