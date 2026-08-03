import Link from 'next/link'
import Image from 'next/image'
import Eyebrow from '@/components/ui/Eyebrow'
import { newsArticles } from '@/lib/newsData'

export default function News() {
  const featuredArticle = newsArticles.find(article => article.featured)
  const regularArticles = newsArticles.filter(article => !article.featured).slice(0, 4)

  return (
    <section className="section-w bg-steel center-text">
      <div className="container-w">
        <Eyebrow centered>Latest News.</Eyebrow>
        <h2 className="section-title">News &amp; Article</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mt-14 text-left items-stretch">
          {/* Left — 2×2 small cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 order-2 lg:order-1">
            {regularArticles.map((item) => (
              <Link href={`/news/${item.slug}`} key={item.id}>
                <article className="bg-white rounded-[var(--radius-card)] overflow-hidden shadow-[var(--shadow-card)] hover:-translate-y-1 transition-transform duration-200 h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={140}
                    className="w-full h-[140px] object-cover"
                  />
                  <div className="p-5">
                    <span className="text-weld text-xs  font-[family-name:var(--font-display)] uppercase mb-2 block">
                      {item.category}
                    </span>
                    <h4 className="text-base font-semibold mb-2.5">{item.title}</h4>
                    <span className="read-more-w text-[13px]">
                      Read More →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Right — large featured card */}
          {featuredArticle && (
            <Link href={`/news/${featuredArticle.slug}`}>
              <div
                className="relative rounded-[var(--radius-card)] overflow-hidden min-h-[400px] md:min-h-full flex items-end p-9 bg-cover bg-center order-1 lg:order-2 shadow-[var(--shadow-card)] hover:-translate-y-1 transition-transform duration-200"
                style={{
                  backgroundImage:
                    `linear-gradient(180deg, rgba(21,23,31,0.1), rgba(21,23,31,0.9)), url(${featuredArticle.image})`,
                }}
              >
                <div>
                  <span className="text-weld text-xs font-semibold font-[family-name:var(--font-display)] uppercase mb-3 block">
                    {featuredArticle.category}
                  </span>
                  <h3 className="text-white text-2xl md:text-[26px] font-semibold max-w-[320px] mb-4">
                    {featuredArticle.title}
                  </h3>
                  <span className="read-more-w text-white hover:text-weld">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
