'use client'

import { useEffect } from 'react'
import Image from 'next/image'

export default function Lightbox({
  src,
  alt,
  onClose,
  onPrev,
  onNext,
}: {
  src: string
  alt: string
  onClose: () => void
  onPrev?: () => void
  onNext?: () => void
}) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev?.()
      if (e.key === 'ArrowRight') onNext?.()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose, onPrev, onNext])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 text-3xl leading-none text-white/80 transition hover:text-white"
      >
        &times;
      </button>

      {onPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onPrev()
          }}
          aria-label="Previous image"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-4xl leading-none text-white/70 transition hover:text-white"
        >
          &#8249;
        </button>
      )}

      <div
        className="relative h-[85vh] w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image src={src} alt={alt} fill className="object-contain" sizes="100vw" />
      </div>

      {onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
          aria-label="Next image"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-4xl leading-none text-white/70 transition hover:text-white"
        >
          &#8250;
        </button>
      )}
    </div>
  )
}
