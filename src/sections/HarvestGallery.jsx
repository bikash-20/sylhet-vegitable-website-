import { motion } from 'framer-motion';
import { HARVEST_TODAY } from '../data/products';

// Strip of harvest photos — runs across the page just before the price list.
// Each tile shows a real image from the morning with a caption in the
// newspaper-style mono eyebrow. This is what makes the page feel "full of
// actual food" rather than templated product cards alone.
const TILES = [
  { img: '/images/image-2.png', caption: 'Bunching, 5:12am' },
  { img: '/images/image-3.png', caption: 'Roots, washed' },
  { img: '/images/country tommato.webp', caption: 'Reds, hand-sorted' },
  { img: '/images/Pui Spinach.jpg', caption: 'Greens, rinsed' },
  { img: '/images/red onion.jpeg', caption: 'Skin-on, dry' },
  { img: '/images/lady-finger.webp', caption: 'Pods, midday' },
  { img: '/images/Bitter Gourd.jpeg', caption: 'Bitter, ridged' },
  { img: '/images/image-9.png', caption: 'Mid-route, 7am' },
];

export default function HarvestGallery() {
  return (
    <section className="border-b-2 border-ink bg-paper">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-10">
        <div className="flex items-baseline justify-between mb-4">
          <p className="eyebrow text-ink/70">From this morning / a few of the baskets</p>
          <p className="font-mono text-[10px] uppercase tracking-eyebrow text-ink/50 hidden sm:block">
            {HARVEST_TODAY.length} stops on today's route
          </p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.07 } },
          }}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3"
        >
          {TILES.map((t) => (
            <motion.figure
              key={t.caption}
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-square border-2 border-ink overflow-hidden bg-paper2"
            >
              <img
                src={t.img}
                alt={t.caption}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-paper border-t border-ink px-2 py-1.5 font-mono text-[10px] uppercase tracking-eyebrow text-ink/85">
                {t.caption}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}