// Single source of truth for contact + payment info.
// All WhatsApp/message templates reference these so editing one place
// updates everywhere (contact section, footer, cart, how-to-order).

export const SITE = {
  vendor: 'Bikash Talukder',
  brand: 'সবজি Fresh',
  email: 'bikashtalukder040@gmail.com',
  phone: '01926240062',
  // Phone as digits only — used to build wa.me links.
  phoneIntl: '8801926240062',
  city: 'Sylhet',
  cityLong: 'Sylhet Sadar, Sylhet',
  payments: [
    { name: 'bKash', number: '01926240062' },
    { name: 'Nagad', number: '01926240062' },
    { name: 'Rocket', number: '01926240062' },
  ],
};

export const waLink = (text) =>
  `https://wa.me/${SITE.phoneIntl}?text=${encodeURIComponent(text)}`;

// Sample message template — what the "How to Order" section copies to clipboard.
export const SAMPLE_ORDER = `Hi Bikash bhai, I'd like to order:

• 1 kg Country Tomato (তাজা টমেটো)
• 500g Red Onion (দেশি পেঁয়াজ)
• 1 kg New Potato (নতুন আলু)

Delivery: Sylhet Sadar, near the central mor
Time: Tomorrow, 7-9am
Payment: Cash on delivery / bKash to 01926240062

Thanks!`;
