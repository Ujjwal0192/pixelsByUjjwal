import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
    <Toaster position="top-center" />
      <div className="max-w-[1200px] mx-auto px-4">
        <Navbar />
        <Hero />
      </div>

      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
