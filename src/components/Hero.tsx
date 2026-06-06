import { Eye, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { portfolioData } from "../data";

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const handleScrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="min-h-[85vh] flex items-center max-w-7xl mx-auto px-6 md:px-12 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left Intro Text Column */}
        <div className="lg:col-span-7">
          <ScrollReveal direction="up" delay={0.2}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-txt-high leading-tight">
              Peerzada Syed <br />
              <span className="text-emerald-accent bg-clip-text">
                Shamaan Hussaini
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <p className="font-sans text-lg md:text-xl text-txt-mid mt-6 max-w-2xl leading-relaxed">
              Full Stack Developer | MERN | API Design. Crafting scalable architectures and seamless user experiences with precision engineering.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.4}>
            <div className="flex flex-wrap gap-4 mt-10">
              <button
                onClick={onOpenResume}
                className="bg-emerald-accent hover:bg-emerald-hover text-white dark:text-bg-page font-semibold px-8 py-4 rounded font-display uppercase tracking-wider text-sm transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-95 cursor-pointer flex items-center gap-2"
              >
                <Eye className="h-4 w-4" />
                View My Resume
              </button>

              <button
                onClick={handleScrollToProjects}
                className="border border-border-custom hover:border-emerald-accent text-txt-high hover:text-emerald-accent hover:bg-emerald-glow/10 font-semibold px-8 py-4 rounded font-display uppercase tracking-wider text-sm transition-all duration-300 active:scale-95 cursor-pointer flex items-center gap-1"
              >
                View Projects
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Avatar Column */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <ScrollReveal direction="up" delay={0.3}>
            <div className="relative group w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Animated surrounding borders and neon glow circles */}
              <div className="absolute inset-0 bg-emerald-accent/10 rounded-3xl blur-2xl group-hover:bg-emerald-accent/20 transition-all duration-500 scale-95" />
              <div className="absolute -inset-1 border border-emerald-accent/20 group-hover:border-emerald-accent/50 rounded-3xl transition-all duration-500 scale-102" />

              {/* Avatar Image Frame */}
              <div className="w-full h-full bg-surf-low border border-border-custom rounded-2xl overflow-hidden shadow-xl aspect-square relative z-10 transition-transform duration-500 group-hover:scale-101">
                <img
                  src={portfolioData.avatarUrl}
                  alt={portfolioData.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale brightness-95 contrast-101 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
