export default function Services() {
  const items = [
    {
      title: 'Paid Social & Search',
      desc: 'Full-funnel strategy, campaign setup, creative iteration, and weekly optimization.',
    },
    {
      title: 'Content & SEO',
      desc: 'Editorial strategy, landing pages, and technical SEO that compounds over time.',
    },
    {
      title: 'Lifecycle & CRM',
      desc: 'Onboarding, drip, and retention flows that boost LTV across email and push.',
    },
    {
      title: 'Analytics & Experimentation',
      desc: 'Tracking, dashboards, and rapid A/B testing to measure what matters.',
    },
  ]

  return (
    <section id="services" className="py-20 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Services</h2>
        <p className="text-slate-300 mt-2 max-w-2xl">
          Flexible engagements—from audits and sprints to full-funnel retainers.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="bg-slate-900/60 border border-white/10 rounded-xl p-6 hover:border-blue-500/40 transition">
              <h3 className="text-white font-semibold">{it.title}</h3>
              <p className="text-slate-300 mt-2 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
