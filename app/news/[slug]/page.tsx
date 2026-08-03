import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react'
import { getNewsArticle, getAllNewsSlugs } from '@/lib/newsData'
import CtaBanner from '@/components/CtaBanner'

export async function generateStaticParams() {
  const slugs = getAllNewsSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = getNewsArticle(slug)

  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: `${article.title} | AL WASAT AL BARED`,
    description: article.excerpt,
  }
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getNewsArticle(slug)

  if (!article) {
    notFound()
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-dark text-white py-20 md:py-28">
        <div className="container-w">
          <Link href="/" className="inline-flex items-center gap-2 text-weld hover:text-weld-dark transition-colors mb-6">
            <ArrowLeft size={20} />
            <span className="font-semibold">Back to Home</span>
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-flex items-center gap-1.5 text-weld text-sm font-semibold uppercase">
                <Tag size={14} />
                {article.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-on-dark-muted text-sm">
                <Calendar size={14} />
                {article.date}
              </span>
              <span className="inline-flex items-center gap-1.5 text-on-dark-muted text-sm">
                <User size={14} />
                {article.author}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {article.title}
            </h1>

            <p className="text-on-dark-muted text-lg leading-relaxed">
              {article.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 md:py-20 bg-white">
        <div className="container-w">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <div className="relative w-full h-[400px] md:h-[500px] rounded-[12px] overflow-hidden mb-12 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Article Body */}
            <div className="article-content space-y-5">
              {article.content.split('\n\n').map((paragraph, index) => {
                const trimmed = paragraph.trim()
                
                // Main heading (# )
                if (trimmed.startsWith('# ')) {
                  return (
                    <h1 key={index} className="font-display text-2xl md:text-3xl font-bold text-heading mt-10 mb-5 leading-tight">
                      {trimmed.replace('# ', '')}
                    </h1>
                  )
                }
                
                // Subheading (## )
                if (trimmed.startsWith('## ')) {
                  return (
                    <h2 key={index} className="font-display text-xl md:text-2xl font-bold text-heading mt-8 mb-4 leading-tight">
                      {trimmed.replace('## ', '')}
                    </h2>
                  )
                }
                
                // Sub-subheading (### )
                if (trimmed.startsWith('### ')) {
                  return (
                    <h3 key={index} className="font-display text-lg md:text-xl font-bold text-heading mt-6 mb-3 leading-snug">
                      {trimmed.replace('### ', '')}
                    </h3>
                  )
                }
                
                // Check if this paragraph contains list items
                const lines = trimmed.split('\n')
                const hasListItems = lines.some(line => line.trim().startsWith('- ') || line.trim().startsWith('* '))
                
                if (hasListItems) {
                  const listItems = lines.filter(line => line.trim().startsWith('- ') || line.trim().startsWith('* '))
                  const beforeList = lines.filter(line => !line.trim().startsWith('- ') && !line.trim().startsWith('* ')).join(' ')
                  
                  return (
                    <div key={index}>
                      {beforeList && (
                        <p className="text-body text-[14px] leading-[1.7] mb-3 font-normal">
                          {beforeList.replace(/\*\*(.+?)\*\*/g, '$1')}
                        </p>
                      )}
                      <ul className="space-y-2 pl-6">
                        {listItems.map((item, i) => (
                          <li key={i} className="text-body text-[14px] leading-[1.7] list-disc font-normal">
                            {item.replace(/^[*-]\s*/, '').replace(/\*\*(.+?)\*\*/g, '$1')}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                }
                
                // Numbered lists
                if (/^\d+\./.test(trimmed)) {
                  const items = lines.filter(line => /^\d+\./.test(line.trim()))
                  return (
                    <ol key={index} className="space-y-2 pl-6">
                      {items.map((item, i) => (
                        <li key={i} className="text-body text-[14px] leading-[1.7] list-decimal font-normal">
                          {item.replace(/^\d+\.\s*/, '').replace(/\*\*(.+?)\*\*/g, '$1')}
                        </li>
                      ))}
                    </ol>
                  )
                }
                
                // Regular paragraph - remove all bold formatting
                if (trimmed && !trimmed.startsWith('#')) {
                  // Remove all ** markers and keep text normal
                  const cleanText = trimmed.replace(/\*\*(.+?)\*\*/g, '$1')
                  
                  return (
                    <p key={index} className="text-body text-[14px] leading-[1.7] font-normal">
                      {cleanText}
                    </p>
                  )
                }
                
                return null
              })}
            </div>

            {/* Article Footer */}
            <div className="mt-12 pt-8 border-t border-border-light">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-steel flex items-center justify-center">
                    <User size={20} className="text-heading" />
                  </div>
                  <div>
                    <p className="font-semibold text-heading">{article.author}</p>
                    <p className="text-sm text-body">AL WASAT AL BARED ENG. TURNING LLC</p>
                  </div>
                </div>

                <Link href="/" className="btn-w btn-primary-w">
                  View All Articles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <CtaBanner />
    </>
  )
}
