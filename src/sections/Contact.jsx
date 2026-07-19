import { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { SITE, waLink } from '../data/site';

export default function Contact() {
  const [form, setForm] = useState({ name: '', message: '' });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Basket message from ${form.name || 'a neighbour'}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name || 'Anonymous'}`);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 2200);
  };

  return (
    <AnimatedSection id="contact" className="border-b-2 border-ink bg-paper2">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-14 md:py-20">
        <header className="max-w-2xl mb-10">
          <p className="eyebrow text-ink/70">Section VIII / Get in touch</p>
          <h2 className="display text-5xl md:text-6xl mt-2 text-ink">
            Whichever way is <span className="display-italic text-tomato">easier</span> for you.
          </h2>
        </header>

        <div className="grid gap-6 lg:grid-cols-12">
          {/* WhatsApp — primary channel */}
          <div className="lg:col-span-5 bg-bottle text-paper p-6 md:p-8 border-2 border-ink relative overflow-hidden">
            <p className="eyebrow text-paper/60">Fastest</p>
            <h3 className="font-display text-4xl mt-1 leading-tight">WhatsApp me direct.</h3>
            <p className="font-body text-paper/80 mt-3 leading-relaxed">
              I read messages between 5am and 9pm. Reply in under 15 minutes during delivery
              windows, under an hour outside.
            </p>
            <div className="mt-5 font-mono text-3xl font-bold tracking-wide">
              {SITE.phone}
            </div>
            <a
              href={waLink('Hi Bikash,')}
              target="_blank"
              rel="noreferrer"
              className="btn-stamp inline-flex items-center gap-2 mt-6"
              style={{ background: 'var(--marigold)', color: 'var(--ink)' }}
            >
              <MessageCircle size={16} strokeWidth={2.4} />
              Open chat
            </a>

            {/* Decorative tomato */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-tomato/85 border-2 border-ink pointer-events-none" aria-hidden="true">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-2 h-6 bg-bottle rounded-full" />
            </div>
          </div>

          {/* Right column: email + payments */}
          <div className="lg:col-span-7 grid gap-6">
            <div className="bg-paper border-2 border-ink p-6">
              <p className="eyebrow text-ink/70">For longer notes</p>
              <h3 className="font-display text-3xl mt-1 text-ink leading-tight">
                Or drop me an email.
              </h3>
              <a
                href={`mailto:${SITE.email}`}
                className="font-mono text-lg text-tomato ink-link mt-2 inline-block"
              >
                {SITE.email}
              </a>

              <form onSubmit={submit} className="mt-5 grid gap-3">
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name (optional)"
                  className="bg-paper border border-ink px-3 py-2.5 font-body placeholder:text-ink/40 focus:outline-none focus:bg-paper2"
                />
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="What you'd like to say…"
                  rows={4}
                  required
                  className="bg-paper border border-ink px-3 py-2.5 font-body placeholder:text-ink/40 focus:outline-none focus:bg-paper2 resize-none"
                />
                <button type="submit" className="btn-stamp inline-flex items-center justify-center gap-2">
                  <Send size={15} strokeWidth={2.4} />
                  {sent ? 'Opening your mail app…' : 'Send'}
                </button>
              </form>
            </div>

            <div className="bg-paper border-2 border-ink p-6">
              <p className="eyebrow text-ink/70">Mobile wallet — payment numbers</p>
              <h3 className="font-display text-3xl mt-1 text-ink leading-tight">
                Direct send, any of these.
              </h3>
              <ul className="mt-4 divide-y-2 divide-ink">
                {SITE.payments.map((p, i) => (
                  <li key={p.name} className="flex items-center justify-between py-3">
                    <span className="font-display text-xl text-ink">
                      <span className="text-tomato font-mono text-base mr-2">
                        0{i + 1}
                      </span>
                      {p.name}
                    </span>
                    <span className="font-mono font-bold text-ink">{p.number}</span>
                  </li>
                ))}
              </ul>
              <p className="font-mono text-[10px] uppercase tracking-eyebrow text-ink/55 mt-3">
                Personal number / Send "Cash out" or "Send money" / Receipt on request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}