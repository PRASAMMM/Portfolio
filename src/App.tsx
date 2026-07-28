import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Impact } from "@/components/Impact";
import { Experience } from "@/components/Experience";
import { Work } from "@/components/Work";
import { Leadership } from "@/components/Leadership";
import { Capabilities } from "@/components/Capabilities";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Impact />
        <Experience />
        <Work />
        <Leadership />
        <Capabilities />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
