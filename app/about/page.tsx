import type { Metadata } from 'next'
import Photo from '@/components/Photo'
import SectionHeading from '@/components/SectionHeading'

export const metadata: Metadata = {
  title: 'About | Harshikashree',
}

const milestones = [
  {
    year: '2015',
    title: 'The Beginning',
    event:
      'Began formal Bharatanatyam training at the age of five under the guidance of her mother and Guru, Smt. Rajashree Ramu.',
  },
  {
    year: '2023',
    title: 'Growing Through Performance',
    event:
      'Received the All India Women Achievers Award in Art & Culture and continued performing across cultural festivals, temple events, and sabhas.',
  },
  {
    year: '2024',
    title: 'Expanding Stage Experience',
    event:
      'Performed at Dance Jathre, Mahashivaratri Natyanjali, Thirunagai Natyanjali, and participated in large-scale classical dance productions across Karnataka and Tamil Nadu.',
  },
  {
    year: '2025',
    title: 'National Recognition',
    event:
      'Performed at Sri Krishna Janmashtami Mandalotsava, Sri Radha Ashtami Fine Arts Festival, and Suryaputra dance drama, while securing Second Prize at the Kala Vijrith National Dance Competition.',
  },
  {
    year: '2026',
    title: 'A Milestone Year',
    event:
      'Awarded the prestigious CCRT Scholarship, completed Level-I Certification in Nattuvangam, represented Tamil Nadu at the BRICS 2026 Cultural Festival, and continues advanced training in Bharatanatyam, Nattuvangam, and Carnatic music.',
  },
]

const awards = [
  {
    title: 'Centre for Cultural Resources and Training (CCRT) Scholarship',
    detail: 'Ministry of Culture, Government of India',
  },
  {
    title: 'Representative of Tamil Nadu',
    detail: 'BRICS 2026 Cultural Festival',
  },
  {
    title: 'Second Prize',
    detail: 'Kala Vijrith National Dance Competition, Chennai',
  },
  {
    title: 'All India Women Achievers Award',
    detail: 'Art & Culture (2023)',
  },
  {
    title: 'Best Dancer of South India',
    detail: '4th Place',
  },
  {
    title: 'Outstanding Performance',
    detail: 'Ninaidha Bala Nruthyotsava',
  },
  {
    title: 'Star of SriRam Nirthyalaya',
    detail: 'Recognition',
  },
  {
    title: 'Level-I Certificate in Nattuvangam',
    detail: 'under Kalaimamani Guru Madurai R. Muralidharan',
  },
]

export default function About() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <SectionHeading eyebrow="About" title="Harshikashree" />

        <div className="mt-12 grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:items-start">
          <Photo
            src="/images/photos/Harshu-pic.jpg"
            alt="Portrait of Harshikashree"
            aspect="aspect-[4/5]"
          />

          <div className="space-y-5 text-ink/70">
            <p className="font-display text-xl italic text-maroon">
              Where devotion finds expression through dance.
            </p>
            <p>
              Harshikashree Shanmugam is a young Bharatanatyam artiste dedicated
              to preserving and celebrating India&rsquo;s rich classical heritage
              through disciplined practice and meaningful performance. She began
              her Bharatanatyam journey at the age of five under the guidance of
              her mother and Guru, <strong className="font-medium text-maroon">Smt. Rajashree Ramu</strong>,
              and has since developed a strong foundation in nritta, abhinaya, and
              the traditional Margam. Alongside Bharatanatyam, she continues her
              training in Nattuvangam under{' '}
              <strong className="font-medium text-maroon">
                Kalaimamani Guru Madurai R. Muralidharan
              </strong>{' '}
              and pursues Carnatic vocal music, embracing a holistic approach to
              the classical arts.
            </p>
            <p>
              Her artistic journey has taken her to prestigious sabhas, temple
              festivals, national competitions, and international cultural
              platforms across India. A recipient of the{' '}
              <strong className="font-medium text-maroon">
                Centre for Cultural Resources and Training (CCRT) Scholarship
              </strong>{' '}
              from the Ministry of Culture, Government of India, Harshikashree
              has also represented Tamil Nadu at the{' '}
              <strong className="font-medium text-maroon">BRICS 2026 Cultural Festival</strong>,
              reflecting her commitment to carrying forward India&rsquo;s timeless
              artistic traditions with grace, discipline, and devotion.
            </p>
          </div>
        </div>
      </section>

      {/* Training / Milestones */}
      <section className="bg-cream-dark py-20">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading eyebrow="Training" title="Journey & Milestones" />
          <ol className="mt-12 space-y-8 border-l border-gold/40 pl-8">
            {milestones.map((m) => (
              <li key={m.year} className="relative">
                <span className="absolute -left-[38px] top-1 h-3 w-3 rounded-full bg-gold" />
                <p className="font-serif text-lg text-maroon">{m.year}</p>
                <p className="mt-1 font-sans text-sm font-semibold uppercase tracking-wider text-gold-dark">
                  {m.title}
                </p>
                <p className="mt-1 text-ink/70">{m.event}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Awards */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <SectionHeading eyebrow="Recognition" title="Awards & Honors" />
        <ul className="mt-10 space-y-4">
          {awards.map((award) => (
            <li
              key={award.title}
              className="flex items-start gap-3 border-b border-gold/20 pb-4 text-ink/70"
            >
              <span className="mt-1 text-gold-dark">&#10022;</span>
              <span>
                <span className="font-medium text-maroon">{award.title}</span>
                {award.detail && <> &mdash; {award.detail}</>}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
