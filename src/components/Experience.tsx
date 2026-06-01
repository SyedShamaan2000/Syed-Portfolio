import ScrollReveal from "./ScrollReveal";
import { portfolioData } from "../data";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="bg-surf-lowest dark:bg-surf-low/40 py-16 lg:py-24 border-t border-border-custom/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column Header indicator */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:h-fit">
            <ScrollReveal direction="left">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-semibold text-emerald-accent">02 /</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-txt-high">
                  Experience
                </h2>
              </div>
              <p className="text-sm font-sans text-txt-low mt-4 hidden lg:block leading-relaxed">
                Refining development cycles, validating backend architectures, and accelerating frontend operations.
              </p>
            </ScrollReveal>
          </div>

          {/* Right Column Job Stack */}
          <div className="lg:col-span-8 space-y-12">
            {portfolioData.experience.map((job, index) => (
              <ScrollReveal key={job.company + job.role} direction="up" delay={index * 0.15}>
                <div className="group relative pl-4 md:pl-6 border-l-2 border-border-custom hover:border-emerald-accent transition-all duration-300">
                  
                  {/* Absolute Timeline Dot indicator */}
                  <div className="absolute top-1.5 -left-1.5 w-3.5 h-3.5 rounded-full border-2 border-border-custom group-hover:border-emerald-accent bg-bg-page transition-colors duration-300" />

                  {/* Header metadata layout */}
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                    <div>
                      <h3 className="font-display text-xl font-bold text-txt-high group-hover:text-emerald-accent transition-colors duration-300">
                        {job.role}
                      </h3>
                      <p className="text-sm font-mono font-semibold text-txt-mid mt-0.5">
                        {job.company}
                      </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-x-3 gap-y-1 text-xs text-txt-low">
                      <span className="inline-flex items-center gap-1 bg-surf-low px-2 py-1 rounded border border-border-custom/30 text-emerald-accent font-mono">
                        <Calendar className="h-3 w-3" />
                        {job.period}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullet listings */}
                  <ul className="list-none space-y-3.5 mb-6 text-txt-mid text-sm sm:text-base">
                    {job.points.map((pt, i) => (
                      <li key={i} className="flex gap-2 text-justify">
                        <span className="text-emerald-accent font-mono leading-relaxed select-none">▪</span>
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies tags for the specific experience role */}
                  {job.skills && (
                    <div className="flex flex-wrap gap-2 pt-1 border-t border-border-custom/30">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-surf-lowest dark:bg-surf-low hover:bg-emerald-glow text-[11px] font-mono text-emerald-accent py-0.5 px-3 rounded border border-border-custom/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
