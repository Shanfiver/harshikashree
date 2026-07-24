export type EventStatus = 'Upcoming' | 'Completed'

export interface DanceEvent {
  date?: string // ISO yyyy-mm-dd, when the exact date is known
  yearHint?: string // fallback year label when the exact date isn't known yet
  eventTitle: string
  performanceTitle: string
  performanceType: string
  venue?: string
  city?: string
  organizer?: string
  guru?: string
  repertoire?: string
  duration?: string
  occasion: string
  description: string
  status: EventStatus
  achievement?: string
  featured?: boolean
}

export const events: DanceEvent[] = [
  {
    date: '2026-07-26',
    eventTitle: 'Aadi Peruvizha 2026',
    performanceTitle: 'Bharatanatyam Trio',
    performanceType: 'Trio',
    venue: 'Krishna Gana Sabha',
    city: 'Chennai',
    organizer: 'Nipun Fine Arts',
    guru: 'Smt. Rajashree Ramu, Shri Anand Unni',
    repertoire: 'Varnam, Padam, Thillana',
    duration: '60 mins',
    occasion: 'Temple Festival',
    description: 'Invited Bharatanatyam trio performance.',
    status: 'Upcoming',
    featured: true,
  },
  {
    date: '2026-07-24',
    eventTitle: 'Inter School Bharatanatyam Competition',
    performanceTitle: 'Competition Performance',
    performanceType: 'Solo',
    venue: 'EuroSchool Whitefield',
    city: 'Bengaluru',
    organizer: 'New Horizon Gurukul',
    guru: 'Shri Anand Unni',
    occasion: 'Inter School Competition',
    description: 'Representing school in Bharatanatyam competition.',
    status: 'Upcoming',
    featured: true,
  },
  {
    date: '2026-07-12',
    eventTitle: 'Natyarpanam',
    performanceTitle: 'Natyarpanam',
    performanceType: 'Solo',
    venue: 'Melaputhur Auditorium',
    city: 'Guruvayoor',
    organizer: 'Arangam',
    guru: 'Smt. Rajashree Ramu, Shri Anand Unni, Shri Madurai R. Muralidharan',
    duration: '60 mins',
    occasion: 'Temple Festival',
    description: 'Solo Bharatanatyam recital.',
    status: 'Completed',
    featured: true,
  },
  {
    date: '2026-07-09',
    eventTitle: 'BRICS 2026 Cultural Festival',
    performanceTitle: 'Tamil Nadu Cultural Showcase',
    performanceType: 'Group',
    venue: 'Hyatt Regency',
    city: 'Chennai',
    organizer: 'Zionora Ventures',
    repertoire: 'Tamil Nadu Heritage',
    occasion: 'International Festival',
    description: 'Represented Tamil Nadu at BRICS 2026.',
    status: 'Completed',
    featured: true,
  },
  {
    date: '2025-12-06',
    eventTitle: 'Kala Vijrith National Dance Competition',
    performanceTitle: 'Dance Competition',
    performanceType: 'Solo',
    venue: 'Krishna Gana Sabha',
    city: 'Chennai',
    organizer: 'Kala Ankuram / International Movement for Tamil Culture',
    occasion: 'Competition',
    description: 'Won Second Prize.',
    status: 'Completed',
    achievement: 'Second Prize',
  },
  {
    date: '2025-08-27',
    eventTitle: 'Sri Radha Ashtami Fine Arts Festival',
    performanceTitle: 'Group Bharatanatyam',
    performanceType: 'Group',
    city: 'Thiruvananthapuram',
    organizer: 'Sri Radha Madhava Fine Arts Cultural Society',
    occasion: 'Festival',
    description: 'Group Bharatanatyam performance.',
    status: 'Completed',
  },
  {
    date: '2026-09-20',
    eventTitle: 'Sri Radha Ashtami Fine Arts Festival',
    performanceTitle: 'Bharatanatyam Performance',
    performanceType: 'Solo',
    city: 'Mumbai',
    occasion: 'Festival',
    description: 'Bharatanatyam performance at the festival.',
    status: 'Upcoming',
  },
  {
    yearHint: '2025',
    eventTitle: 'Shri Krishna Janmashtami Mandalotsava',
    performanceTitle: 'Bharatanatyam Performance',
    performanceType: 'Solo',
    venue: 'Udupi Krishna Matha',
    city: 'Udupi',
    organizer: 'Paryaya Shri Puthige Shri Krishna Matha',
    occasion: 'Temple Festival',
    description: 'Performed during Janmashtami celebrations.',
    status: 'Completed',
  },
  {
    yearHint: '2025',
    eventTitle: 'Ninaidha Bala Nruthyotsava',
    performanceTitle: 'Outstanding Performance',
    performanceType: 'Solo',
    organizer: 'Srikanteshwara Kala Kendra',
    occasion: 'Festival',
    description: 'Outstanding performance recognition.',
    status: 'Completed',
  },
  {
    date: '2025-04-01',
    eventTitle: 'Suryaputra Shanideva',
    performanceTitle: 'Dance Drama',
    performanceType: 'Group',
    city: 'Bengaluru',
    organizer: 'Kailasa Kaladhara',
    occasion: 'Dance Drama',
    description: 'Participated in mega dance-drama.',
    status: 'Completed',
  },
  {
    date: '2024-12-22',
    eventTitle: 'Vayuputra — Son of the Wind',
    performanceTitle: 'Dance Drama',
    performanceType: 'Group',
    venue: 'Chowdiah Memorial Hall',
    city: 'Bengaluru',
    organizer: 'Samyama School of Dance',
    occasion: 'Dance Drama',
    description: 'Performed in Magnum Opus production.',
    status: 'Completed',
  },
  {
    date: '2024-03-23',
    eventTitle: 'Dance Jathre 2024',
    performanceTitle: 'Dance Competition',
    performanceType: 'Solo',
    venue: 'Shankaraa Foundation',
    city: 'Bengaluru',
    organizer: 'Shambhavi School of Dance',
    occasion: 'Competition',
    description: 'Dance competition participant.',
    status: 'Completed',
  },
  {
    yearHint: '2024',
    eventTitle: 'Thirunagai Natyanjali',
    performanceTitle: 'Temple Performance',
    performanceType: 'Solo',
    venue: 'Kayarogana Swamy Temple',
    city: 'Nagapattinam',
    organizer: 'Thirunagai Natyanjali Committee',
    occasion: 'Temple Festival',
    description: 'Performed at Natyanjali.',
    status: 'Completed',
  },
  {
    yearHint: '2024',
    eventTitle: 'Mahashivaratri Natyanjali Festival',
    performanceTitle: 'Temple Performance',
    performanceType: 'Solo',
    venue: 'Piravi Marundeesar Temple',
    city: 'Thiruthuraipoondi',
    organizer: 'Temple Administration',
    occasion: 'Temple Festival',
    description: 'Performed during Mahashivaratri festival.',
    status: 'Completed',
  },
]

export function eventSortKey(event: DanceEvent) {
  return event.date ?? `${event.yearHint ?? '0000'}-01-01`
}

export function eventLocation(event: DanceEvent) {
  return [event.venue, event.city].filter(Boolean).join(', ') || event.organizer || ''
}

export function eventMeta(event: DanceEvent) {
  return [event.performanceTitle, event.repertoire, event.duration].filter(Boolean).join(' · ')
}

export function formatEventDate(iso: string) {
  const d = new Date(`${iso}T00:00:00`)
  return {
    day: d.toLocaleDateString('en-US', { day: '2-digit' }),
    month: d.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
    full: d.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }),
  }
}
