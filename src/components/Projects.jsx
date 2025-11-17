import { useEffect, useState } from 'react'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/projects`)
        const data = await res.json()
        setProjects(Array.isArray(data) ? data : [])
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="work" className="relative py-20 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Selected Work</h2>
            <p className="text-slate-300 mt-2">A few campaigns and growth experiments we've shipped.</p>
          </div>
        </div>

        {loading ? (
          <p className="text-slate-400">Loading projects...</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <article key={p.id} className="group bg-slate-900/60 border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/40 transition">
                {p.cover_url && (
                  <img src={p.cover_url} alt={p.title} className="h-48 w-full object-cover" />
                )}
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition">{p.title}</h3>
                    {p.client && <span className="text-xs rounded bg-white/10 text-slate-200 px-2 py-1">{p.client}</span>}
                  </div>
                  <p className="mt-2 text-slate-300 text-sm">{p.summary}</p>
                  {p.services?.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.services.map((s, i) => (
                        <span key={i} className="text-xs bg-blue-500/10 text-blue-300 border border-blue-400/20 rounded px-2 py-1">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
