import SmoothScroll from "./components/SmoothScroll";
import Hero from "./sections/Hero";
import ShopSection from "./sections/ShopSection";
import AboutSection from "./sections/AboutSection";
import FooterSection from "./sections/FooterSection";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="bg-[#0a0a0a]">
        <Hero />
        <ShopSection />
        <AboutSection />
        <FooterSection />
      </main>
    </SmoothScroll>
  );
}
