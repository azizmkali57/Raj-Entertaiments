import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/hero";
import About from "@/components/home/about";
import Services from "@/components/home/services";
import Process from "@/components/home/process";
import Testimonials from "@/components/home/testimonials";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Process />
      <Testimonials />
      <Footer />
    </main>
  );
}