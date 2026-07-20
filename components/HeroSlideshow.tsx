'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const slides = [
  { src: '/images/hero/hero-1.jpg', alt: 'Harshikashree performing Bharatanatyam' },
  { src: '/images/hero/hero-2.jpg', alt: 'Harshikashree performing Bharatanatyam' },
  { src: '/images/hero/hero-3.jpg', alt: 'Harshikashree performing Bharatanatyam' },
]

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="absolute inset-0">
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={i === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? 'w-6 bg-gold' : 'w-1.5 bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
