import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import HarvestGallery from './sections/HarvestGallery';
import FeaturedProducts from './sections/FeaturedProducts';
import About from './sections/About';
import HowToOrder from './sections/HowToOrder';
import DeliveryInfo from './sections/DeliveryInfo';
import Testimonials from './sections/Testimonials';
import FAQs from './sections/FAQs';
import Contact from './sections/Contact';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-paper text-ink">
        <Navbar />
        <main>
          <Hero />
          <HarvestGallery />
          <FeaturedProducts />
          <About />
          <HowToOrder />
          <DeliveryInfo />
          <Testimonials />
          <FAQs />
          <Contact />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}