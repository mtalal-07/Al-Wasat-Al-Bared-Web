import Eyebrow from '@/components/ui/Eyebrow'

interface PageHeroProps {
  eyebrow?: string
  title: string
  subtitle?: string
  backgroundImage?: string
}

export default function PageHero({ eyebrow, title, subtitle, backgroundImage }: PageHeroProps) {
  return (
    <section
      className="relative text-white py-20 md:py-24 bg-cover bg-center"
      style={{
        backgroundImage: backgroundImage
          ? `linear-gradient(120deg, rgba(21,23,31,0.92) 0%, rgba(21,23,31,0.65) 100%), url(${backgroundImage})`
          : undefined,
        backgroundColor: backgroundImage ? undefined : '#15171F',
      }}
    >
      <div className="container-w text-center">
        {eyebrow && <Eyebrow centered className="justify-center">{eyebrow}</Eyebrow>}
        <h1 className="text-3xl md:text-5xl text-white font-bold mb-3">{title}</h1>
        {subtitle && <p className="text-weld text-lg">{subtitle}</p>}
      </div>
    </section>
  )
}
