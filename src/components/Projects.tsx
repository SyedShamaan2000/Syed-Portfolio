import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { portfolioData } from "../data";
import { ProjectEntry } from "../types";
import { Github, ExternalLink, ArrowUpRight, FolderOpen, AlertCircle, Sparkles, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectEntry | null>(null);

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 md:px-12 py-16 lg:py-24 border-t border-border-custom/50">
      
      {/* Header Block */}
      <div className="flex justify-between items-end mb-12">
        <ScrollReveal direction="left">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-semibold text-emerald-accent">03 /</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-txt-high">
              Selected Projects
            </h2>
          </div>
        </ScrollReveal>
        
        <ScrollReveal direction="right">
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-accent hover:text-emerald-hover hover:underline transition-all group"
          >
            <span>VIEW ALL GITHUB REPOS</span>
            <ArrowUpRight className="h-4.5 w-4.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </ScrollReveal>
      </div>

      {/* Grid Canvas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.projects.map((proj, idx) => (
          <ScrollReveal key={proj.title} direction="up" delay={idx * 0.1}>
            <div
              onClick={() => setSelectedProject(proj)}
              className="group bg-surf-lowest dark:bg-surf-low rounded-xl border border-border-custom hover:border-emerald-accent hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full cursor-pointer relative"
            >
              {/* Card Image Banner */}
              <div className="h-48 overflow-hidden relative bg-surf-high/25 flex items-center justify-center">
                <img
                  src={proj.image}
                  alt={proj.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute top-4 right-4 bg-bg-page/80 backdrop-blur px-2.5 py-1 rounded-full text-[10px] font-mono font-bold text-emerald-accent border border-emerald-accent/20">
                  {proj.year}
                </div>
              </div>

              {/* Card Content body */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display text-xl font-bold text-txt-high group-hover:text-emerald-accent transition-colors duration-300 flex items-center justify-between">
                  {proj.title}
                  <FolderOpen className="h-4.5 w-4.5 text-txt-low group-hover:text-emerald-accent transition-colors duration-300" />
                </h3>
                
                <p className="text-sm text-txt-mid mt-3.5 mb-6 text-justify leading-relaxed flex-grow line-clamp-3">
                  {proj.description}
                </p>

                {/* Tags lists */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-surf-low dark:bg-surf-mid text-[10px] font-mono font-medium text-emerald-accent py-1 px-2 rounded opacity-90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Immersive Deep-Dive Details Overlay Dialog */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative bg-surf-lowest dark:bg-surf-low max-w-2xl w-full rounded-2xl shadow-2xl border border-border-custom overflow-hidden flex flex-col max-h-[85vh]"
            >
              {/* Header Box Banner */}
              <div className="bg-surf-low dark:bg-surf-lowest px-6 py-4 flex justify-between items-center border-b border-border-custom">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 px-2 bg-emerald-glow text-emerald-accent font-mono text-xs font-bold rounded">
                    {selectedProject.year}
                  </span>
                  <h4 className="font-display text-lg font-bold text-txt-high">
                    {selectedProject.title} Details
                  </h4>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1 rounded-full text-txt-mid hover:text-txt-high hover:bg-surf-high/20 transition-colors cursor-pointer text-sm font-semibold uppercase"
                >
                  Close
                </button>
              </div>

              {/* Scrollable specs sheet */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 custom-scrollbar text-justify text-sm">
                
                {/* Hero preview on detail panel */}
                <div className="w-full h-44 rounded-xl overflow-hidden shadow-inner border border-neutral-200/10 mb-4 bg-surf-low flex items-center justify-center">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h5 className="font-display text-sm font-bold text-txt-high mb-2 tracking-wide uppercase">
                    Description
                  </h5>
                  <p className="text-txt-mid leading-relaxed font-sans">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Challenge Details */}
                {selectedProject.fullDetails && (
                  <>
                    <div className="border-t border-border-custom/40 pt-4">
                      <h5 className="font-display text-sm font-bold text-txt-high mb-2 tracking-wide uppercase flex items-center gap-1.5 text-red-500">
                        <AlertCircle className="h-4 w-4 shrink-0" />
                        The Technical Challenge
                      </h5>
                      <p className="text-txt-mid leading-relaxed">
                        {selectedProject.fullDetails.challenge}
                      </p>
                    </div>

                    <div className="border-t border-border-custom/40 pt-4">
                      <h5 className="font-display text-sm font-bold text-txt-high mb-2 tracking-wide uppercase flex items-center gap-1.5">
                        <Sparkles className="h-4 w-4 shrink-0 text-emerald-accent" />
                        Our Solutions Provided
                      </h5>
                      <ul className="list-none space-y-2 text-txt-mid">
                        {selectedProject.fullDetails.solutions.map((sol, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-emerald-accent">✓</span>
                            <span>{sol}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-border-custom/40 pt-4">
                      <h5 className="font-display text-sm font-bold text-txt-high mb-2 tracking-wide uppercase flex items-center gap-1.5 text-emerald-accent">
                        <CheckCircle className="h-4 w-4 shrink-0" />
                        Impact & Performance Outcomes
                      </h5>
                      <ul className="list-none space-y-2 text-txt-mid">
                        {selectedProject.fullDetails.outcomes.map((out, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-emerald-accent">✓</span>
                            <span>{out}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}

                <div className="border-t border-border-custom/40 pt-4 flex flex-wrap justify-between items-center gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-surf-low text-xs font-mono text-emerald-accent py-0.5 px-2.5 rounded border border-border-custom/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold bg-surf-low text-txt-high hover:text-emerald-accent border border-border-custom hover:border-emerald-accent p-2 px-3 rounded-lg transition-all"
                      >
                        <Github className="h-4 w-4" />
                        Code Repo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
