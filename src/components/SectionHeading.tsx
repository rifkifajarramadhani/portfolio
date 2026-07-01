export default function SectionHeading({
  num,
  title,
}: {
  num: string
  title: string
}) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <h2 className="flex items-baseline gap-3 whitespace-nowrap text-2xl font-bold text-text-primary sm:text-3xl">
        <span className="font-mono text-lg text-accent-1 sm:text-xl">{num}.</span>
        {title}
      </h2>
      <span className="h-px w-full max-w-xs bg-text-secondary/20" />
    </div>
  )
}
