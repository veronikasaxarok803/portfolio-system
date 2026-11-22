import Hero from "./sections/hero";
import Concepts from "./sections/concepts";
import Services from "./sections/services";
import About from "./sections/about";
import Process from "./sections/process";
import Testimonials from "./sections/testimonials";
import Contact from "./sections/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Concepts />
      <Services />
      <About />
      <Process />
      <Testimonials />
      <Contact />
    </main>
  );
}
