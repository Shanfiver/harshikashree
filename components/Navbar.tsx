'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/events', label: 'Events' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-cream/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-2xl tracking-wide text-maroon">
          Harshikashree
          <span className="ml-2 align-middle text-xs font-sans font-medium uppercase tracking-[0.3em] text-gold-dark">
            Bharatanatyam
          </span>
        </Link>

        <ul className="hidden gap-8 font-sans text-sm uppercase tracking-wider md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition-colors hover:text-gold-dark ${
                  pathname === link.href ? 'text-maroon font-semibold' : 'text-ink/70'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span className="h-0.5 w-6 bg-maroon" />
          <span className="h-0.5 w-6 bg-maroon" />
          <span className="h-0.5 w-6 bg-maroon" />
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-gold/20 bg-cream px-6 pb-4 font-sans text-sm uppercase tracking-wider md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block py-3 ${
                  pathname === link.href ? 'text-maroon font-semibold' : 'text-ink/70'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
