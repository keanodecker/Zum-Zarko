import Navigation from "./components/Navigation";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Menu from "./sections/Menu";
import Gallery from "./sections/Gallery";
import BundesligaSection from "./sections/BundesligaSection";
import OpeningHoursSection from "./sections/OpeningHoursSection";
import ReservationSection from "./sections/ReservationSection";
import EventSection from "./sections/EventSection";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zarko-dark">
      <Navigation />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <BundesligaSection />
      <OpeningHoursSection />
      <ReservationSection />
      <EventSection />
      <Contact />
      <Footer />
    </main>
  );
}
