import CompareSection from './Components/CompareSection';
import FAQ from './Components/FAQ';
import FreeTrial from './Components/FreeTrial';
import Hero from './Components/Hero';
import HowItWorks from './Components/HowItWorks';
import LogoCloud from './Components/LogoCloud';
import Platform from './Components/Platform';
import Test from './Components/Test/Test';
import Testimonial from './Components/Testimonial';
import WorksWithDocument from './Components/WorksWithDocument';

export default function Home() {
  return (
    <main className="min-h-screen  bg-white">
      {/* SINGLE CONSISTENT CONTAINER SYSTEM */}
      <div className="max-w-[1170px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[69px]">
        <Hero />
        <Platform />
        <LogoCloud />
        <Testimonial />
        <HowItWorks />
        <WorksWithDocument />
        <CompareSection />
        <FAQ />
        <FreeTrial />
      </div>
    </main>
  );
}
