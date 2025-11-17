import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability (doesn't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-2 pt-24">
        <div className="text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Digital Marketing Portfolio
          </h1>
          <p className="mt-4 text-slate-200 text-lg max-w-xl">
            Performance-driven campaigns, playful creative, and modern growth frameworks. Explore selected work and results.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#work" className="inline-flex items-center justify-center rounded-lg bg-blue-500 hover:bg-blue-600 px-5 py-3 text-white font-medium shadow">
              View Work
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 px-5 py-3 text-white font-medium">
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
