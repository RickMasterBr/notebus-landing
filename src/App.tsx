import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { HowItWorks } from './components/HowItWorks';
import { ProductShowcase } from './components/ProductShowcase';
import { Principles } from './components/Principles';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Problem />
        <HowItWorks />
        <ProductShowcase />
        <Principles />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
