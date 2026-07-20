import type { Metadata } from 'next'
import SectionHeading from '@/components/SectionHeading'
import { events, formatEventDate } from '@/data/events'

export const metadata: Metadata = {
  title: 'Events | Harshikashree',
}

const upcoming = events
  .filter((e) => e.status === 'Upcoming')
  .sort((a, b) => a.date.localeCompare(b.date))

const past = events
  .filter((e) => e.status === 'Completed')
  .sort((a, b) => b.date.localeCompare(a.date))

export default function Events() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <SectionHeading eyebrow="Calendar" title="Upcoming Events" />

      <div className="mt-12 space-y-6">
        {upcoming.map((event) => {
          const { day, month } = formatEventDate(event.date)
          return (
            <div
              key={event.eventTitle + event.date}
              className="flex flex-col gap-6 rounded-2xl border border-gold/30 bg-cream-dark p-6 sm:flex-row"
            >
              <div className="flex shrink-0 flex-row items-center gap-3 sm:w-28 sm:flex-col sm:items-stretch sm:text-center">
                <div className="rounded-xl bg-maroon px-4 py-3 text-center sm:w-full">
                  <p className="font-serif text-2xl text-gold-light">{day}</p>
                  <p className="text-xs uppercase tracking-widest text-cream/70">{month}</p>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-serif text-xl text-maroon">{event.eventTitle}</p>
                  <span className="rounded-full border border-gold/40 px-3 py-0.5 text-[11px] font-medium uppercase tracking-wider text-gold-dark">
                    {event.occasion}
                  </span>
                </div>
                <p className="mt-1 text-sm uppercase tracking-wider text-gold-dark">
                  {event.venue}, {event.city}
                </p>
                <p className="mt-3 text-ink/70">{event.description}</p>
                <p className="mt-3 text-xs text-ink/50">
                  {event.performanceTitle} &middot; {event.repertoire} &middot; {event.duration}
                </p>
                <p className="mt-1 text-xs text-ink/50">Guru: {event.guru}</p>
              </div>
            </div>
          )
        })}
        {upcoming.length === 0 && (
          <p className="text-center text-ink/60">No upcoming events at the moment — check back soon.</p>
        )}
      </div>

      <div className="mt-20">
        <SectionHeading eyebrow="Archive" title="Past Performances" />
        <ul className="mt-10 divide-y divide-gold/20">
          {past.map((event) => (
            <li
              key={event.eventTitle + event.date}
              className="flex flex-wrap items-baseline justify-between gap-2 py-4"
            >
              <div>
                <p className="font-serif text-lg text-maroon">{event.eventTitle}</p>
                <p className="text-sm text-ink/60">
                  {event.venue}, {event.city} &middot; {event.occasion}
                </p>
              </div>
              <p className="font-sans text-sm uppercase tracking-wider text-gold-dark">
                {formatEventDate(event.date).full}
              </p>
            </li>
          ))}
          {past.length === 0 && (
            <p className="py-4 text-center text-ink/60">No past performances recorded yet.</p>
          )}
        </ul>
      </div>
    </div>
  )
}
