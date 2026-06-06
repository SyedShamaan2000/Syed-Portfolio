import { PortfolioData } from "./types";

export const portfolioData: PortfolioData = {
  name: "Peerzada Syed Shamaan Hussaini",
  title: "Full Stack Developer",
  subtitle: "MERN Stack • API Design • Intelligent Software",
  bio: [
    "I am a Full Stack Developer specializing in the MERN stack, bridging the gap between complex backend systems and intuitive user interfaces. My approach is rooted in technical precision, clean code, and high-performance engineering.",
    "Driven by modern development tools and minimalist aesthetics, I design and optimize scalable systems. Based in Hyderabad, I have engineered custom features that reduced re-renders, deployed Docker-based pipelines, integrated secure payment gateways, and built AI-augmented platforms."
  ],
  avatarUrl: `${import.meta.env.BASE_URL}photo.jpg`,
  resumeUrl: "#", // will trigger modal
  contact: {
    email: "syedshamaan14@gmail.com",
    phone: "+91 9100337152",
    location: "Hyderabad, Telangana",
    github: "https://github.com/SyedShamaan2000",
    linkedin: "https://www.linkedin.com/in/syed-shamaan-hussaini",
  },
  skills: [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "C", "C++"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Redux Toolkit", "Tailwind CSS", "FastAPI", "Streamlit", "Material UI", "Express"]
    },
    {
      title: "Backend & Systems",
      skills: ["Node.js", "Express.js", "API Gateway", "REST APIs", "Data Security", "Server-Side Logic"]
    },
    {
      title: "Databases & DevOps",
      skills: ["MongoDB", "PostgreSQL", "Firebase", "Docker", "GitHub Actions", "CI/CD Pipelines", "Netlify"]
    },
    {
      title: "AI & Integrations",
      skills: ["Gemini API", "OpenAI API", "Stripe API", "LLM Workflows", "Vector Embeddings"]
    }
  ],
  experience: [
    {
      role: "Full Stack Developer",
      company: "Sakesh InfoTech Pvt Ltd",
      location: "Hyderabad, India | Texas, USA",
      period: "Dec 2024 - Present",
      points: [
        "Built and optimized React UI components for over 5 major features, reducing redundant rendering cycles by approximately 25%.",
        "Created high-throughput FastAPI backend microservices with fully validated payloads, supplying 10+ robust APIs supporting real-time traffic.",
        "Managed relational and non-relational database architectures across live and sandbox servers, ensuring structured queries, indices, and secure weekly backups.",
        "Integrated advanced machine learning pipelines to extract, summarize, and synthesize multi-page DOCX files, auto-rendering them into responsive slideshow presentation previews.",
        "Engineered full Stripe API payment triggers, linking products and price codes seamlessly on frontend client views and backend verification routes."
      ],
      skills: ["React", "Node.js", "FastAPI", "MongoDB", "Stripe", "Docker"]
    },
    {
      role: "Remote Software Developer Intern",
      company: "CodeClause",
      location: "Pune, India",
      period: "Jan 2024 - Feb 2024",
      points: [
        "Engineered an automated language translator leveraging the GPT engines to preserve visual layout states while translating multilingual documents.",
        "Created accessible style sheets and responsive page sections with clean, predictable breakpoints."
      ],
      skills: ["React", "CSS Variables", "OpenAI API", "UI Optimization"]
    }
  ],
  projects: [
    {
      title: "BudgetBuddy",
      year: "2024",
      description: "AI-powered financial tracking and budgeting web application utilizing the Gemini API for smart, personalized spending breakdowns, and the MERN stack for robust multi-user transactional records.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADdr6SofZ9zZsLZkMG654XTKpcYYTV2hU2IvSpI5SSQbl9eNNmOnCFzk9MumqrmyHgUkTG9vioOUKGxVDe2tIyPRB4pUaR8LGOHPf-u4Y47dYMakxBwOee96RItr4RgBtMNO2EVwyLKiOXzAyStHYGdZZ0dpW9yxQ1yu2n2ez1nr7jBY7MzrStlLsZcpnoX8eq4Ng6SkwwrbwQd9nAbMeGoe4lkmFnr5JZDL2jM7fxTZRVD3-wgzgYk2KR3N3HUsDFOHQnONMleszE",
      tags: ["MERN Stack", "Gemini API", "Recharts", "Tailwind CSS"],
      githubUrl: "https://github.com/Shamaan3066/budget-buddy",
      demoUrl: "#",
      fullDetails: {
        challenge: "Managing irregular expenditures can be daunting. Users need simple logs aligned with smart analysis that categorizes spending logs dynamically.",
        solutions: [
          "Crafted customized prompt engines for the Gemini Pro model to generate structural JSON budget reviews.",
          "Engineered interactive dashboards with Recharts displaying real-time responsive analytics."
        ],
        outcomes: [
          "Enabled immediate budget categorization in sub-second times with Zero-Shot analysis.",
          "Maintained fully secured client routes utilizing JWT tokenization workflows."
        ]
      }
    },
    {
      title: "AI-ChatLingo",
      year: "2024",
      description: "Intelligent language acquisition and immersive interactive conversational practice tool powered by Gemini API, complete with contextual word corrections and conversational prompts.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuApHrJHDi5TN7TlmINofvHcctMU1Y_46zOmOZK-PZNxIuw3kvnYFN25-jDJopxTrQYK4-on4IVAMaJD558kIKuxfPa0TtF8Io1q9LAQ70wH-jTOvkxtTS7cHRX7hWVd6u_6BzSs88HD4xbFbLhYiMjjRHJliY1TGGHKtXcSYenSXtPq9LXAVBVjkHiwoQe1lCf0Gd1B6_t0NXH8a-DfHuC8-vJElrNgQi2KMI8N9SqgiRC6oc9O31GMYNUBA2nl6cXKnlED0xYhZhKd",
      tags: ["React", "Express", "Python", "Gemini Pro"],
      githubUrl: "https://github.com/Shamaan3066/AI-ChatLingo",
      demoUrl: "#",
      fullDetails: {
        challenge: "Language pupils lack risk-free arenas to speak and test foreign speech structures with fluid corrections.",
        solutions: [
          "Developed an asynchronous chat server parsing and streaming conversations generated by LLM instances.",
          "Integrated real-time pronunciation checking indices and inline grammatic corrections."
        ],
        outcomes: [
          "Increased overall dialogue retention scores while reducing chat response latencies."
        ]
      }
    },
    {
      title: "TaskTrackr",
      year: "2023",
      description: "High-contrast minimalist project orchestrator featuring streamlined workflow controls, responsive status states, customized JWT authorizations, and reliable user access lists.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMUxRrSPV3F7__qethW5pF_Xf6-2EdZN9tvfmle-SnJ9A3Fe10T9soo-7gARmBolT60YJov77ggO64vHauBWpRDb1_EjBrh-0E-OdzNqJ-dnCMzJuUUOAxjWps1DzMltUuQRPd87aoR89TSVpavLnut2ImBUX_POWs9KVZ1zQiOdOx9xbSgpeawh5degt_zeAqoPJUxhLbIHB_DDNf7_laNdtau6MuRFmrmWEr822QEPp-8BYySLowd0l8RO4aR99jocjXwBWfKBCs",
      tags: ["React.js", "Node.js", "MongoDB", "Redux Toolkit"],
      githubUrl: "https://github.com/Shamaan3066/taskapp",
      demoUrl: "#",
      fullDetails: {
        challenge: "Traditional project managers are weighed down by heavy layout structures. Creative teams demand visual brevity and super responsive state flows.",
        solutions: [
          "Programmed an optimized front-end with zero third-party render bloat, utilizing purely custom CSS transitions.",
          "Employed JWT auth matrices to secure data at the resource-ID grain."
        ],
        outcomes: [
          "Reduced UI time-to-interactive down to instant clicks, bolstering positive reviews and work compliance."
        ]
      }
    }
  ],
  education: [
    {
      degree: "Bachelor of Engineering (Computer Science)",
      period: "2020 - 2024",
      institution: "Deccan College of Engineering and Technology (Osmania University)",
      location: "Hyderabad, India",
      cgpa: "7.43"
    },
    {
      degree: "Intermediate Schooling (MPC)",
      period: "2018 - 2020",
      institution: "MS Junior College",
      location: "Hyderabad, India",
      cgpa: "9.53"
    },
    {
      degree: "Secondary School (SSC)",
      period: "2018",
      institution: "MS Creative School",
      location: "Hyderabad, India",
      cgpa: "9.2"
    }
  ]
};
