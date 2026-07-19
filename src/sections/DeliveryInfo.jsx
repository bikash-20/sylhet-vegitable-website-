import { Clock, Wallet, MapPin } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const AREAS = [
  'Zindabazar', 'Bondor Bazar', 'Chowhatta', 'Lalbazar', 'Subidbazar',
  'Mirabazar', 'Dargah Gate', 'Naiorpool', 'Shahjalal Upashahar',
  'Akhalia', 'Tilagarh', 'Moglabazar', 'Rikabi Bazar', 'Fenchuganj Road',
  'Tuker Bazar', 'Khadimnagar', 'Salutikar', 'Boroikhel',
];

const SLOTS = [
  { time: 'Morning', window: '6:00 — 10:00 AM', note: 'Best for leafy greens.' },
  { time: 'Midday', window: '10:00 AM — 1:00 PM', note: 'Good for everything.' },
];

export default function DeliveryInfo() {
  return (
    <AnimatedSection id="delivery" className="border-b-2 border-ink">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-14 md:py-20">
        <header className="grid md:grid-cols-12 gap-6 items-end mb-8">
          <div className="md:col-span-7">
            <p className="eyebrow text-ink/70">Section V / The logistics</p>
            <h2 className="display text-5xl md:text-6xl mt-2 text-ink">
              Where I deliver,<br />
              <span className="display-italic text-tomato">when,</span> and how you pay.
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="font-body text-ink/75 leading-relaxed">
              One bicycle, one basket, no warehouses. So my delivery range is real — not a fancy
              zip-code promise.
            </p>
          </div>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="border-2 border-ink p-5">
            <MapPin size={20} className="text-tomato" />
            <p className="eyebrow text-ink/70 mt-3">18 areas</p>
            <p className="font-display text-2xl mt-1 text-ink leading-tight">
              Across Sylhet Sadar
            </p>
            <ul className="mt-4 columns-2 gap-3 font-body text-sm text-ink/80">
              {AREAS.map((a) => (
                <li key={a} className="break-inside-avoid flex items-center gap-1.5">
                  <span className="text-tomato">·</span> {a}
                </li>
              ))}
            </ul>
            <p className="mt-4 pt-3 border-t border-ink/20 font-mono text-[10px] uppercase tracking-eyebrow text-ink/55">
              Free delivery over ৳800 · otherwise ৳40
            </p>
          </div>

          <div className="border-2 border-ink p-5">
            <Clock size={20} className="text-tomato" />
            <p className="eyebrow text-ink/70 mt-3">Two windows</p>
            <p className="font-display text-2xl mt-1 text-ink leading-tight">
              Same-day, or next morning.
            </p>
            <ul className="mt-4 space-y-3">
              {SLOTS.map((s) => (
                <li key={s.time} className="ledger-row pb-2">
                  <p className="font-mono text-[11px] uppercase tracking-eyebrow text-tomato">
                    {s.time}
                  </p>
                  <p className="font-display text-lg text-ink">{s.window}</p>
                  <p className="font-body text-sm text-ink/70">{s.note}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 pt-3 border-t border-ink/20 font-mono text-[10px] uppercase tracking-eyebrow text-ink/55">
              Order by 9pm for next morning's slot.
            </p>
          </div>

          <div className="border-2 border-ink p-5">
            <Wallet size={20} className="text-tomato" />
            <p className="eyebrow text-ink/70 mt-3">Four ways to pay</p>
            <p className="font-display text-2xl mt-1 text-ink leading-tight">
              Your choice at the door.
            </p>
            <ul className="mt-4 space-y-1.5 font-body text-ink/85">
              <li className="ledger-row pb-1.5">Cash on delivery</li>
              <li className="ledger-row pb-1.5">bKash — personal</li>
              <li className="ledger-row pb-1.5">Nagad — personal</li>
              <li className="ledger-row pb-1.5">Rocket — personal</li>
            </ul>
            <p className="mt-4 pt-3 border-t border-ink/20 font-mono text-[10px] uppercase tracking-eyebrow text-ink/55">
              Send to 01926240062 / receipt on request.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}