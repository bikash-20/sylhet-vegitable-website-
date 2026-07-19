import AnimatedSection from '../components/AnimatedSection';

export default function About() {
  return (
    <AnimatedSection id="about" className="border-b-2 border-ink">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-14 md:py-20 grid lg:grid-cols-12 gap-10 lg:gap-14">
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[3/4] border-2 border-ink overflow-hidden">
            <img
              src="/images/bikash.png"
              alt="Bikash Talukder — the vendor"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-eyebrow text-ink/60">
            Fig. 02 — Bikash, the vendor
          </p>
        </div>

        <div className="lg:col-span-7">
          <p className="eyebrow text-ink/70">Section III / About the vendor</p>
          <h2 className="display text-5xl md:text-6xl mt-2 text-ink">
            I'm Bikash.<br />
            <span className="display-italic text-tomato">One bicycle.</span>
            <br />
            One bamboo basket.
          </h2>

          <div className="mt-6 space-y-4 font-body text-ink/85 text-lg leading-relaxed">
            <p>
              My grandfather grew vegetables in a small plot outside the city. I used to help him
              weed the rows before school. Two years ago I quit my office job and started bringing
              his harvest — and the harvest of a few neighbours — to people in Sylhet who wanted
              real food, not plastic-wrapped imports.
            </p>
            <p>
              I don't run a warehouse. I don't keep a logo on a fleet of vans. Every morning at 4am
              I load the basket on the cycle and ride out to the kitchen gardens, fill up, and start
              delivering by 6. What you order is what was in the ground twelve hours ago.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-0 border-2 border-ink">
            {[
              { n: '06:00', l: 'avg. delivery start' },
              { n: '12', l: 'items, max / day' },
              { n: '0', l: 'middlemen' },
            ].map((s, i) => (
              <div
                key={s.l}
                className={`px-4 py-5 text-center ${i !== 2 ? 'border-r-2 border-ink' : ''}`}
              >
                <dt className="font-display text-3xl md:text-4xl text-tomato">{s.n}</dt>
                <dd className="font-mono text-[10px] uppercase tracking-eyebrow text-ink/70 mt-1">
                  {s.l}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </AnimatedSection>
  );
}