import { Toaster } from "react-hot-toast";
import Contact from "./components/Contact";
import Header, { ResponsiveMenu } from "./components/Header";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Hero from "./components/Hero";
import { useState } from "react";
import "./styles/app.css";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <ResponsiveMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Toaster />
      <Footer />
    </>
  );
}

export default App;
