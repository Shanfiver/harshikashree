'use client'

import { useState } from 'react'
import SectionHeading from '@/components/SectionHeading'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

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
              <dd className="mt-1 text-ink/80">hello@harshikashree.com</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-widest text-gold-dark">
                Location
              </dt>
              <dd className="mt-1 text-ink/80">[City, State]</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-widest text-gold-dark">
                Social
              </dt>
              <dd className="mt-1 text-ink/80">Instagram &middot; YouTube</dd>
            </div>
          </dl>
        </div>

        <div>
          {submitted ? (
            <div className="rounded-2xl border border-gold/30 bg-cream-dark p-8 text-center">
              <p className="font-serif text-xl text-maroon">Thank you!</p>
              <p className="mt-2 text-ink/70">
                Your message has been noted. This is a placeholder confirmation —
                connect this form to an email service (e.g. Formspree, Resend) to
                actually receive messages.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
              className="space-y-5"
            >
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-gold-dark">
                  Name
                </label>
                <input
                  required
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
                  rows={4}
                  className="mt-1 w-full border-b border-gold/40 bg-transparent py-2 text-ink outline-none focus:border-maroon"
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-maroon px-6 py-3 font-sans text-sm font-medium uppercase tracking-wider text-cream transition hover:bg-maroon-light"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
