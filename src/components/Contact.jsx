import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      company: form.get('company') || undefined,
      message: form.get('message'),
      budget: form.get('budget') || undefined,
      services: form.getAll('services') || undefined,
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Failed to send')
      const data = await res.json()
      setStatus({ ok: true, id: data.id })
      e.currentTarget.reset()
    } catch (e) {
      setStatus({ ok: false, error: e.message })
    }
  }

  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s build something</h2>
            <p className="text-slate-300 mt-2 max-w-xl">
              Tell me about your goals. I’ll get back within 24 hours with ideas and next steps.
            </p>
            <div className="mt-6 text-slate-400 text-sm">
              <p>Typical response time: under a day</p>
              <p>Based in: Remote / Global</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-slate-900/60 border border-white/10 rounded-xl p-6">
            <div className="grid gap-4">
              <input name="name" required placeholder="Name" className="bg-slate-800/60 text-white placeholder-slate-400 rounded-lg px-4 py-3 outline-none focus:ring-2 ring-blue-500" />
              <input name="email" required type="email" placeholder="Email" className="bg-slate-800/60 text-white placeholder-slate-400 rounded-lg px-4 py-3 outline-none focus:ring-2 ring-blue-500" />
              <input name="company" placeholder="Company (optional)" className="bg-slate-800/60 text-white placeholder-slate-400 rounded-lg px-4 py-3 outline-none focus:ring-2 ring-blue-500" />
              <textarea name="message" required rows="5" placeholder="What do you need help with?" className="bg-slate-800/60 text-white placeholder-slate-400 rounded-lg px-4 py-3 outline-none focus:ring-2 ring-blue-500"></textarea>

              <div className="grid gap-3 sm:grid-cols-2">
                <select name="budget" className="bg-slate-800/60 text-white rounded-lg px-4 py-3">
                  <option value="">Budget range (optional)</option>
                  <option>Under $2k</option>
                  <option>$2k - $5k</option>
                  <option>$5k - $10k</option>
                  <option>$10k+</option>
                </select>
                <div className="grid grid-cols-2 gap-2 text-sm text-slate-300">
                  <label className="flex items-center gap-2"><input type="checkbox" name="services" value="Paid" /> Paid</label>
                  <label className="flex items-center gap-2"><input type="checkbox" name="services" value="SEO" /> SEO</label>
                  <label className="flex items-center gap-2"><input type="checkbox" name="services" value="Content" /> Content</label>
                  <label className="flex items-center gap-2"><input type="checkbox" name="services" value="Analytics" /> Analytics</label>
                </div>
              </div>

              <button type="submit" className="mt-2 inline-flex justify-center rounded-lg bg-blue-500 hover:bg-blue-600 px-5 py-3 text-white font-medium">
                {status === 'sending' ? 'Sending...' : 'Send message'}
              </button>
              {status && status !== 'sending' && (
                <p className={"text-sm mt-2 " + (status.ok ? 'text-green-400' : 'text-red-400')}>
                  {status.ok ? 'Thanks! I will reach out shortly.' : `Something went wrong: ${status.error}`}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
