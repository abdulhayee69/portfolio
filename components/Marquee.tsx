export default function Marquee({
  items,
  duration = 40,
}: {
  items: string[];
  duration?: number;
}) {
  const row = [...items, ...items];
  return (
    <div
      className="relative overflow-hidden border-y border-line bg-panel/60 py-4"
      aria-hidden
    >
      <div
        className="marquee-track gap-0"
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 items-center">
            {row.map((item, i) => (
              <span
                key={`${half}-${i}`}
                className="flex items-center whitespace-nowrap font-display text-lg font-semibold tracking-wide text-white/80"
              >
                <span className="px-6">{item}</span>
                <span className="text-accent">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
