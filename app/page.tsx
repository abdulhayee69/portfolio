import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Timeline from "@/components/Timeline";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="cursor-none-native">
        <ScrollProgress />
        <Cursor />
        <Nav />
        <main>
          <Hero />
          <Work />
          <Timeline />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
