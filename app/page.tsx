import CompareSection from "./Components/CompareSection";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";
import FreeTrial from "./Components/FreeTrial";
import Hero from "./Components/Hero";
import HowItWorks from "./Components/HowItWorks";
import LogoCloud from "./Components/LogoCloud";
import Navbar from "./Components/Navbar";
import PlatformSection from "./Components/PlatformSection";
import Testimonial from "./Components/Testimonial";
import WorksWithDocument from "./Components/WorksWithDocument";


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero/>
      <LogoCloud/>
      <PlatformSection/>
      <Testimonial/> 
      <HowItWorks/>
      <WorksWithDocument/>
      <CompareSection /> 
      <FAQ/>
      <FreeTrial/>
      <Footer />
    </main>
  );
}
