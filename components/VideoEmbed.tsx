export default function VideoEmbed({
  youtubeId,
  title,
  aspect = 'aspect-video',
  className = '',
}: {
  youtubeId: string
  title: string
  aspect?: string
  className?: string
}) {
  const params = new URLSearchParams({
    modestbranding: '1',
    rel: '0',
    iv_load_policy: '3',
    playsinline: '1',
  })

  return (
    <div className={`overflow-hidden rounded-xl ${aspect} ${className}`}>
      <iframe
        className="h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}?${params.toString()}`}
        title={title}
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  )
}
