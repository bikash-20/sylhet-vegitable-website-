import { useMemo, useState } from 'react';
import { Minus, Plus, Search, ShoppingBasket, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { useCart } from '../context/CartContext';
import { SITE, waLink } from '../data/site';

// Helper — build the WhatsApp order message from cart contents.
function buildOrderMessage(list, totalQty, totalPrice) {
  const lines = list
    .map((e) => `• ${e.qty} × ${e.product.name} (${e.product.bangla}) — ৳${e.qty * e.product.price}`)
    .join('\n');
  return `Hi Bikash bhai, I'd like to order:\n\n${lines}\n\nTotal: ${totalQty} item(s) / ৳${totalPrice}\n\nPickup / delivery: (your area)\nPayment: Cash / bKash to ${SITE.phone}`;
}

function ProductCard({ product }) {
  const { add, items, setQty } = useCart();
  const qty = items[product.id]?.qty ?? 0;

  return (
    <article className="group relative flex flex-col bg-paper border-2 border-ink">
      <div className="relative aspect-[4/3] overflow-hidden bg-paper2 border-b-2 border-ink">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute top-2 left-2 font-mono text-[10px] uppercase tracking-eyebrow bg-paper px-2 py-1 border border-ink">
          {product.category}
        </span>
      </div>

      <div className="flex flex-col gap-1 px-4 pt-3 pb-4">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-display text-2xl text-ink leading-tight">{product.name}</h3>
          <span className="font-mono text-sm font-bold text-tomato whitespace-nowrap">
            ৳{product.price}<span className="text-ink/60">/{product.unit}</span>
          </span>
        </div>
        <p className="font-body italic text-sm text-ink/70">{product.bangla}</p>
        <p className="font-body text-sm text-ink/75 mt-1 leading-snug">{product.note}</p>

        <div className="mt-3 flex items-center justify-between">
          {qty === 0 ? (
            <button
              type="button"
              onClick={() => add(product)}
              className="btn-stamp text-[11px] py-2 px-3"
            >
              Add to basket
            </button>
          ) : (
            <div className="inline-flex items-center border-2 border-ink">
              <button
                type="button"
                onClick={() => setQty(product.id, qty - 1)}
                className="p-2 hover:bg-ink hover:text-paper transition-colors"
                aria-label="Decrease"
              >
                <Minus size={14} />
              </button>
              <span className="px-3 font-mono text-sm font-bold w-10 text-center">{qty}</span>
              <button
                type="button"
                onClick={() => setQty(product.id, qty + 1)}
                className="p-2 hover:bg-ink hover:text-paper transition-colors"
                aria-label="Increase"
              >
                <Plus size={14} />
              </button>
            </div>
          )}
          <span className="font-mono text-[10px] uppercase tracking-eyebrow text-ink/55">
            per {product.unit}
          </span>
        </div>
      </div>
    </article>
  );
}

function CartDrawer() {
  const { open, setOpen, list, totalQty, totalPrice, setQty, remove, clear } = useCart();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-ink/40 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
          <motion.aside
            className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-paper z-50 border-l-2 border-ink flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 280, damping: 30 }}
            role="dialog"
            aria-label="Basket"
          >
            <div className="flex items-center justify-between border-b-2 border-ink px-5 py-4">
              <div>
                <p className="eyebrow text-ink/60">Your basket</p>
                <h2 className="display text-3xl text-ink leading-none mt-1">
                  {totalQty > 0 ? `${totalQty} item${totalQty > 1 ? 's' : ''}` : 'Empty'}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="p-2 border-2 border-ink hover:bg-ink hover:text-paper"
                aria-label="Close basket"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              {list.length === 0 ? (
                <div className="px-5 py-16 text-center">
                  <ShoppingBasket className="mx-auto mb-4 text-ink/40" size={36} />
                  <p className="font-display text-2xl text-ink">Nothing in here yet.</p>
                  <p className="font-body text-ink/65 mt-2">
                    Add a few items and your basket will fill up.
                  </p>
                </div>
              ) : (
                <ul className="divide-y divide-ink/15">
                  {list.map((e) => (
                    <li key={e.product.id} className="flex gap-3 px-5 py-4">
                      <img
                        src={e.product.image}
                        alt=""
                        className="w-16 h-16 object-cover border border-ink shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-display text-lg text-ink leading-tight truncate">
                          {e.product.name}
                        </p>
                        <p className="font-mono text-xs text-ink/65">৳{e.product.price}/{e.product.unit}</p>
                        <div className="mt-2 flex items-center justify-between">
                          <div className="inline-flex items-center border border-ink">
                            <button
                              type="button"
                              onClick={() => setQty(e.product.id, e.qty - 1)}
                              className="px-2 py-1 hover:bg-ink hover:text-paper"
                              aria-label="Decrease"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="px-3 font-mono text-xs w-8 text-center">{e.qty}</span>
                            <button
                              type="button"
                              onClick={() => setQty(e.product.id, e.qty + 1)}
                              className="px-2 py-1 hover:bg-ink hover:text-paper"
                              aria-label="Increase"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() => remove(e.product.id)}
                            className="font-mono text-[10px] uppercase tracking-eyebrow text-ink/55 hover:text-tomato"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <span className="font-mono text-sm font-bold text-tomato shrink-0">
                        ৳{e.qty * e.product.price}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {list.length > 0 && (
              <div className="border-t-2 border-ink px-5 py-4 bg-paper2">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="eyebrow text-ink/70">Subtotal</span>
                  <span className="font-mono text-2xl font-bold text-ink">৳{totalPrice}</span>
                </div>
                <p className="font-body text-xs text-ink/65 mb-3">
                  Cash on delivery or bKash to {SITE.phone}. Free delivery over ৳800.
                </p>
                <div className="grid gap-2">
                  <a
                    href={waLink(buildOrderMessage(list, totalQty, totalPrice))}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-stamp text-center text-sm"
                  >
                    Send order on WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={clear}
                    className="font-mono text-[11px] uppercase tracking-eyebrow text-ink/60 hover:text-tomato py-2"
                  >
                    Empty basket
                  </button>
                </div>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default function FeaturedProducts() {
  const [cat, setCat] = useState('All');
  const [q, setQ] = useState('');

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      if (cat !== 'All' && p.category !== cat) return false;
      if (!term) return true;
      return (
        p.name.toLowerCase().includes(term) ||
        p.bangla.includes(term) ||
        p.category.toLowerCase().includes(term)
      );
    });
  }, [cat, q]);

  return (
    <section id="products" className="border-b-2 border-ink">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-14 md:py-20">
        <header className="grid md:grid-cols-12 gap-6 items-end mb-8">
          <div className="md:col-span-7">
            <p className="eyebrow text-ink/70">Section II / The Price List</p>
            <h2 className="display text-5xl md:text-6xl mt-2 text-ink">
              Twelve items,<br />
              <span className="display-italic text-tomato">honest</span> prices.
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="font-body text-ink/75 leading-relaxed">
              What was in season this morning. Prices are per unit, picked that morning. If a
              vegetable isn't listed, ask — I'll tell you what's not worth buying today.
            </p>
          </div>
        </header>

        <div className="flex flex-col md:flex-row md:items-center gap-3 mb-6">
          <div className="relative flex-1">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/55" />
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search টমেটো, onion, leafy..."
              className="w-full bg-paper border-2 border-ink pl-9 pr-3 py-2.5 font-body placeholder:text-ink/40 focus:outline-none focus:bg-paper2"
            />
          </div>
          <div className="flex flex-wrap gap-1.5">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCat(c)}
                className={`font-mono text-[11px] uppercase tracking-eyebrow px-3 py-2 border-2 transition-colors ${
                  cat === c
                    ? 'bg-ink text-paper border-ink'
                    : 'bg-paper text-ink border-ink hover:bg-paper2'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="font-display italic text-2xl text-ink/60 py-12 text-center">
            Nothing matches that. Try a different word.
          </p>
        ) : (
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProductCard product={p} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      <CartDrawer />
    </section>
  );
}