import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { HARVEST_TODAY } from '../data/products';
import { SITE, waLink } from '../data/site';

// Magazine-cover hero. Asymmetric layout: massive headline on the left, a single
// hero image (flatlay) on the right, with the tomato-red "তাজা" stamp seated on
// the image as the focal point. No centered headline + 3 buttons.
export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b-2 border-ink"
    >
      {/* Full-bleed background image — sits behind the editorial content
          with the paper grain still readable through it. */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/image.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.18] grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/85 to-paper/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8 pt-10 pb-6 grid gap-8 lg:gap-12 lg:grid-cols-12 items-end">
        {/* Editorial column */}
        <div className="lg:col-span-7 relative">
          <p className="eyebrow text-ink/70">
            Vol. 02 / Issue 17 <span className="mx-2 text-ink/40">—</span> This morning's harvest
          </p>

          <h1 className="display text-[3.6rem] sm:text-7xl lg:text-[6.4rem] mt-4 text-ink">
            Vegetables,<br />
            <span className="display-italic text-tomato">honestly</span> sourced,
            <br />
            delivered <span className="relative inline-block">
              <span className="relative z-10">by</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-marigold/70 -z-0"></span>
            </span> lunch.
          </h1>

          <p className="font-body text-lg md:text-xl text-ink/80 max-w-xl mt-6 leading-relaxed">
            I'm <span className="font-semibold">{SITE.vendor}</span>. I cycle to the kitchen gardens
            around Sylhet before sunrise, fill a bamboo basket, and bring it to your door before
            you finish your morning tea. Twelve items today, no middlemen.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#products"
              className="btn-stamp inline-flex items-center gap-2"
            >
              See today's list
              <ArrowRight size={16} strokeWidth={2.4} />
            </a>
            <a
              href={waLink('Hi Bikash, I want to order some vegetables today.')}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost inline-flex items-center gap-2"
            >
              <MessageCircle size={16} strokeWidth={2.4} />
              WhatsApp me
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="font-mono text-[11px] uppercase tracking-eyebrow text-ink/70 ink-link"
            >
              or email
            </a>
          </div>

          {/* Editorial byline — distinctive vs. generic "Trusted by 1000s" */}
          <div className="mt-10 flex items-center gap-4 max-w-md">
            <div className="h-px flex-1 bg-ink" />
            <p className="font-mono text-[11px] uppercase tracking-eyebrow text-ink/65 text-center">
              One vendor. One bicycle.<br />
              No warehouses.
            </p>
            <div className="h-px flex-1 bg-ink" />
          </div>
        </div>

        {/* Hero image column */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] overflow-hidden border-2 border-ink">
            <img
              src="/images/image-4.png"
              alt="A bamboo basket of this morning's harvest"
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Caption strip — newspaper-style */}
            <div className="absolute bottom-0 left-0 right-0 bg-paper border-t-2 border-ink px-3 py-2">
              <p className="font-mono text-[10px] uppercase tracking-eyebrow text-ink/80">
                Fig. 01 — Picked 5:42am, Zindabazar kitchen garden
              </p>
            </div>
          </div>

          {/* Rubber stamp — the signature element, sitting on the image */}
          <motion.div
            initial={{ rotate: -8, scale: 0.6, opacity: 0 }}
            animate={{ rotate: -8, scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 220, damping: 14 }}
            className="stamp stamp-marked absolute -bottom-8 -left-8 sm:-left-12 md:-left-16"
            aria-hidden="true"
          >
            <span className="text-2xl leading-none">
              তাজা<br />
              <span className="font-mono text-[10px] tracking-eyebrow block mt-1 text-tomato">
                SINCE 2024
              </span>
            </span>
          </motion.div>
        </div>
      </div>

      {/* Harvest ticker — CSS-only marquee with twice the items so it loops seamlessly */}
      <div className="relative z-10 border-y border-ink bg-paper2 overflow-hidden">
        <div className="ticker-track py-3 font-display italic text-2xl md:text-3xl text-ink/85">
          {[...HARVEST_TODAY, ...HARVEST_TODAY].map((h, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-6">
              {h}
              <span className="text-tomato" aria-hidden="true">✻</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
