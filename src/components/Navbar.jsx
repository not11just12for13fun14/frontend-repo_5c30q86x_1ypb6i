import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 bg-slate-900/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src="/flame-icon.svg" alt="Logo" className="w-7 h-7" />
          <span className="text-white font-semibold tracking-tight">Your Marketing Studio</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-200">
          <a href="#work" className="hover:text-white transition">Work</a>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
        <button className="md:hidden text-slate-200" aria-label="Open menu">
          <Menu size={22} />
        </button>
      </div>
    </nav>
  )
}
