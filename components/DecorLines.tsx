// Flowing parametric line mesh — decorative background for dark sections.
// Two families of cubic bezier curves creating the interference pattern
// visible in the hero image. Pure math, no side effects — works in server components.

export default function DecorLines({ className = '' }: { className?: string }) {
  const N = 20
  const pathsA: string[] = []
  const pathsB: string[] = []

  for (let i = 0; i < N; i++) {
    const p = i / (N - 1)

    // Family A — sweeps left→right with shear + S-curve wave
    const y0 = p * 900
    const y3 = ((p + 0.28) % 1) * 900
    const ym1 = y0 + (y3 - y0) * 0.33 + 170
    const ym2 = y0 + (y3 - y0) * 0.67 - 170
    pathsA.push(
      `M 0 ${y0.toFixed(1)} C 400 ${ym1.toFixed(1)} 800 ${ym2.toFixed(1)} 1200 ${y3.toFixed(1)}`
    )

    // Family B — sweeps top→bottom with shear + S-curve wave
    const x0 = p * 1200
    const x3 = ((p + 0.22) % 1) * 1200
    const xm1 = x0 + (x3 - x0) * 0.33 + 140
    const xm2 = x0 + (x3 - x0) * 0.67 - 140
    pathsB.push(
      `M ${x0.toFixed(1)} 0 C ${xm1.toFixed(1)} 300 ${xm2.toFixed(1)} 600 ${x3.toFixed(1)} 900`
    )
  }

  return (
    <div
      aria-hidden
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${className}`}
    >
      <svg
        viewBox="0 0 1200 900"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        <g stroke="white" strokeWidth="0.65" fill="none" opacity="0.055">
          {pathsA.map((d, i) => <path key={`a${i}`} d={d} />)}
          {pathsB.map((d, i) => <path key={`b${i}`} d={d} />)}
        </g>
      </svg>
    </div>
  )
}
