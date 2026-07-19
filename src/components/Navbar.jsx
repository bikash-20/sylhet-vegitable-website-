import { useEffect, useState } from 'react';
import { ShoppingBasket, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { SITE } from '../data/site';

const LINKS = [
  { href: '#products', label: 'Products' },
  { href: '#how', label: 'How to Order' },
  { href: '#delivery', label: 'Delivery' },
  { href: '#about', label: 'About' },
  { href: '#faqs', label: 'FAQs' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const { totalQty, setOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-paper/95 backdrop-blur shadow-[0_1px_0_rgba(26,24,21,0.15)]' : 'bg-paper'
      }`}
    >
      <div className="rule-thick" />

      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 md:px-8">
        <a href="#top" className="flex items-baseline gap-2 group">
          <span className="display text-3xl leading-none text-ink">
            সবজি<span className="display-italic text-tomato">.</span>
          </span>
          <span className="eyebrow text-ink/70 hidden sm:inline">Fresh / Since 2024</span>
        </a>

        <ul className="hidden lg:flex items-center gap-7">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-body text-[15px] text-ink/85 hover:text-tomato transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 md:gap-3">
          <a
            href={`https://wa.me/${SITE.phoneIntl}`}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex font-mono text-[11px] uppercase tracking-eyebrow text-ink/70 hover:text-tomato"
          >
            {SITE.phone}
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="relative inline-flex items-center gap-2 border-2 border-ink bg-paper px-3 py-2 font-mono text-[11px] uppercase tracking-eyebrow text-ink hover:bg-ink hover:text-paper transition-colors"
            aria-label="Open cart"
          >
            <ShoppingBasket size={15} strokeWidth={2.2} />
            <span className="hidden sm:inline">Basket</span>
            {totalQty > 0 && (
              <span className="ml-1 inline-flex h-4 min-w-4 items-center justify-center bg-tomato px-1 font-mono text-[10px] font-bold text-paper">
                {totalQty}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden border-2 border-ink bg-paper p-2"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <div className="rule" />

      {/* Mobile menu */}
      {mobileOpen && (
        <ul className="lg:hidden mx-auto max-w-6xl px-5 pb-4 grid gap-1.5">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 font-body text-base text-ink/85 border-b border-ink/15 last:border-0"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
