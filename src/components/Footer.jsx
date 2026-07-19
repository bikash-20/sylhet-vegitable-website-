import { SITE } from '../data/site';

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-12 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="eyebrow text-paper/60">est. 2024 / Sylhet</p>
          <h3 className="display text-5xl md:text-6xl mt-2 leading-none">
            সবজি<span className="display-italic text-tomato">.</span>
          </h3>
          <p className="font-body text-paper/80 mt-4 max-w-md leading-relaxed">
            Picked at dawn from neighbourhood kitchen gardens, on your door by lunch.
            One person, one bicycle, one bamboo basket.
          </p>
          <div className="mt-6 inline-flex items-center gap-3">
            <span className="stamp stamp-marked text-2xl" aria-hidden="true">
              তাজা
            </span>
            <span className="font-mono text-[11px] uppercase tracking-eyebrow text-paper/60">
              Stamped &amp; sealed / Daily
            </span>
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow text-paper/60 mb-3">Reach me</p>
          <ul className="font-body space-y-1.5">
            <li>
              <a href={`https://wa.me/${SITE.phoneIntl}`} className="ink-link">
                WhatsApp · {SITE.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="ink-link">
                {SITE.email}
              </a>
            </li>
            <li className="text-paper/70">{SITE.city}</li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow text-paper/60 mb-3">Walk-ins</p>
          <p className="font-body text-paper/80">
            Zindabazar, near the central mor,<br />
            opposite the tea stall.<br />
            Daily 6am — 1pm.
          </p>
        </div>
      </div>

      <div className="border-t border-paper/15">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="font-mono text-[11px] uppercase tracking-eyebrow text-paper/55">
            © {new Date().getFullYear()} Designed &amp; developed by Bikash Talukder
          </p>
        </div>
      </div>
    </footer>
  );
}
