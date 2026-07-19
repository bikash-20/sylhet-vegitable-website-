import { createContext, useCallback, useContext, useMemo, useState } from 'react';

// Cart state is global so the slide-out drawer (in App), product cards
// (in ProductsPage), and floating cart pill (in Navbar) all stay in sync
// without passing props down.

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState({}); // { id: { product, qty } }
  const [open, setOpen] = useState(false);

  const add = useCallback((product, qty = 1) => {
    setItems((prev) => ({
      ...prev,
      [product.id]: {
        product,
        qty: (prev[product.id]?.qty ?? 0) + qty,
      },
    }));
  }, []);

  const setQty = useCallback((id, qty) => {
    setItems((prev) => {
      if (qty <= 0) {
        const { [id]: _drop, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: { ...prev[id], qty } };
    });
  }, []);

  const remove = useCallback((id) => {
    setItems((prev) => {
      const { [id]: _drop, ...rest } = prev;
      return rest;
    });
  }, []);

  const clear = useCallback(() => setItems({}), []);

  const list = useMemo(() => Object.values(items), [items]);
  const totalQty = useMemo(
    () => list.reduce((sum, e) => sum + e.qty, 0),
    [list],
  );
  const totalPrice = useMemo(
    () => list.reduce((sum, e) => sum + e.qty * e.product.price, 0),
    [list],
  );

  return (
    <CartContext.Provider
      value={{ items, list, totalQty, totalPrice, open, setOpen, add, setQty, remove, clear }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
};
