import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg-page text-txt-high relative transition-colors duration-300">
      {/* Navigation header bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Sections flow */}
      <main className="pt-20">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Footer copyright rails */}
      <Footer />

      {/* PDF Simulation Resume Viewer Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}

