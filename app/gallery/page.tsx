'use client'

import { useState } from 'react'
import PlaceholderImage from '@/components/PlaceholderImage'
import SectionHeading from '@/components/SectionHeading'

const categories = ['All', 'Performances', 'Practice', 'Costumes', 'Recognition'] as const

const photos = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  category: categories[(i % 4) + 1],
}))

const videos = [
  { title: 'Arangetram — Full Performance', category: 'Performances' },
  { title: 'Varnam Excerpt', category: 'Performances' },
  { title: 'Behind the Scenes: Practice Session', category: 'Practice' },
]

export default function Gallery() {
  const [active, setActive] = useState<(typeof categories)[number]>('All')

  const filtered =
    active === 'All' ? photos : photos.filter((p) => p.category === active)

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <SectionHeading eyebrow="Gallery" title="Moments in Motion" />
      <p className="mx-auto mt-4 max-w-xl text-center text-ink/60">
        A collection of photos and videos from performances, practice, and
        milestones. Replace these placeholders with real photography and
        performance footage.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full border px-4 py-1.5 font-sans text-xs font-medium uppercase tracking-wider transition ${
              active === cat
                ? 'border-maroon bg-maroon text-cream'
                : 'border-gold/40 text-ink/70 hover:border-maroon hover:text-maroon'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((photo) => (
          <PlaceholderImage key={photo.id} label={photo.category} aspect="aspect-square" />
        ))}
      </div>

      {/* Videos */}
      <div className="mt-24">
        <SectionHeading eyebrow="Watch" title="Performance Videos" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {videos.map((video) => (
            <div key={video.title}>
              <PlaceholderImage label="Video" aspect="aspect-video" />
              <p className="mt-3 font-serif text-lg text-maroon">{video.title}</p>
              <p className="text-xs uppercase tracking-widest text-gold-dark">
                {video.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
