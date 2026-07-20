export default function Footer() {
  return (
    <footer className="bg-maroon-dark text-cream/80">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-xl text-gold-light">Harshikashree</p>
            <p className="mt-2 text-sm text-cream/60">
              Bharatanatyam dancer, trained in the classical Indian temple art form —
              carrying forward tradition through rhythm, expression, and devotion.
            </p>
          </div>

          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
              Explore
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="/about" className="hover:text-gold-light">About</a></li>
              <li><a href="/gallery" className="hover:text-gold-light">Gallery</a></li>
              <li><a href="/events" className="hover:text-gold-light">Events</a></li>
              <li><a href="/contact" className="hover:text-gold-light">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
              Connect
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>hello@harshikashree.com</li>
              <li>Instagram &middot; YouTube</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gold/20 pt-6 text-center text-xs text-cream/50">
          &copy; {new Date().getFullYear()} Harshikashree. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
