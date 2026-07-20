export default function PlaceholderImage({
  label,
  aspect = 'aspect-[4/5]',
  className = '',
}: {
  label?: string
  aspect?: string
  className?: string
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-maroon via-maroon-light to-gold-dark ${aspect} ${className}`}
    >
      <div className="absolute inset-0 bg-temple-arch bg-center opacity-40" />
      <svg
        viewBox="0 0 64 64"
        className="h-14 w-14 text-cream/70"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="32" cy="14" r="6" />
        <path d="M32 20v12M32 32l-14 16M32 32l14 16M22 26l-10-4M42 26l10-4" strokeLinecap="round" />
      </svg>
      {label && (
        <span className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap font-sans text-[11px] uppercase tracking-[0.25em] text-cream/70">
          {label}
        </span>
      )}
    </div>
  )
}
