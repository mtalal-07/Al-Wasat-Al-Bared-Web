'use client'

import Link from 'next/link'
import Image from 'next/image'
import Eyebrow from '@/components/ui/Eyebrow'
import { newsArticles } from '@/lib/newsData'
import { ScrollReveal, StaggerItem, StaggerReveal } from '@/components/ui/scroll-reveal'
import { motion } from 'framer-motion'

export default function News() {
  const featuredArticle = newsArticles.find(article => article.featured)
  const regularArticles = newsArticles.filter(article => !article.featured).slice(0, 4)

  return (
    <section className="section-w bg-steel center-text">
      <div className="container-w">
        <ScrollReveal variant="blur-up">
          <Eyebrow centered>Latest News.</Eyebrow>
          <h2 className="section-title">News &amp; Article</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mt-14 text-left items-stretch">
          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 gap-7 order-2 lg:order-1" stagger={0.12}>
            {regularArticles.map((item) => (
              <StaggerItem key={item.id} variant="scale-up">
                <Link href={`/news/${item.slug}`}>
                  <motion.article
                    className="bg-white rounded-[var(--radius-card)] overflow-hidden shadow-[var(--shadow-card)] h-full group"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="overflow-hidden h-[140px]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={140}
                        className="w-full h-[140px] object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-weld text-xs font-[family-name:var(--font-display)] uppercase mb-2 block">
                        {item.category}
                      </span>
                      <h4 className="text-base font-semibold mb-2.5 transition-colors duration-300 group-hover:text-weld">
                        {item.title}
                      </h4>
                      <span className="read-more-w text-[13px] inline-flex items-center gap-1">
                        Read More →
                      </span>
                    </div>
                  </motion.article>
                </Link>
              </StaggerItem>
            ))}
          </StaggerReveal>

          {featuredArticle && (
            <ScrollReveal variant="fade-left" delay={0.15} className="order-1 lg:order-2">
              <Link href={`/news/${featuredArticle.slug}`}>
                <motion.div
                  className="relative rounded-[var(--radius-card)] overflow-hidden min-h-[400px] md:min-h-full flex items-end p-9 bg-cover bg-center shadow-[var(--shadow-card)] group"
                  style={{
                    backgroundImage:
                      `linear-gradient(180deg, rgba(21,23,31,0.1), rgba(21,23,31,0.9)), url(${featuredArticle.image})`,
                  }}
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    className="absolute inset-0 bg-iron/0 group-hover:bg-iron/10 transition-colors duration-500"
                  />
                  <div className="relative z-[1]">
                    <span className="text-weld text-xs font-semibold font-[family-name:var(--font-display)] uppercase mb-3 block">
                      {featuredArticle.category}
                    </span>
                    <h3 className="text-white text-2xl md:text-[26px] font-semibold max-w-[320px] mb-4 transition-transform duration-500 group-hover:translate-y-[-4px]">
                      {featuredArticle.title}
                    </h3>
                    <span className="read-more-w text-white hover:text-weld inline-flex items-center gap-1">
                      Read More →
                    </span>
                  </div>
                </motion.div>
              </Link>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  )
}
