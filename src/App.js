import { Toaster } from "react-hot-toast";
import Contact from "./components/Contact";
import Header, { ResponsiveMenu } from "./components/Header";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Hero from "./components/Hero";
import { useState } from "react";
import "./styles/app.css";
import Footer from "./components/Footer";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  // console.log(menuOpen);
  return (
    <>
      <ResponsiveMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <Projects />
      <Services />
      {/* <Testimonials /> */}
      <Contact />
      <Toaster />
      <Footer />
    </>
  );
}

export default App;
