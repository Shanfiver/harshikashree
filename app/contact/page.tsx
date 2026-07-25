'use client'

import { FormEvent, useState } from 'react'
import SectionHeading from '@/components/SectionHeading'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle')
  const [loadedAt] = useState(() => Date.now())

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
      loadedAt,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('submitted')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <SectionHeading eyebrow="Get in Touch" title="Book a Performance" />

      <div className="mt-12 grid gap-12 md:grid-cols-2">
        <div>
          <p className="text-ink/70">
            For performance bookings, collaborations, or general inquiries,
            reach out using the form or the contact details below.
          </p>

          <dl className="mt-8 space-y-4">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-widest text-gold-dark">
                Email
              </dt>
              <dd className="mt-1 text-ink/80">arangam.dancespace@gmail.com</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-widest text-gold-dark">
                Location
              </dt>
              <dd className="mt-1 text-ink/80">Bangalore, Karnataka</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-widest text-gold-dark">
                Social
              </dt>
              <dd className="mt-1 text-ink/80">
                <a
                  href="https://www.instagram.com/dancee_harshikaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-maroon"
                >
                  Instagram
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div>
          {status === 'submitted' ? (
            <div className="rounded-2xl border border-gold/30 bg-cream-dark p-8 text-center">
              <p className="font-serif text-xl text-maroon">Thank you!</p>
              <p className="mt-2 text-ink/70">
                Your message has been sent. We&rsquo;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="absolute left-[-9999px]" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-gold-dark">
                  Name
                </label>
                <input
                  required
                  name="name"
                  type="text"
                  className="mt-1 w-full border-b border-gold/40 bg-transparent py-2 text-ink outline-none focus:border-maroon"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-gold-dark">
                  Email
                </label>
                <input
                  required
                  name="email"
                  type="email"
                  className="mt-1 w-full border-b border-gold/40 bg-transparent py-2 text-ink outline-none focus:border-maroon"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-gold-dark">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  className="mt-1 w-full border-b border-gold/40 bg-transparent py-2 text-ink outline-none focus:border-maroon"
                />
              </div>
              {status === 'error' && (
                <p className="text-sm text-red-700">
                  Something went wrong sending your message. Please try again, or email
                  arangam.dancespace@gmail.com directly.
                </p>
              )}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="rounded-full bg-maroon px-6 py-3 font-sans text-sm font-medium uppercase tracking-wider text-cream transition hover:bg-maroon-light disabled:opacity-60"
              >
                {status === 'submitting' ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
