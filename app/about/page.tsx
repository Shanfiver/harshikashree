import type { Metadata } from 'next'
import PlaceholderImage from '@/components/PlaceholderImage'
import SectionHeading from '@/components/SectionHeading'

export const metadata: Metadata = {
  title: 'About | Harshikashree',
}

const milestones = [
  { year: '2014', event: 'Began Bharatanatyam training under Guru [Name], [Dance School Name]' },
  { year: '2018', event: 'First solo stage performance at [Venue / Festival Name]' },
  { year: '2021', event: 'Completed Arangetram — her formal debut solo performance' },
  { year: '2023', event: 'Featured performer at [Cultural Event / Competition Name]' },
  { year: '2025', event: 'Continuing advanced training and choreography under [Guru Name]' },
]

const awards = [
  'Best Young Dancer — [Competition Name], [Year]',
  'State-level Bharatanatyam Championship — [Placement], [Year]',
  'Cultural Excellence Award — [Organization Name], [Year]',
]

export default function About() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <SectionHeading eyebrow="About" title="Harshikashree" />

        <div className="mt-12 grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:items-start">
          <PlaceholderImage label="Portrait" aspect="aspect-[4/5]" />

          <div className="space-y-5 text-ink/70">
            <p>
              Harshikashree is a classically trained Bharatanatyam dancer whose
              passion for movement, mythology, and music began at a young age.
              Under the guidance of her guru, she has spent years mastering the
              intricate footwork (nritta), storytelling gestures (abhinaya), and
              devotional spirit that define this ancient temple art form.
            </p>
            <p>
              This is placeholder biography text — replace it with Harshikashree&rsquo;s
              real story: where she trained, the dance school or guru lineage she
              belongs to, the styles or repertoire pieces (varnams, padams,
              thillanas) she performs, and what dance means to her personally.
            </p>
            <p>
              Beyond the stage, she continues to deepen her practice, exploring
              choreography and the cultural history behind each piece she performs.
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
              key={award}
              className="flex items-start gap-3 border-b border-gold/20 pb-4 text-ink/70"
            >
              <span className="mt-1 text-gold-dark">&#10022;</span>
              <span>{award}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
