import CompareSection from './Components/CompareSection';
import FAQ from './Components/FAQ';
import FreeTrial from './Components/FreeTrial';
import Hero from './Components/Hero';
import HowItWorks from './Components/HowItWorks';
import LogoCloud from './Components/LogoCloud';
import Testimonial from './Components/Testimonial';
import WorksWithDocument from './Components/WorksWithDocument';

export default function Home() {
  return (
    <main className="min-h-screen relative px-2 sm:px-4 md:px-10 bg-white">
      <Hero />
      <LogoCloud />
      <Testimonial />
      <HowItWorks />
      <WorksWithDocument />
      <CompareSection />
      <FAQ />
      <FreeTrial />
    </main>
  );
}
