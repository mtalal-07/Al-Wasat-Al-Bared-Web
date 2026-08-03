'use client'

import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, User } from 'lucide-react'

export default function Testimonial() {
  const [currentSlide, setCurrentSlide] = useState(0)

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
        {/* Top Section - Centered Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="text-gray-600 font-normal">Read reviews,</span>
            <br />
            <span className="text-heading">ride with confidence.</span>
          </h2>

          {/* Rating Section */}
          <div className="flex items-center justify-center gap-6 mb-4">
            <div className="text-4xl font-bold text-heading">4.8/5</div>
            <div className="flex items-center gap-2">
              <Star className="text-weld fill-weld" size={32} />
              <span className="text-2xl font-bold text-heading">Trustpilot</span>
            </div>
          </div>
          <p className="text-body text-lg">Based on 5210 reviews</p>
        </div>

        {/* Bottom Section - Left Text + Right Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side - Quote and Navigation */}
          <div className="lg:col-span-4">
            {/* Large Quote Mark */}
            <div className="mb-0">
              <span className="text-[140px] leading-none text-gray-300 font-serif">&ldquo;</span>
            </div>

            {/* Title */}
            <h3 className="text-3xl  text-heading mb-12">
              What our customers are saying
            </h3>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-4">
              <button
                onClick={prevSlide}
                className="w-14 h-14 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-heading hover:bg-heading hover:text-white transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="flex-1 h-0.5 bg-gray-300 relative">
                <div 
                  className="absolute left-0 top-0 h-full bg-heading transition-all duration-300"
                  style={{ width: `${((currentSlide + 1) / testimonials.length) * 100}%` }}
                />
              </div>
              <button
                onClick={nextSlide}
                className="w-14 h-14 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-heading hover:bg-heading hover:text-white transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Right Side - Testimonial Cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {visibleTestimonials.map((testimonial, index) => (
                <article
                  key={`${testimonial.id}-${index}`}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
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
                        <Star key={i} size={16} className="text-weld fill-weld" />
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
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
