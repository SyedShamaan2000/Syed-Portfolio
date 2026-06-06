import { X, Download, Mail, Phone, Linkedin, Award } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {

  const downloadPDFResume = () => {
    // Triggers a direct download of the PDF file hosted in your public folder
    const link = document.createElement("a");
    link.href = `${import.meta.env.BASE_URL}resume.pdf`;
    link.setAttribute("download", "Peerzada_Syed_Shamaan_Hussaini_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          {/* Backdrop Blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            id="modal-overlay"
          />

          {/* Modal content container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative bg-surf-lowest dark:bg-surf-low w-full max-w-4xl h-[90vh] rounded-xl shadow-2xl border border-border-custom overflow-hidden flex flex-col"
            id="resume-modal"
          >
            {/* Top Bar */}
            <div className="bg-surf-low dark:bg-surf-lowest border-b border-border-custom px-6 py-4 flex flex-wrap justify-between items-center gap-3">
              <div className="flex items-center gap-2.5">
                <div className="p-1 px-2.5 bg-red-500/10 text-red-500 font-mono text-xs font-bold rounded">
                  PDF
                </div>
                <span className="font-mono text-sm font-semibold text-txt-high">
                  Syed_Shamaan_Resume_2026.pdf
                </span>
                <span className="text-xs text-txt-low hidden sm:inline">- A4 Printable Layout</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={downloadPDFResume}
                  className="bg-emerald-accent hover:bg-emerald-hover text-white dark:text-bg-page px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-sm active:scale-95"
                  title="Download PDF Document"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download PDF</span>
                </button>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-full hover:bg-surf-high/20 text-txt-mid hover:text-txt-high transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* A4 Document sheet simulation viewport */}
            <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-zinc-800/85 dark:bg-slate-900/40 custom-scrollbar flex flex-col items-center">
              {/* Paper Sheet canvas container */}
              <div className="bg-white text-zinc-900 w-full max-w-[210mm] min-h-[297mm] mb-8 p-6 sm:p-12 shadow-2xl rounded border border-neutral-200 select-text relative font-sans text-xs sm:text-sm leading-relaxed shrink-0">

                {/* Header Profile Section */}
                <div className="text-center pb-6 border-b border-zinc-200">
                  <h1 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-wider text-black">
                    Peerzada Syed Shamaan Hussaini
                  </h1>
                  <p className="text-emerald-700 font-medium tracking-wide mt-1 text-sm">
                    Full Stack Developer • Hyderabad, Telangana
                  </p>

                  {/* Digital labels stack */}
                  <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1.5 mt-3 text-[11px] text-zinc-600">
                    <span className="flex items-center gap-1">
                      <Mail className="h-3.5 w-3.5 text-zinc-400" />
                      syedshamaan14@gmail.com
                    </span>
                    <span className="flex items-center gap-1">
                      <Phone className="h-3.5 w-3.5 text-zinc-400" />
                      +91 9100337152
                    </span>
                    <a
                      href="https://www.linkedin.com/in/syed-shamaan-hussaini"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:text-emerald-700 transition-colors"
                    >
                      <Linkedin className="h-3.5 w-3.5 text-zinc-400" />
                      linkedin.com/in/syed-shamaan-hussaini
                    </a>
                  </div>
                </div>

                {/* Brief Summary */}
                <div className="py-4">
                  <p className="text-zinc-700 text-justify leading-relaxed">
                    Full Stack Developer with expertise in the MERN stack, API design, and secure, scalable web applications. Experienced in Stripe payment integration, PostgreSQL database management, Docker containerization, and implementing web security best practices. Familiar with LLM integration for intelligent features and performance optimization. Adept at collaborating in agile teams to deliver reliable, production-ready software.
                  </p>
                </div>

                {/* Skills Section */}
                <div className="py-2">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-800 border-b border-zinc-300 pb-1 mb-2.5 flex items-center gap-1.5">
                    Skills Summary
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-zinc-700 text-[11px] sm:text-xs">
                    <div>
                      <strong className="text-zinc-900 block">Languages:</strong> JavaScript, Python, C, C++
                    </div>
                    <div>
                      <strong className="text-zinc-900 block">Frameworks & Libraries:</strong> React, Redux, Tailwind CSS, Material UI, FastAPI, Streamlit
                    </div>
                    <div>
                      <strong className="text-zinc-900 block">Backend & Systems:</strong> Node.js, Express.js, API Gateway, RESTful API Development, Server-Side Logic, Data Security
                    </div>
                    <div>
                      <strong className="text-zinc-900 block">Databases & DevOps:</strong> MongoDB, PostgreSQL, Firebase, Docker, GitHub Actions, Git/GitHub, CI/CD, Netlify
                    </div>
                    <div className="sm:col-span-2">
                      <strong className="text-zinc-900">API Integration:</strong> Expertise in integrating AI-driven APIs (OpenAI, Gemini), Stripe checkout models, Payment triggers
                    </div>
                  </div>
                </div>

                {/* Work History Section */}
                <div className="py-4">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-800 border-b border-zinc-300 pb-1 mb-3 flex items-center gap-1.5">
                    Work History
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-start font-semibold text-zinc-900">
                        <div>
                          <span className="text-black text-sm">Full Stack Developer</span>
                          <span className="mx-1.5 text-zinc-400 font-normal">|</span>
                          <span className="text-zinc-700 font-medium">Sakesh InfoTech Pvt Ltd</span>
                        </div>
                        <span className="text-emerald-700 font-mono text-[11px] whitespace-nowrap">Dec 2024 - Present</span>
                      </div>
                      <p className="text-[10px] text-zinc-500 italic mb-1.5">Hyderabad, India | Texas, USA</p>
                      <ul className="list-disc list-outside pl-4 space-y-1 text-zinc-700 text-[11px] sm:text-xs">
                        <li>Built and optimized React UI components for 5+ features, improving performance and usability and reducing unnecessary re-renders by ~25%.</li>
                        <li>Created scalable FastAPI backend services with structured validation and error handling, delivering 10+ APIs supporting real-time client consumption.</li>
                        <li>Managed application databases across development and production environments, handling thousands of records while ensuring data integrity, backups, and optimized queries.</li>
                        <li>Integrated LLM workflows to summarize multi-page DOCX documents and dynamically generate PPTX presentations.</li>
                        <li>Configured and integrated Stripe price IDs into frontend and backend services, enabling 1 new pricing tier within the existing payment system.</li>
                        <li>Used Dockerized workflows to support deployments and maintenance.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between items-start font-semibold text-zinc-900">
                        <div>
                          <span className="text-black text-sm">Remote Software Developer Intern</span>
                          <span className="mx-1.5 text-zinc-400 font-normal">|</span>
                          <span className="text-zinc-700 font-medium">CodeClause</span>
                        </div>
                        <span className="text-emerald-700 font-mono text-[11px] whitespace-nowrap">Jan 2024 - Feb 2024</span>
                      </div>
                      <p className="text-[10px] text-zinc-500 italic mb-1.5">Pune, India</p>
                      <ul className="list-disc list-outside pl-4 space-y-1 text-zinc-700 text-[11px] sm:text-xs">
                        <li>Engineered a language translation tool with OpenAI API, enhancing user satisfaction and translation accuracy.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Projects Highlights */}
                <div className="py-2 mt-2">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-800 border-b border-zinc-300 pb-1 mb-2.5 flex items-center gap-1.5">
                    Core Projects
                  </h2>
                  <div className="space-y-2.5 text-zinc-700 text-[11px] sm:text-xs">
                    <p>
                      <strong className="text-zinc-900">BudgetBuddy (Finance Tracking and Budgeting Web App):</strong> Developed a comprehensive budgeting tool using the MERN stack with Gemini API integration for personalized financial advice.
                    </p>
                    <p>
                      <strong className="text-zinc-900">AI-ChatLingo (Language Learning Web App):</strong> Architected user authentication and AI-powered chatbot interactions, utilizing the MERN stack and Gemini API. Delivered responsive UI and optimized performance across devices.
                    </p>
                    <p>
                      <strong className="text-zinc-900">TaskTrackr (Task Manager Web App):</strong> Built a task management tool featuring user authentication, task editing, and deletion, prioritizing security and usability.
                    </p>
                  </div>
                </div>

                {/* Education Section */}
                <div className="py-4">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-800 border-b border-zinc-300 pb-1 mb-3 flex items-center gap-1.5">
                    Education History
                  </h2>
                  <div className="space-y-3">
                    <div className="flex justify-between items-start sm:items-center text-zinc-800 font-semibold gap-2">
                      <div>
                        <span className="text-zinc-900 font-bold block sm:inline">Bachelor of Engineering (Computer Science)</span>
                        <span className="text-zinc-600 font-normal block sm:inline sm:before:content-['_|_']">Deccan College of Engineering Tech</span>
                      </div>
                      <span className="text-zinc-500 font-mono text-[10px]">2020 - 2024</span>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-zinc-500 mt-[-6px]">Osmania University, Hyderabad • CGPA: 7.43</p>

                    <div className="flex justify-between items-start sm:items-center text-zinc-800 font-semibold gap-2 mt-2">
                      <div>
                        <span className="text-zinc-900 font-bold block sm:inline">Intermediate Schooling (MPC)</span>
                        <span className="text-zinc-600 font-normal block sm:inline sm:before:content-['_|_']">MS Junior College</span>
                      </div>
                      <span className="text-zinc-500 font-mono text-[10px]">2018 - 2020</span>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-zinc-500 mt-[-6px]">Hyderabad, India • CGPA: 9.53</p>
                  </div>
                </div>

                {/* Achievements Section */}
                <div className="py-2">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-800 border-b border-zinc-300 pb-1 mb-2.5 flex items-center gap-1.5">
                    Accolades
                  </h2>
                  <div className="flex items-center gap-2 text-zinc-700">
                    <Award className="h-4 w-4 text-emerald-700 shrink-0" />
                    <span>Secured 1st Winner Place at a Hackathon conducted by MetLife Company.</span>
                  </div>
                </div>

                {/* Footer Signature watermark */}
                <div className="text-center text-[10px] text-zinc-400 mt-8 pt-4 border-t border-zinc-100">
                  Document electronically verified • Peerzada Syed Shamaan Hussaini
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}