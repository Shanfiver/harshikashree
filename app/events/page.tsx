import type { Metadata } from 'next'
import SectionHeading from '@/components/SectionHeading'

export const metadata: Metadata = {
  title: 'Events | Harshikashree',
}

const upcoming = [
  {
    date: 'Aug 15, 2026',
    title: 'Annual Cultural Festival',
    venue: '[Venue Name], [City]',
    description: 'A full solo repertoire performance including varnam and thillana.',
  },
  {
    date: 'Sep 20, 2026',
    title: 'Temple Festival Performance',
    venue: '[Temple Name], [City]',
    description: 'Devotional dance performance as part of the festival celebrations.',
  },
]

const past = [
  { date: 'Mar 2025', title: 'Arangetram — Debut Solo Performance', venue: '[Venue Name]' },
  { date: 'Nov 2024', title: 'Inter-School Cultural Showcase', venue: '[Venue Name]' },
  { date: 'Jun 2024', title: 'Community Diwali Celebration', venue: '[Venue Name]' },
]

export default function Events() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <SectionHeading eyebrow="Calendar" title="Upcoming Events" />

      <div className="mt-12 space-y-6">
        {upcoming.map((event) => (
          <div
            key={event.title}
            className="flex flex-col gap-4 rounded-2xl border border-gold/30 bg-cream-dark p-6 sm:flex-row sm:items-center"
          >
            <div className="shrink-0 rounded-xl bg-maroon px-4 py-3 text-center">
              <p className="font-serif text-sm text-gold-light">{event.date}</p>
            </div>
            <div>
              <p className="font-serif text-xl text-maroon">{event.title}</p>
              <p className="mt-1 text-sm uppercase tracking-wider text-gold-dark">
                {event.venue}
              </p>
              <p className="mt-2 text-ink/70">{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <SectionHeading eyebrow="Archive" title="Past Performances" />
        <ul className="mt-10 divide-y divide-gold/20">
          {past.map((event) => (
            <li key={event.title} className="flex flex-wrap items-baseline justify-between gap-2 py-4">
              <div>
                <p className="font-serif text-lg text-maroon">{event.title}</p>
                <p className="text-sm text-ink/60">{event.venue}</p>
              </div>
              <p className="font-sans text-sm uppercase tracking-wider text-gold-dark">
                {event.date}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
