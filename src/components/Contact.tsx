import React, { useState, FormEvent } from "react";
import ScrollReveal from "./ScrollReveal";
import { portfolioData } from "../data";
import { Send, Mail, MapPin, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;

    setIsLoading(true);
    // Simulate real-world network latency
    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true);
      setEmail("");
      setMessage("");
      // Reset successful status alert soon after
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 md:px-12 py-16 lg:py-24 border-t border-border-custom/50 text-center">
      <div className="max-w-2xl mx-auto">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-accent tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 bg-emerald-accent rounded-full" />
            04 / Get In Touch
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-txt-high mb-6">
            Ready to build something impactful?
          </h2>
          
          <p className="text-base sm:text-lg text-txt-mid leading-relaxed mb-10">
            I'm currently looking for new opportunities to collaborate on innovative projects. Whether you have a question or just want to say hi, my inbox is always open.
          </p>
        </ScrollReveal>

        {/* Contact Links & Dynamic Action Panel */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start text-left mt-8">
          
          {/* Details Column */}
          <div className="md:col-span-5 space-y-6">
            <ScrollReveal direction="left" delay={0.15}>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-txt-high mb-4">
                Direct Contact
              </h3>
              
              <div className="space-y-4 font-mono text-xs sm:text-sm text-txt-mid">
                <a
                  href={`mailto:${portfolioData.contact.email}`}
                  className="flex items-center gap-3 p-3.5 rounded-lg bg-surf-lowest dark:bg-surf-low border border-border-custom hover:border-emerald-accent/50 hover:text-emerald-accent transition-all duration-300 group shadow-sm"
                >
                  <Mail className="h-4.5 w-4.5 text-emerald-accent" />
                  <span>{portfolioData.contact.email}</span>
                </a>
                
                <div className="flex items-center gap-3 p-3.5 rounded-lg bg-surf-lowest dark:bg-surf-low border border-border-custom shadow-sm text-txt-low">
                  <MapPin className="h-4.5 w-4.5 text-emerald-accent/70" />
                  <span>{portfolioData.contact.location}</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Form Message Column */}
          <div className="md:col-span-7">
            <ScrollReveal direction="right" delay={0.2}>
              <form
                onSubmit={handleSubmit}
                className="bg-surf-lowest dark:bg-surf-low p-6 rounded-xl border border-border-custom text-left shadow-md flex flex-col gap-4"
              >
                <div>
                  <label htmlFor="user-email" className="block text-xs font-mono font-bold tracking-wider text-txt-low uppercase mb-1.5">
                    Your Email
                  </label>
                  <input
                    id="user-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="name@example.com"
                    className="w-full bg-bg-page dark:bg-surf-mid text-txt-high text-sm p-3 rounded border border-border-custom focus:outline-none focus:border-emerald-accent font-sans transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="user-message" className="block text-xs font-mono font-bold tracking-wider text-txt-low uppercase mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    id="user-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    placeholder="Tell me about your amazing project ideas..."
                    className="w-full bg-bg-page dark:bg-surf-mid text-txt-high text-sm p-3 rounded border border-border-custom focus:outline-none focus:border-emerald-accent font-sans resize-none transition-colors"
                  />
                </div>

                <div className="pt-2 flex justify-between items-center">
                  <a
                    href={`mailto:${portfolioData.contact.email}`}
                    className="text-xs font-mono font-semibold text-emerald-accent hover:underline"
                  >
                    Use my email client instead
                  </a>
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-emerald-accent hover:bg-emerald-hover text-white dark:text-bg-page font-bold px-5 py-2.5 rounded text-xs tracking-wider uppercase font-display cursor-pointer flex items-center gap-2 transition-all duration-300 disabled:opacity-50 select-none active:scale-95 shadow-sm"
                  >
                    {isLoading ? (
                      <span className="h-3.5 w-3.5 border-2 border-white dark:border-bg-page border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Send className="h-3.5 w-3.5" />
                    )}
                    <span>{isLoading ? "Sending..." : "Reach Out"}</span>
                  </button>
                </div>

                <AnimatePresence>
                  {isSent && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="mt-3 flex items-center gap-2 text-xs font-mono text-emerald-accent bg-emerald-glow p-3 rounded border border-emerald-accent/20"
                    >
                      <CheckCircle className="h-4.5 w-4.5" />
                      <span>Thank you, Shamaan will get back to you shortly!</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
