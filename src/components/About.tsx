import ScrollReveal from "./ScrollReveal";
import { portfolioData } from "../data";
import { Cpu, Code2, Database, BrainCircuit, ExternalLink } from "lucide-react";

export default function About() {
  // Mapping categories to nice technical icons
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 className="h-5 w-5 text-emerald-accent" />;
      case 1:
        return <Cpu className="h-5 w-5 text-emerald-accent" />;
      case 2:
        return <Database className="h-5 w-5 text-emerald-accent" />;
      case 3:
        return <Cpu className="h-5 w-5 text-electric-blue" />;
      default:
        return <BrainCircuit className="h-5 w-5 text-emerald-accent" />;
    }
  };

  return (
    <section id="about" className="max-w-7xl mx-auto px-6 md:px-12 py-16 lg:py-24 border-t border-border-custom/50">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Indicator Column */}
        <div className="lg:col-span-4 lg:sticky lg:top-28 lg:h-fit">
          <ScrollReveal direction="left">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm font-semibold text-emerald-accent">01 /</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-txt-high">
                About Me
              </h2>
            </div>
            
            {/* Minimal decorator list of highlights */}
            <div className="mt-8 space-y-4 text-xs font-mono text-txt-low hidden lg:block">
              <div className="flex gap-2">
                <span className="text-emerald-accent">#</span>
                <span>BASED IN HYDERABAD</span>
              </div>
              <div className="flex gap-2">
                <span className="text-emerald-accent">#</span>
                <span>MERN SPECIALIST</span>
              </div>
              <div className="flex gap-2">
                <span className="text-emerald-accent">#</span>
                <span>API ARCHITECTURE</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Info Column */}
        <div className="lg:col-span-8 flex flex-col gap-10">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="space-y-6">
              {portfolioData.bio.map((para, i) => (
                <p key={i} className="text-base md:text-lg text-txt-mid leading-relaxed text-justify">
                  {para}
                </p>
              ))}
            </div>
          </ScrollReveal>

          {/* Interactive Skills Bento Elements */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="mt-4">
              <h3 className="font-display text-lg font-bold text-txt-high mb-6 flex items-center gap-2">
                <Cpu className="h-4 w-4 text-emerald-accent" />
                Technical Stack & Capabilities
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {portfolioData.skills.map((cat, i) => (
                  <div
                    key={cat.title}
                    className="p-5 rounded-lg bg-surf-lowest dark:bg-surf-low border border-border-custom hover:border-emerald-accent/50 transition-all duration-300 group hover:shadow-md"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      {getCategoryIcon(i)}
                      <h4 className="font-mono text-sm font-bold text-txt-high tracking-wider uppercase">
                        {cat.title}
                      </h4>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-surf-low dark:bg-surf-mid text-emerald-accent text-xs font-mono py-1 px-3.5 rounded-full transition-all duration-300 group-hover:bg-emerald-glow hover:scale-105 border border-border-custom/50 hover:border-emerald-accent/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
