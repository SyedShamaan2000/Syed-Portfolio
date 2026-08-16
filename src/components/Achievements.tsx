import { portfolioData } from "../data";
import ScrollReveal from "./ScrollReveal";

export default function Achievements() {
  if (!portfolioData.achievements || portfolioData.achievements.length === 0) {
    return null;
  }

  return (
    <section id="achievements" className="py-20 px-4 md:px-8 bg-bg-secondary transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-12 text-center text-txt-high">Achievements</h2>
        </ScrollReveal>

        <div className="space-y-4">
          {portfolioData.achievements.map((achievement, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="p-6 rounded-lg border border-border-primary hover:border-border-hover bg-bg-page transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center mt-1">
                    <span className="text-white font-bold text-sm">★</span>
                  </div>
                  <p className="text-txt-medium text-lg leading-relaxed">{achievement}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
