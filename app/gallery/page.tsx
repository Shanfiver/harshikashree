'use client'

import { useState } from 'react'
import Photo from '@/components/Photo'
import PlaceholderImage from '@/components/PlaceholderImage'
import SectionHeading from '@/components/SectionHeading'
import VideoEmbed from '@/components/VideoEmbed'

const categories = ['All', 'Performances', 'Practice', 'Costumes', 'Recognition'] as const

const photos = [
  { id: 0, category: categories[1], src: '/images/photos/2T1A9587.jpg.jpeg' },
  { id: 1, category: categories[2], src: '/images/photos/IMG_0849.jpg' },
  { id: 2, category: categories[3], src: '/images/photos/IMG_6014.jpg' },
  { id: 3, category: categories[4], src: '/images/photos/4L9A8329.JPG' },
  { id: 4, category: categories[1], src: '/images/photos/4L9A8432.JPG' },
  { id: 5, category: categories[2], src: '/images/photos/IMG_0853.jpg' },
  { id: 6, category: categories[3], src: '/images/photos/Solor.jpg' },
  { id: 7, category: categories[4], src: '/images/photos/4L9A8344.JPG' },
  { id: 8, category: categories[1], src: '/images/photos/IMG_5117.jpg' },
  { id: 9, category: categories[2], src: '/images/photos/IMG_0900.jpg' },
  { id: 10, category: categories[3], src: '/images/photos/IMG_9504.JPG' },
  { id: 11, category: categories[4], src: '/images/photos/IMG_6249.jpg' },
]

// Upload each performance video to YouTube as "Unlisted", then paste its video ID below
// (the part after youtube.com/watch?v=). Unlisted keeps it off search/recommendations,
// and YouTube's streaming delivery blocks most browser download-plugins.
const videos = [
  { title: 'Natyarpanam Guruvayoor', category: 'Performances', youtubeId: 'R-iU6BEuYTw' as string | null },
  { title: 'Udupi Shree Krishna Temple', category: 'Performances', youtubeId: 'NnGPpJ01mHQ' as string | null },
  { title: 'Devi Neeye Thunai — Thirunedungulam', category: 'Performances', youtubeId: '_GMgPZJJZQw' as string | null },
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
          <Photo
            key={photo.id}
            src={photo.src}
            alt={`Harshikashree — ${photo.category}`}
            label={photo.category}
            aspect="aspect-square"
          />
        ))}
      </div>

      {/* Videos */}
      <div className="mt-24">
        <SectionHeading eyebrow="Watch" title="Performance Videos" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {videos.map((video) => (
            <div key={video.title}>
              {video.youtubeId ? (
                <VideoEmbed youtubeId={video.youtubeId} title={video.title} aspect="aspect-video" />
              ) : (
                <PlaceholderImage label="Video" aspect="aspect-video" />
              )}
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
