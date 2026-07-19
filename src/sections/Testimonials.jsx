import { Star, Quote } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { StaggerContainer, StaggerItem } from '../components/StaggerContainer';

const REVIEWS = [
  {
    name: 'Marium Rahman',
    area: 'Zindabazar',
    rating: 5,
    body: 'The tomato actually tastes like a tomato. My husband asked if it was from a different country.',
  },
  {
    name: 'Sabbir Ahmed',
    area: 'Bondor Bazar',
    rating: 5,
    body: 'Bikash bhai sends a WhatsApp at 6am like a newspaper. I read it while the kettle boils.',
  },
  {
    name: 'Tania Hossain',
    area: 'Subidbazar',
    rating: 4,
    body: 'Wish he did coriander every day. Spinach is excellent — clean, no grit, ever.',
  },
  {
    name: 'Iftekhar Khan',
    area: 'Akhalia',
    rating: 5,
    body: 'Three weeks in, my fridge is the calmest it\'s been. I order standing in line at the lift.',
  },
];

function Stars({ n }) {
  return (
    <div className="flex gap-0.5 text-marigold" aria-label={`${n} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < n ? 'currentColor' : 'transparent'}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <AnimatedSection className="border-b-2 border-ink bg-paper2">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-14 md:py-20">
        <header className="max-w-2xl mb-10">
          <p className="eyebrow text-ink/70">Section VI / Letterbox</p>
          <h2 className="display text-5xl md:text-6xl mt-2 text-ink">
            What people <span className="display-italic text-tomato">write back.</span>
          </h2>
        </header>

        <StaggerContainer className="grid gap-4 md:grid-cols-2">
          {REVIEWS.map((r) => (
            <StaggerItem
              key={r.name}
              className="border-2 border-ink bg-paper p-5 relative"
            >
              <Quote size={28} className="text-tomato/20 absolute top-3 right-3" />
              <Stars n={r.rating} />
              <p className="font-display text-xl text-ink mt-3 leading-snug">
                "{r.body}"
              </p>
              <div className="mt-4 pt-3 border-t border-ink/20 flex items-baseline justify-between">
                <p className="font-display text-base text-ink">{r.name}</p>
                <p className="font-mono text-[10px] uppercase tracking-eyebrow text-ink/60">
                  {r.area}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}