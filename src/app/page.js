// import Header from '@/components/Header';
// import Hero from '@/components/Hero';
// import Features from '@/components/Features';
// import Programs from '@/components/Programs';
// import Pricing from '@/components/Pricing';
// import Testimonials from '@/components/Testimonials';
// import Footer from '@/components/Footer';
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