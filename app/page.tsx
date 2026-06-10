import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ImpactStrip from "@/components/ImpactStrip";
import About from "@/components/About";
import Experience from "@/components/Experience";
import FeaturedWork from "@/components/FeaturedWork";
import ResearchPolicy from "@/components/ResearchPolicy";
import Leadership from "@/components/Leadership";
import Skills from "@/components/Skills";
import Recognition from "@/components/Recognition";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ImpactStrip />
        <About />
        <Experience />
        <FeaturedWork />
        <ResearchPolicy />
        <Leadership />
        <Skills />
        <Recognition />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
