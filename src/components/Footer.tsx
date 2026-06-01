import ScrollReveal from "./ScrollReveal";
import { portfolioData } from "../data";
import { Linkedin, Github, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-surf-low dark:bg-surf-lowest border-t border-border-custom/50 py-10 transition-colors">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Right Details Label */}
        <div className="text-center md:text-left">
          <p className="font-mono text-xs text-txt-low">
            © {currentYear} {portfolioData.name}. Built with Precision.
          </p>
        </div>

        {/* Brand Icon Anchors / Back to Top Button */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 text-txt-mid">
            <a
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-accent transition-colors p-1"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            
            <a
              href={portfolioData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-accent transition-colors p-1"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
            
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="hover:text-emerald-accent transition-colors p-1"
              aria-label="Email Shamaan"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <button
            onClick={handleBackToTop}
            className="p-2 bg-surf-mid dark:bg-surf-low rounded-full hover:bg-emerald-glow text-txt-mid hover:text-emerald-accent border border-border-custom hover:border-emerald-accent/40 shadow-sm transition-all cursor-pointer active:scale-95"
            aria-label="Scroll Back to Top"
            title="Back to Top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
