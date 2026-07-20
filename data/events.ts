export type EventStatus = 'Upcoming' | 'Completed'

export interface DanceEvent {
  date: string // ISO yyyy-mm-dd, for sorting
  eventTitle: string
  performanceTitle: string
  performanceType: string
  venue: string
  city: string
  organizer: string
  guru: string
  choreographer: string
  accompanists: string
  repertoire: string
  duration: string
  occasion: string
  description: string
  status: EventStatus
  remarks?: string
}

export const events: DanceEvent[] = [
  {
    date: '2026-07-26',
    eventTitle: 'Aadi Peruvizha 2026',
    performanceTitle: 'Bharatanatyam Trio',
    performanceType: 'Solo',
    venue: 'Krishna Gana Sabha',
    city: 'Chennai',
    organizer: 'Nipun Fine Arts',
    guru: 'Smt. Rajashree Ramu, Shri Anand Unni',
    choreographer: 'Shri Anand Unni',
    accompanists: 'Recorded Music',
    repertoire: 'Varnam, Padam, Thillana',
    duration: '60 mins',
    occasion: 'Temple Festival',
    description: 'Invited Bharatanatyam solo performance.',
    status: 'Upcoming',
    remarks: 'First collaboration with Nipun Fine Arts',
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
    choreographer: 'Shri Anand Unni',
    accompanists: 'Recorded Music',
    repertoire: 'Varnam, Padam, Thillana',
    duration: '20 mins',
    occasion: 'Inter School Competition',
    description: 'Solo Bharatanatyam competition performance representing the school.',
    status: 'Upcoming',
    remarks: 'Inter-school, Bengaluru',
  },
  {
    date: '2026-07-12',
    eventTitle: 'Natyarpanam',
    performanceTitle: 'Natyarpanam to Shri Krishna',
    performanceType: 'Solo',
    venue: 'Melapattur Auditorium',
    city: 'Guruvayoor',
    organizer: 'Arangam',
    guru: 'Smt. Rajashree Ramu, Shri Anand Unni, Shri Madurai R. Muralidharan',
    choreographer: 'Shri Anand Unni, Shri Madurai R. Muralidharan',
    accompanists: 'Recorded Music',
    repertoire: 'Varnam, Padam, Thillana',
    duration: '60 mins',
    occasion: 'Temple Festival',
    description: 'Solo Bharatanatyam recital titled "Natyarpanam".',
    status: 'Completed',
    remarks: 'Guruvayoor performance',
  },
]

export function formatEventDate(iso: string) {
  const d = new Date(`${iso}T00:00:00`)
  return {
    day: d.toLocaleDateString('en-US', { day: '2-digit' }),
    month: d.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
    full: d.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }),
  }
}
