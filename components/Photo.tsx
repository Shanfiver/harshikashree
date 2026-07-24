import Image from 'next/image'

export default function Photo({
  src,
  alt,
  label,
  aspect = 'aspect-[4/5]',
  className = '',
  sizes = '(min-width: 768px) 25vw, 50vw',
  priority = false,
}: {
  src: string
  alt: string
  label?: string
  aspect?: string
  className?: string
  sizes?: string
  priority?: boolean
}) {
  return (
    <div className={`relative overflow-hidden rounded-xl ${aspect} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
      {label && (
        <>
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent" />
          <span className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap font-sans text-[11px] uppercase tracking-[0.25em] text-cream">
            {label}
          </span>
        </>
      )}
    </div>
  )
}
