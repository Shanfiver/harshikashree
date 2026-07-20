export default function SectionHeading({
  eyebrow,
  title,
  align = 'center',
}: {
  eyebrow?: string
  title: string
  align?: 'center' | 'left'
}) {
  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      {eyebrow && (
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.35em] text-gold-dark">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 font-serif text-3xl text-maroon md:text-4xl">{title}</h2>
      <div
        className={`mt-4 h-px w-16 bg-gold ${align === 'center' ? 'mx-auto' : ''}`}
      />
    </div>
  )
}
