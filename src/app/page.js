
import Features from '@/components/feature/Feature';
import Footer from '@/components/footer/Footers';
import Header from '@/components/header/Headers';
import Hero from '@/components/hero/Hero';
import Pricing from '@/components/pricing/Pricing';
import Programs from '@/components/programs/Programs';
import Testimonials from '@/components/testimonies/Testimonies';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <Programs />
      <Pricing />
      <Testimonials />
      <Footer />
    </main>
  );
}