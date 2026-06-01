import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
  onOpenResume: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active link detection based on section scroll offset
      const sections = ["about", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    const target = document.getElementById(sectionId);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-bg-page/80 backdrop-blur-md shadow-sm border-b border-border-custom h-18 py-3"
          : "bg-transparent h-20 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-full">
        {/* Brand Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-lg md:text-xl font-bold text-txt-high tracking-tight hover:text-emerald-accent transition-colors cursor-pointer"
        >
          Shamaan<span className="text-emerald-accent">.dev</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`nav-link text-sm font-medium tracking-wide cursor-pointer py-1 ${
                activeSection === item.id
                  ? "text-emerald-accent active"
                  : "text-txt-mid hover:text-emerald-accent"
              }`}
            >
              {item.label}
            </button>
          ))}
          
          <button
            onClick={onOpenResume}
            className="border border-emerald-accent text-emerald-accent hover:bg-emerald-accent hover:text-white dark:hover:text-bg-page text-xs font-semibold px-4 py-2 rounded transition-all duration-300 font-display uppercase tracking-wider cursor-pointer shadow-sm active:scale-95"
          >
            Resume
          </button>

          <div className="pl-2 border-l border-border-custom h-5 flex items-center">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile controls bar */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-txt-mid hover:text-emerald-accent transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay & Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark screen tint backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 top-[72px] bg-black/60 backdrop-blur-sm z-30 md:hidden"
            />

            {/* Menu drawer sliding in */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed left-0 right-0 top-[72px] bg-bg-page/95 backdrop-blur-md shadow-lg border-b border-border-custom z-40 md:hidden p-6"
            >
              <nav className="flex flex-col gap-5 text-center">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-base font-semibold py-2 rounded transition-colors cursor-pointer ${
                      activeSection === item.id
                        ? "text-emerald-accent bg-emerald-glow"
                        : "text-txt-high hover:text-emerald-accent"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenResume();
                  }}
                  className="bg-emerald-accent text-white dark:text-bg-page font-semibold py-3 rounded-lg text-sm font-display uppercase tracking-wider mt-2 cursor-pointer shadow active:scale-95 transition-transform"
                >
                  View Full Resume
                </button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
