import About from "@/components/About";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import HowWeWork from "@/components/howWeWork";
import Results from "@/components/Results";
import Services from "@/components/services";
import Testimonials from "@/components/Testimonials";
import WhyUS from "@/components/whyUs";

export default function Home() {
  return (
    <div className=" min-h-screen bg-[#001006]">
      <Header />
   <div className="w-full">



  <section id="about">
    <About />
  </section>

  <section id="services">
    <Services />
  </section>

  <section id="results">
    <Results />
  </section>

  <section id="testimonials">
    <Testimonials />
  </section>

  <section id="how-we-work">
    <HowWeWork />
  </section>

  <section id="why-us">
    <WhyUS />
  </section>

  <section id="contact">
    <ContactUs />
  </section>

  <Footer />
</div>
    </div>
  );
}
