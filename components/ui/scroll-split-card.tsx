"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"

interface CardData {
  title: string
  description: string
  bgColor: string
  textColor: string
  image: string
  serviceNum: string
}

interface ScrollSplitCardProps {
  containerRef: React.RefObject<HTMLDivElement>
  imageSrc: string
  cards: CardData[]
}

export function ScrollSplitCard({ containerRef, imageSrc, cards }: ScrollSplitCardProps) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrolled = container.scrollTop
      const maxScroll = container.scrollHeight - container.clientHeight
      const progress = Math.min(scrolled / maxScroll, 1)
      setScrollProgress(progress)
    }

    container.addEventListener("scroll", handleScroll)
    return () => container.removeEventListener("scroll", handleScroll)
  }, [containerRef])

  // Calculate split progress (0 to 1)
  const splitProgress = Math.min(scrollProgress * 2, 1)
  
  // Calculate flip progress (0 to 1) - starts after split completes
  const flipProgress = Math.max(0, Math.min((scrollProgress - 0.5) * 2, 1))

  // Calculate positions for the three panels
  const leftPanelX = splitProgress * -33.33
  const rightPanelX = splitProgress * 33.33

  return (
    <div className="relative min-h-[400vh]">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-white">
        <div className="relative w-full max-w-7xl mx-auto px-4">
          <div className="relative aspect-[16/9] max-h-[85vh]">
            {/* Main image panels */}
            <div className="absolute inset-0 flex">
              {/* Left panel */}
              <div
                className="relative w-1/3 h-full overflow-hidden"
                style={{
                  transform: `translateX(${leftPanelX}%) rotateY(${flipProgress * -180}deg)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.1s linear",
                }}
              >
                <div
                  className="absolute inset-0 backface-hidden"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <Image
                    src={imageSrc}
                    alt="Service showcase"
                    fill
                    className="object-cover"
                    style={{
                      objectPosition: "0% center",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                </div>
                {/* Back face - Card content */}
                <div
                  ref={(el) => {
                    cardRefs.current[0] = el
                  }}
                  className="absolute inset-0 backface-hidden flex flex-col items-center justify-center p-6 md:p-8"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                    backgroundColor: cards[0]?.bgColor || "#F5F5F3",
                    color: cards[0]?.textColor || "#1A1A1A",
                  }}
                >
                  <div className="w-full h-full flex flex-col">
                    {/* Card Image */}
                    <div className="relative h-[45%] w-full overflow-hidden rounded-t-[var(--radius-card)]">
                      <Image
                        src={cards[0]?.image || "/placeholder.jpg"}
                        alt={cards[0]?.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Card Content */}
                    <div className="flex-1 flex flex-col justify-center px-4 py-5">
                      <div className="inline-flex items-center gap-2 mb-3">
                        <span className="text-accent font-bold text-xs md:text-sm uppercase tracking-wider">
                          SVC {cards[0]?.serviceNum}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 font-[family-name:var(--font-display)] leading-tight">
                        {cards[0]?.title}
                      </h3>
                      <p className="text-sm md:text-base opacity-90 font-[family-name:var(--font-body)] leading-relaxed line-clamp-3">
                        {cards[0]?.description}
                      </p>
                      <Link 
                        href="/services"
                        className="read-more-w mt-4 inline-block text-sm"
                      >
                        View Details →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center panel */}
              <div
                className="relative w-1/3 h-full overflow-hidden"
                style={{
                  transform: `rotateY(${flipProgress * -180}deg)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.1s linear",
                  zIndex: 10,
                }}
              >
                <div
                  className="absolute inset-0 backface-hidden"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <Image
                    src={imageSrc}
                    alt="Service showcase"
                    fill
                    className="object-cover"
                    style={{
                      objectPosition: "50% center",
                    }}
                  />
                </div>
                {/* Back face - Card content */}
                <div
                  ref={(el) => {
                    cardRefs.current[1] = el
                  }}
                  className="absolute inset-0 backface-hidden flex flex-col items-center justify-center p-6 md:p-8"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                    backgroundColor: cards[1]?.bgColor || "#111111",
                    color: cards[1]?.textColor || "#FFFFFF",
                  }}
                >
                  <div className="w-full h-full flex flex-col">
                    {/* Card Image */}
                    <div className="relative h-[45%] w-full overflow-hidden rounded-t-[var(--radius-card)]">
                      <Image
                        src={cards[1]?.image || "/placeholder.jpg"}
                        alt={cards[1]?.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Card Content */}
                    <div className="flex-1 flex flex-col justify-center px-4 py-5">
                      <div className="inline-flex items-center gap-2 mb-3">
                        <span className="text-accent font-bold text-xs md:text-sm uppercase tracking-wider">
                          SVC {cards[1]?.serviceNum}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 font-[family-name:var(--font-display)] leading-tight">
                        {cards[1]?.title}
                      </h3>
                      <p className="text-sm md:text-base opacity-90 font-[family-name:var(--font-body)] leading-relaxed line-clamp-3">
                        {cards[1]?.description}
                      </p>
                      <Link 
                        href="/services"
                        className="read-more-w mt-4 inline-block text-sm"
                      >
                        View Details →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right panel */}
              <div
                className="relative w-1/3 h-full overflow-hidden"
                style={{
                  transform: `translateX(${rightPanelX}%) rotateY(${flipProgress * -180}deg)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.1s linear",
                }}
              >
                <div
                  className="absolute inset-0 backface-hidden"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <Image
                    src={imageSrc}
                    alt="Service showcase"
                    fill
                    className="object-cover"
                    style={{
                      objectPosition: "100% center",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent" />
                </div>
                {/* Back face - Card content */}
                <div
                  ref={(el) => {
                    cardRefs.current[2] = el
                  }}
                  className="absolute inset-0 backface-hidden flex flex-col items-center justify-center p-6 md:p-8"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                    backgroundColor: cards[2]?.bgColor || "#D4A017",
                    color: cards[2]?.textColor || "#111111",
                  }}
                >
                  <div className="w-full h-full flex flex-col">
                    {/* Card Image */}
                    <div className="relative h-[45%] w-full overflow-hidden rounded-t-[var(--radius-card)]">
                      <Image
                        src={cards[2]?.image || "/placeholder.jpg"}
                        alt={cards[2]?.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Card Content */}
                    <div className="flex-1 flex flex-col justify-center px-4 py-5">
                      <div className="inline-flex items-center gap-2 mb-3">
                        <span className="font-bold text-xs md:text-sm uppercase tracking-wider" style={{ color: cards[2]?.bgColor === "#D4A017" ? "#111111" : "#D4A017" }}>
                          SVC {cards[2]?.serviceNum}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 font-[family-name:var(--font-display)] leading-tight">
                        {cards[2]?.title}
                      </h3>
                      <p className="text-sm md:text-base opacity-90 font-[family-name:var(--font-body)] leading-relaxed line-clamp-3">
                        {cards[2]?.description}
                      </p>
                      <Link 
                        href="/services"
                        className="inline-block text-sm font-semibold mt-4 transition-opacity hover:opacity-80"
                        style={{ color: cards[2]?.bgColor === "#D4A017" ? "#111111" : "#D4A017" }}
                      >
                        View Details →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
              <div className="flex items-center gap-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor:
                        flipProgress > i / 3 ? "#D4A017" : "rgba(255,255,255,0.5)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
