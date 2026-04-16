import { useState } from 'react'
import './App.css'

const NAV_LINKS = [
  { label: 'What We Build', href: '#what-we-build' },
  { label: 'Who We Are', href: '#who-we-are' },
  { label: 'Join Us', href: '#join-us' },
  { label: 'Contact', href: '#contact' },
]

const INVENTIONS = [
  {
    id: 'aurora-ckdc',
    name: 'Aurora CKDC',
    tagline: 'Continuous Kinetic Displacement Compression',
    description:
      'A patented mechanical compression system that captures and converts ambient kinetic energy with unprecedented efficiency. Available for licensing across industrial and clean-energy sectors.',
    icon: '⚡',
    available: true,
  },
  {
    id: 'helix-flow',
    name: 'Helix Flow Valve',
    tagline: 'Turbulence-optimized fluid control',
    description:
      'Next-generation valve geometry that reduces pressure loss by up to 40% in high-throughput fluid systems.',
    icon: '🌀',
    available: false,
  },
  {
    id: 'tessera-grid',
    name: 'Tessera Grid Module',
    tagline: 'Modular structural lattice system',
    description:
      'Self-interlocking composite panels with tunable load distribution, designed for aerospace and civil infrastructure.',
    icon: '🔷',
    available: false,
  },
  {
    id: 'lumis-sensor',
    name: 'Lumis Sensor Array',
    tagline: 'Distributed photonic sensing',
    description:
      'Ultra-low-power optical sensor mesh for real-time environmental monitoring across large areas.',
    icon: '💡',
    available: false,
  },
]

function LicensingModal({ onClose }) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' })

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(13,27,46,0.85)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl border p-8"
        style={{ background: '#162640', borderColor: '#c9a84c' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl leading-none"
          aria-label="Close"
        >
          ✕
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-2xl font-semibold mb-2" style={{ color: '#c9a84c' }}>
              Inquiry Received
            </h3>
            <p className="text-gray-300">
              Thank you for your interest in Aurora CKDC. Our licensing team will be in touch within 2 business days.
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">⚡</span>
              <div>
                <h3 className="text-xl font-semibold" style={{ color: '#c9a84c' }}>
                  Aurora CKDC — Licensing Inquiry
                </h3>
                <p className="text-sm text-gray-400">
                  Tell us about your application
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Name *</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg px-3 py-2 text-sm text-white outline-none border focus:border-yellow-400 transition-colors"
                    style={{ background: '#0d1b2e', borderColor: '#2a3f5f' }}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Company</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full rounded-lg px-3 py-2 text-sm text-white outline-none border focus:border-yellow-400 transition-colors"
                    style={{ background: '#0d1b2e', borderColor: '#2a3f5f' }}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Email *</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg px-3 py-2 text-sm text-white outline-none border focus:border-yellow-400 transition-colors"
                  style={{ background: '#0d1b2e', borderColor: '#2a3f5f' }}
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Intended Application
                </label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-lg px-3 py-2 text-sm text-white outline-none border focus:border-yellow-400 transition-colors resize-none"
                  style={{ background: '#0d1b2e', borderColor: '#2a3f5f' }}
                  placeholder="Briefly describe your use case..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90 active:scale-95"
                style={{ background: '#c9a84c', color: '#0d1b2e' }}
              >
                Submit Licensing Inquiry
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

function InventionCard({ invention, onInquire }) {
  const isAvailable = invention.available

  return (
    <div
      className={`relative rounded-2xl border p-6 flex flex-col gap-3 transition-all duration-300 ${
        isAvailable
          ? 'cursor-pointer hover:scale-[1.02] hover:shadow-2xl'
          : 'opacity-50 cursor-default'
      }`}
      style={{
        background: isAvailable ? '#162640' : '#111f33',
        borderColor: isAvailable ? '#c9a84c' : '#2a3f5f',
        boxShadow: isAvailable ? '0 0 32px rgba(201,168,76,0.12)' : 'none',
      }}
      onClick={isAvailable ? onInquire : undefined}
    >
      {!isAvailable && (
        <span
          className="absolute top-4 right-4 text-xs font-semibold px-2 py-1 rounded-full"
          style={{ background: '#2a3f5f', color: '#8fa8c8' }}
        >
          Patent Pending
        </span>
      )}

      {isAvailable && (
        <span
          className="absolute top-4 right-4 text-xs font-semibold px-2 py-1 rounded-full"
          style={{ background: 'rgba(201,168,76,0.15)', color: '#c9a84c', border: '1px solid rgba(201,168,76,0.4)' }}
        >
          Available for Licensing
        </span>
      )}

      <div className="text-3xl">{invention.icon}</div>
      <div>
        <h3
          className="text-lg font-semibold mb-1"
          style={{ color: isAvailable ? '#c9a84c' : '#8fa8c8' }}
        >
          {invention.name}
        </h3>
        <p className="text-xs font-medium tracking-wider uppercase" style={{ color: '#5a7a9a' }}>
          {invention.tagline}
        </p>
      </div>
      <p className="text-sm leading-relaxed" style={{ color: '#a0b4c8' }}>
        {invention.description}
      </p>

      {isAvailable && (
        <div
          className="mt-auto pt-3 border-t text-sm font-medium flex items-center gap-2"
          style={{ borderColor: 'rgba(201,168,76,0.3)', color: '#c9a84c' }}
        >
          Inquire about licensing →
        </div>
      )}
    </div>
  )
}

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <>
      {/* Nav */}
      <nav
        className="sticky top-0 z-40 flex items-center justify-between px-6 md:px-12 py-4 border-b"
        style={{ background: 'rgba(13,27,46,0.95)', borderColor: '#1a2f4a', backdropFilter: 'blur(12px)' }}
      >
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight" style={{ color: '#c9a84c' }}>
            Raire<span className="text-white">Labs</span>
          </span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:opacity-90"
            style={{ background: '#c9a84c', color: '#0d1b2e' }}
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {mobileNavOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile nav dropdown */}
      {mobileNavOpen && (
        <div
          className="md:hidden flex flex-col px-6 py-4 gap-4 border-b"
          style={{ background: '#162640', borderColor: '#1a2f4a' }}
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-300 hover:text-white"
              onClick={() => setMobileNavOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      {/* Hero */}
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center text-center px-6 py-28 md:py-40 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #0d1b2e 0%, #162640 60%, #0d1b2e 100%)' }}
      >
        {/* Background radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,168,76,0.07) 0%, transparent 70%)',
          }}
        />

        <div className="relative max-w-4xl">
          <div
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-6 px-4 py-2 rounded-full border"
            style={{ borderColor: 'rgba(201,168,76,0.4)', color: '#c9a84c', background: 'rgba(201,168,76,0.07)' }}
          >
            Deep Technology · Invention Licensing
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight" style={{ color: '#f8f9fa' }}>
            We Build{' '}
            <span style={{ color: '#c9a84c' }}>What&apos;s</span>
            <br />
            Never Existed
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            RaireLabs is an independent invention studio. We conceive, patent, and license
            breakthrough mechanical and electronic systems to partners who want to build tomorrow.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#what-we-build"
              className="px-8 py-4 rounded-xl font-semibold text-sm transition-all hover:opacity-90 hover:scale-105"
              style={{ background: '#c9a84c', color: '#0d1b2e' }}
            >
              Explore Our Inventions
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl font-semibold text-sm border transition-all hover:bg-white hover:text-navy"
              style={{ borderColor: '#c9a84c', color: '#c9a84c' }}
            >
              Talk to Us
            </a>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section id="what-we-build" className="px-6 md:px-16 py-24" style={{ background: '#0d1b2e' }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#c9a84c' }}>
              Portfolio
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: '#f8f9fa' }}>
              What We Build
            </h2>
            <p className="text-gray-400 text-lg max-w-xl">
              Each invention is independently conceived, filed, and made available for commercial licensing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INVENTIONS.map((inv) => (
              <InventionCard
                key={inv.id}
                invention={inv}
                onInquire={() => setModalOpen(true)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section
        id="who-we-are"
        className="px-6 md:px-16 py-24"
        style={{ background: '#0f2035', borderTop: '1px solid #1a2f4a', borderBottom: '1px solid #1a2f4a' }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#c9a84c' }}>
              About
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" style={{ color: '#f8f9fa' }}>
              Who We Are
            </h2>
            <p className="text-gray-400 leading-relaxed mb-5">
              RaireLabs is a small, independent invention studio with no investors and no agenda
              beyond creating useful things. We operate lean — obsessing over mechanisms, materials,
              and first principles — then patent what works.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our focus is on inventions that sit at the intersection of physics and practicality:
              systems that do more with less, and that translate cleanly into real manufacturing
              processes.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: '4+', label: 'Patents Filed' },
              { stat: '1', label: 'Licensed Technology' },
              { stat: '100%', label: 'Independent' },
              { stat: '∞', label: 'Problems Left' },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl p-6 border text-center"
                style={{ background: '#162640', borderColor: '#1a2f4a' }}
              >
                <div className="text-3xl font-bold mb-1" style={{ color: '#c9a84c' }}>
                  {item.stat}
                </div>
                <div className="text-sm text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section id="join-us" className="px-6 md:px-16 py-24" style={{ background: '#0d1b2e' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#c9a84c' }}>
            Collaborate
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" style={{ color: '#f8f9fa' }}>
            Join Us
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            We&apos;re not hiring in the traditional sense. We work with tinkerers, engineers, and
            domain experts who get excited about hard problems and have the patience to solve them properly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              {
                title: 'Research Partners',
                icon: '🔬',
                desc: 'Academic or independent researchers who want to co-develop and co-patent novel mechanisms.',
              },
              {
                title: 'Engineering Collaborators',
                icon: '⚙️',
                desc: 'Mechanical, electrical, or materials engineers interested in prototype development and testing.',
              },
              {
                title: 'Industry Partners',
                icon: '🏭',
                desc: 'Companies in energy, aerospace, or manufacturing looking for first-access licensing arrangements.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border p-6"
                style={{ background: '#162640', borderColor: '#1a2f4a' }}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2 text-white">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="#contact"
              className="inline-block px-8 py-4 rounded-xl font-semibold text-sm transition-all hover:opacity-90"
              style={{ background: '#c9a84c', color: '#0d1b2e' }}
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="px-6 md:px-16 py-24"
        style={{ background: '#0f2035', borderTop: '1px solid #1a2f4a' }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#c9a84c' }}>
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: '#f8f9fa' }}>
            Get in Touch
          </h2>
          <p className="text-gray-400 mb-10">
            Whether you&apos;re interested in licensing, partnership, or just want to geek out about mechanisms — we&apos;d love to hear from you.
          </p>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer
        className="px-6 md:px-16 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500"
        style={{ background: '#0d1b2e', borderTop: '1px solid #1a2f4a' }}
      >
        <span>
          <span style={{ color: '#c9a84c' }}>Raire</span>Labs · rairelabs.io
        </span>
        <span>© {new Date().getFullYear()} RaireLabs. All rights reserved.</span>
      </footer>

      {/* Modal */}
      {modalOpen && <LicensingModal onClose={() => setModalOpen(false)} />}
    </>
  )
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border p-10 text-center" style={{ background: '#162640', borderColor: '#c9a84c' }}>
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-xl font-semibold mb-2" style={{ color: '#c9a84c' }}>Message Sent</h3>
        <p className="text-gray-400">We&apos;ll get back to you as soon as we can.</p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border p-8 text-left space-y-5"
      style={{ background: '#162640', borderColor: '#1a2f4a' }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Name *</label>
          <input
            required
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-lg px-4 py-3 text-sm text-white outline-none border focus:border-yellow-500 transition-colors"
            style={{ background: '#0d1b2e', borderColor: '#2a3f5f' }}
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Email *</label>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-lg px-4 py-3 text-sm text-white outline-none border focus:border-yellow-500 transition-colors"
            style={{ background: '#0d1b2e', borderColor: '#2a3f5f' }}
          />
        </div>
      </div>
      <div>
        <label className="block text-sm text-gray-400 mb-1">Subject</label>
        <input
          type="text"
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className="w-full rounded-lg px-4 py-3 text-sm text-white outline-none border focus:border-yellow-500 transition-colors"
          style={{ background: '#0d1b2e', borderColor: '#2a3f5f' }}
          placeholder="Licensing, partnership, general..."
        />
      </div>
      <div>
        <label className="block text-sm text-gray-400 mb-1">Message *</label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full rounded-lg px-4 py-3 text-sm text-white outline-none border focus:border-yellow-500 transition-colors resize-none"
          style={{ background: '#0d1b2e', borderColor: '#2a3f5f' }}
        />
      </div>
      <button
        type="submit"
        className="w-full py-4 rounded-xl font-semibold text-sm transition-all hover:opacity-90 active:scale-95"
        style={{ background: '#c9a84c', color: '#0d1b2e' }}
      >
        Send Message
      </button>
    </form>
  )
}
