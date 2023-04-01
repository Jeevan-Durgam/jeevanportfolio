import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Works from "./components/Works";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Skills />
      <Works />
      <Footer />
    </main>
  );
}
