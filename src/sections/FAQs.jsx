import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';

const FAQS = [
  {
    q: 'How fresh is "this morning"?',
    a: 'Most items are picked within 5 hours of arriving at your door. Leafy greens are rinsed and wrapped in newspaper for transport. If something looks tired, send a photo — I make it right.',
  },
  {
    q: 'What if you don\'t have what I asked for?',
    a: 'I\'ll tell you in the confirmation message and offer a swap or refund. I won\'t substitute silently — you choose what goes in your basket.',
  },
  {
    q: 'Can I order every day, or weekly?',
    a: 'Both. Daily orders are easiest, but if your building has 5–10 neighbours who want the same basket, message me and we\'ll set up a weekly round.',
  },
  {
    q: 'Do you deliver outside Sylhet Sadar?',
    a: 'Currently I cover Sylhet Sadar and the surrounding neighborhoods. If you\'re further out, send your area — if I can fold it into the morning route, I will.',
  },
  {
    q: 'Is the price the same as the market?',
    a: 'Roughly. I don\'t undercut farmers. If the market price falls overnight, mine falls too — I\'ll mention it in the morning message.',
  },
  {
    q: 'Why WhatsApp, not an app?',
    a: 'I tried an app. It added three steps and removed the conversation. WhatsApp lets me answer "is the bitter gourd the small kind?" in ten seconds.',
  },
];

export default function FAQs() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <AnimatedSection id="faqs" className="border-b-2 border-ink">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-14 md:py-20 grid lg:grid-cols-12 gap-8">
        <header className="lg:col-span-4">
          <p className="eyebrow text-ink/70">Section VII / Q&amp;A</p>
          <h2 className="display text-5xl md:text-6xl mt-2 text-ink">
            Things people <span className="display-italic text-tomato">ask first.</span>
          </h2>
          <p className="font-body text-ink/75 mt-5 leading-relaxed">
            If yours isn't here, write me on WhatsApp — I reply, every time.
          </p>
        </header>

        <div className="lg:col-span-8 border-2 border-ink divide-y-2 divide-ink">
          {FAQS.map((f, i) => {
            const open = openIdx === i;
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpenIdx(open ? -1 : i)}
                  className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left hover:bg-paper2 transition-colors"
                  aria-expanded={open}
                >
                  <span className="font-display text-xl text-ink leading-snug pr-4">
                    {f.q}
                  </span>
                  <span
                    className="font-mono text-2xl text-tomato shrink-0 transition-transform duration-300"
                    style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-[grid-template-rows] duration-400"
                  style={{
                    display: 'grid',
                    gridTemplateRows: open ? '1fr' : '0fr',
                  }}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="font-body text-ink/80 px-5 pb-5 pt-1 leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}