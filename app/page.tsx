import Link from 'next/link'
import HeroSlideshow from '@/components/HeroSlideshow'
import Photo from '@/components/Photo'
import SectionHeading from '@/components/SectionHeading'


const stats = [
  { value: '10+', label: 'Years of Training' },
  { value: '50+', label: 'Total Performances' },
  { value: '30+', label: 'Temple performace' },
  { value: '10+', label: 'Awards & Honors' },
]

const galleryPreview = [
  { label: 'Performance', src: '/images/photos/IMG_3717.jpg' },
  { label: 'Practice', src: '/images/photos/IMG_3161.jpg' },
  { label: 'Costume', src: '/images/photos/IMG_5960.jpg' },
  { label: 'Recognition', src: '/images/photos/IMG_4819.jpg' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[600px] w-full items-center overflow-hidden md:min-h-[88vh]">
        <HeroSlideshow />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-center md:text-left">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.35em] text-gold-light">
            Bharatanatyam &middot; Classical Indian Dance
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-tight text-white drop-shadow-sm md:text-6xl">
            Harshikashree
          </h1>
          <p className="mx-auto mt-6 max-w-md font-display text-xl italic text-white/85 md:mx-0">
            &ldquo;Where rhythm meets devotion, and every mudra tells a story.&rdquo;
          </p>
          <p className="mx-auto mt-6 max-w-md text-white/80 md:mx-0">
            A classically trained Bharatanatyam dancer devoted to preserving and
            sharing the beauty of India&rsquo;s temple dance tradition through
            performance, storytelling, and expression.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <Link
              href="/gallery"
              className="rounded-full bg-gold px-6 py-3 font-sans text-sm font-medium uppercase tracking-wider text-maroon-dark transition hover:bg-gold-light"
            >
              View Gallery
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white px-6 py-3 font-sans text-sm font-medium uppercase tracking-wider text-white transition hover:bg-white hover:text-maroon-dark"
            >
              Book a Performance
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gold/20 bg-maroon">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 text-center md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-3xl text-gold-light md:text-4xl">{stat.value}</p>
              <p className="mt-1 font-sans text-xs uppercase tracking-widest text-cream/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Intro teaser */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <SectionHeading eyebrow="Namaste" title="A Journey Through Classical Dance" />
        <p className="mx-auto mt-6 max-w-2xl text-ink/70">
         Harshikashree Shanmugam is a young Bharatanatyam artiste dedicated to preserving and celebrating India’s rich classical heritage through disciplined practice and meaningful performance. She began her Bharatanatyam journey at the age of five under the guidance of her mother and Guru, Smt. Rajashree Ramu, and has since developed a strong foundation in nritta, abhinaya, and the traditional Margam. 
        </p>
        <Link
          href="/about"
          className="mt-6 inline-block font-sans text-sm font-medium uppercase tracking-wider text-maroon underline decoration-gold decoration-2 underline-offset-4 hover:text-maroon-light"
        >
          Read Her Story
        </Link>
      </section>

      {/* Gallery preview */}
      <section className="bg-cream-dark py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Moments" title="From the Stage" />
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {galleryPreview.map((item) => (
              <Photo
                key={item.label}
                src={item.src}
                alt={`Harshikashree — ${item.label}`}
                label={item.label}
                aspect="aspect-square"
              />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/gallery"
              className="font-sans text-sm font-medium uppercase tracking-wider text-maroon underline decoration-gold decoration-2 underline-offset-4 hover:text-maroon-light"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-maroon-dark py-16 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-serif text-3xl text-gold-light">
            Available for Performances &amp; Events
          </h2>
          <p className="mt-4 text-cream/70">
            From temple festivals to cultural showcases, Harshikashree brings
            grace and devotion to every stage.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-gold px-6 py-3 font-sans text-sm font-medium uppercase tracking-wider text-maroon-dark transition hover:bg-gold-light"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
