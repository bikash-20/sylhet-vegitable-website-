import { useState } from 'react';
import { Clipboard, Check } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { SAMPLE_ORDER } from '../data/site';

// 4-step ordering. NOT generic numbered "01 / 02 / 03" decoration —
// these ARE a real sequence with information in the order, so they
// earn their numbers. Numbering carries meaning here.
const STEPS = [
  {
    title: 'Browse the price list',
    body: 'Pick what you want from the twelve items above. Add as much or as little as you like.',
  },
  {
    title: 'Open WhatsApp',
    body: 'Hit the button below — the basket auto-fills a message. Edit your address and time.',
  },
  {
    title: 'I confirm by text',
    body: 'Within 15 minutes I reply with a confirmed total and an ETA for your area.',
  },
  {
    title: 'Pay on arrival',
    body: 'Cash, or bKash / Nagad / Rocket to my number. Receipt on request.',
  },
];

export default function HowToOrder() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(SAMPLE_ORDER);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // fallback — older browsers
      const ta = document.createElement('textarea');
      ta.value = SAMPLE_ORDER;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  };

  return (
    <AnimatedSection id="how" className="border-b-2 border-ink bg-paper2">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-14 md:py-20">
        <header className="max-w-2xl mb-10">
          <p className="eyebrow text-ink/70">Section IV / How an order happens</p>
          <h2 className="display text-5xl md:text-6xl mt-2 text-ink">
            Four steps. <span className="display-italic text-tomato">That's it.</span>
          </h2>
        </header>

        <ol className="grid gap-0 md:grid-cols-2 lg:grid-cols-4 border-2 border-ink divide-y-2 divide-ink md:divide-y-2 md:divide-x-0 lg:divide-y-0 lg:divide-x-2">
          {STEPS.map((s, i) => (
            <li key={s.title} className="p-6 lg:p-7">
              <span className="font-mono text-[11px] uppercase tracking-eyebrow text-tomato">
                Step {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display text-2xl mt-2 text-ink leading-tight">{s.title}</h3>
              <p className="font-body text-ink/75 mt-2 leading-relaxed text-[15px]">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 border-2 border-ink bg-paper">
          <div className="flex items-center justify-between border-b border-ink/20 px-4 py-2.5">
            <p className="font-mono text-[11px] uppercase tracking-eyebrow text-ink/70">
              Sample message / copy &amp; send
            </p>
            <button
              type="button"
              onClick={copy}
              className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-eyebrow border border-ink px-2 py-1 hover:bg-ink hover:text-paper transition-colors"
            >
              {copied ? <Check size={13} /> : <Clipboard size={13} />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
          <pre className="font-body text-[15px] text-ink/85 whitespace-pre-wrap px-4 py-4 leading-relaxed">
{SAMPLE_ORDER}
          </pre>
        </div>
      </div>
    </AnimatedSection>
  );
}