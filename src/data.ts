import { PortfolioData } from "./types";

export const portfolioData: PortfolioData = {
  name: "Peerzada Syed Shamaan Hussaini",
  title: "Full Stack Developer",
  subtitle: "MERN Stack • Cloud & Serverless (AWS) • AI/LLM Integration",
  bio: [
    "Full Stack Developer with expertise in the MERN stack, API design, and secure, scalable web applications. Experienced in Stripe payment integration, PostgreSQL database management, Docker containerization, serverless deployment on AWS (Lambda, API Gateway), and web security best practices.",
    "Skilled in building Retrieval-Augmented Generation (RAG) pipelines and integrating LLM APIs (OpenAI, Gemini) for intelligent features. Adept at collaborating in agile teams to deliver reliable, production-ready software. Based in Hyderabad, I design and optimize scalable systems using modern development tools and best practices."
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
      skills: ["JavaScript", "Python", "C", "C++"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Redux", "Tailwind CSS", "Material UI", "FastAPI", "Streamlit", "Express"]
    },
    {
      title: "Backend & Serverless",
      skills: ["Node.js", "Express.js", "AWS Lambda", "API Gateway", "Serverless Framework", "RESTful API Development", "Server-Side Logic", "Data Security"]
    },
    {
      title: "Databases & Vector Stores",
      skills: ["MongoDB", "PostgreSQL", "Firebase", "Neon (Serverless Postgres)", "Vector Databases"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "GitHub Actions", "CI/CD Pipelines", "Git/GitHub", "Netlify"]
    },
    {
      title: "AI/LLM & RAG",
      skills: ["OpenAI API", "Gemini API", "Retrieval-Augmented Generation (RAG)", "Document Ingestion Pipelines", "Prompt Engineering"]
    }
  ],
  experience: [
    {
      role: "Full Stack Developer",
      company: "Sakesh InfoTech Pvt Ltd",
      location: "Hyderabad, India / Texas, USA",
      period: "Dec 2024 - Present",
      points: [
        "Built and optimized React UI components for 5+ features, improving performance and usability and reducing unnecessary re-renders by ~25%.",
        "Created scalable FastAPI backend services with structured validation and error handling, delivering 10+ APIs supporting real-time client consumption.",
        "Managed application databases across development and production environments, handling thousands of records while ensuring data integrity, backups, and optimized queries.",
        "Integrated LLM workflows to summarize multi-page DOCX documents and dynamically generate PPTX presentations.",
        "Configured and integrated Stripe price IDs into frontend and backend services, enabling 1 new pricing tier within the existing payment system.",
        "Used Dockerized workflows to support deployments and maintenance."
      ],
      skills: ["React", "FastAPI", "PostgreSQL", "Stripe", "Docker", "LLM Integration"]
    },
    {
      role: "Remote Software Developer Intern",
      company: "CodeClause",
      location: "Pune, India",
      period: "Jan 2024 - Feb 2024",
      points: [
        "Engineered a language translation tool using the OpenAI API, enhancing user satisfaction and translation accuracy."
      ],
      skills: ["React", "OpenAI API", "Translation Tools"]
    }
  ],
  projects: [
    {
      title: "Serverless REST API on AWS",
      year: "2024",
      description: "Designed and deployed a serverless Express.js REST API on AWS Lambda using the Serverless Framework and API Gateway, eliminating server management overhead. Connected to a Neon serverless PostgreSQL database for scalable, low-maintenance data persistence.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADdr6SofZ9zZsLZkMG654XTKpcYYTV2hU2IvSpI5SSQbl9eNNmOnCFzk9MumqrmyHgUkTG9vioOUKGxVDe2tIyPRB4pUaR8LGOHPf-u4Y47dYMakxBwOee96RItr4RgBtMNO2EVwyLKiOXzAyStHYGdZZ0dpW9yxQ1yu2n2ez1nr7jBY7MzrStlLsZcpnoX8eq4Ng6SkwwrbwQd9nAbMeGoe4lkmFnr5JZDL2jM7fxTZRVD3-wgzgYk2KR3N3HUsDFOHQnONMleszE",
      tags: ["AWS Lambda", "Express.js", "Serverless Framework", "PostgreSQL", "API Gateway"],
      githubUrl: "https://github.com/SyedShamaan2000/serverless-nodejs-api-yt",
      demoUrl: "#",
      fullDetails: {
        challenge: "Traditional server-based APIs require constant infrastructure management, scaling overhead, and higher operational costs.",
        solutions: [
          "Designed serverless architecture using AWS Lambda and API Gateway for automatic scaling and pay-per-use pricing.",
          "Connected to Neon serverless PostgreSQL database for reliable, low-maintenance data persistence.",
          "Configured IAM roles, automated build/deploy workflows with GitHub Actions for continuous integration."
        ],
        outcomes: [
          "Eliminated server management overhead and reduced operational costs significantly.",
          "Enabled local emulation and rapid iteration using Serverless Offline plugin before cloud deployment."
        ]
      }
    },
    {
      title: "Simple RAG",
      year: "2024",
      description: "Retrieval-Augmented Generation (RAG) Pipeline built with Python and FastAPI. Features a Dockerized PostgreSQL vector store for semantic search, document ingestion pipeline, and query interface for grounded LLM responses.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuApHrJHDi5TN7TlmINofvHcctMU1Y_46zOmOZK-PZNxIuw3kvnYFN25-jDJopxTrQYK4-on4IVAMaJD558kIKuxfPa0TtF8Io1q9LAQ70wH-jTOvkxtTS7cHRX7hWVd6u_6BzSs88HD4xbFbLhYiMjjRHJliY1TGGHKtXcSYenSXtPq9LXAVBVjkHiwoQe1lCf0Gd1B6_t0NXH8a-DfHuC8-vJElrNgQi2KMI8N9SqgiRC6oc9O31GMYNUBA2nl6cXKnlED0xYhZhKd",
      tags: ["Python", "FastAPI", "Vector Databases", "Docker", "RAG"],
      githubUrl: "https://github.com/SyedShamaan2000/simple-rag",
      demoUrl: "#",
      fullDetails: {
        challenge: "LLMs can hallucinate information when not grounded in actual data. Organizations need accurate, contextual responses based on their documents.",
        solutions: [
          "Built a Retrieval-Augmented Generation (RAG) system with FastAPI backend and Pydantic schema validation.",
          "Developed document ingestion pipeline to chunk, embed, and index source documents for accurate context retrieval.",
          "Implemented query interface that retrieves relevant context and augments LLM prompts for grounded responses."
        ],
        outcomes: [
          "Enabled semantic search across document collections with high accuracy.",
          "Reduced LLM hallucinations by providing grounded context for all responses."
        ]
      }
    },
    {
      title: "Job Tracker",
      year: "2024",
      description: "Full-stack job-hunt tracking web app built with MERN stack to manage applications through the hiring pipeline. Features status tracking, priority settings, custom labels, and networking-contact records linked to companies.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMUxRrSPV3F7__qethW5pF_Xf6-2EdZN9tvfmle-SnJ9A3Fe10T9soo-7gARmBolT60YJov77ggO64vHauBWpRDb1_EjBrh-0E-OdzNqJ-dnCMzJuUUOAxjWps1DzMltUuQRPd87aoR89TSVpavLnut2ImBUX_POWs9KVZ1zQiOdOx9xbSgpeawh5degt_zeAqoPJUxhLbIHB_DDNf7_laNdtau6MuRFmrmWEr822QEPp-8BYySLowd0l8RO4aR99jocjXwBWfKBCs",
      tags: ["MERN Stack", "MongoDB", "React", "Node.js", "GitHub Actions"],
      githubUrl: "https://github.com/SyedShamaan2000/job-tracker",
      demoUrl: "#",
      fullDetails: {
        challenge: "Job seekers struggle to organize and track multiple applications across different companies and stages of the hiring process.",
        solutions: [
          "Built a full-stack tracking application with persistent filtering and search across all saved data.",
          "Implemented networking-contact records linked to companies for relationship management.",
          "Set up CI/CD with GitHub Actions for automated testing and deployment."
        ],
        outcomes: [
          "Enabled efficient job application pipeline management from Saved to Offer stage.",
          "Deployed live on Vercel with automated workflows for continuous deployment."
        ]
      }
    },
    {
      title: "BudgetBuddy",
      year: "2024",
      description: "AI-powered financial tracking and budgeting web application utilizing the Gemini API for smart, personalized spending breakdowns. Built with MERN stack for robust multi-user transactional records. Collaborated in a 3-person team.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADdr6SofZ9zZsLZkMG654XTKpcYYTV2hU2IvSpI5SSQbl9eNNmOnCFzk9MumqrmyHgUkTG9vioOUKGxVDe2tIyPRB4pUaR8LGOHPf-u4Y47dYMakxBwOee96RItr4RgBtMNO2EVwyLKiOXzAyStHYGdZZ0dpW9yxQ1yu2n2ez1nr7jBY7MzrStlLsZcpnoX8eq4Ng6SkwwrbwQd9nAbMeGoe4lkmFnr5JZDL2jM7fxTZRVD3-wgzgYk2KR3N3HUsDFOHQnONMleszE",
      tags: ["MERN Stack", "Gemini API", "Chart.js", "Tailwind CSS"],
      githubUrl: "https://github.com/Shamaan3066/budget-buddy",
      demoUrl: "#",
      fullDetails: {
        challenge: "Managing irregular expenditures can be daunting. Users need simple logs aligned with smart analysis that categorizes spending logs dynamically.",
        solutions: [
          "Crafted customized prompt engines for Gemini API to generate structural JSON budget reviews.",
          "Engineered interactive spending visualizations with Chart.js and animated UI backgrounds using React Particles."
        ],
        outcomes: [
          "Enabled immediate budget categorization with AI-powered personalized financial advice.",
          "Maintained fully secured client routes utilizing JWT tokenization workflows."
        ]
      }
    },
    {
      title: "AI-ChatLingo",
      year: "2024",
      description: "Intelligent language learning web app powered by Gemini API. Architected user authentication and AI-powered chatbot interactions using MERN stack with a responsive, optimized UI.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuApHrJHDi5TN7TlmINofvHcctMU1Y_46zOmOZK-PZNxIuw3kvnYFN25-jDJopxTrQYK4-on4IVAMaJD558kIKuxfPa0TtF8Io1q9LAQ70wH-jTOvkxtTS7cHRX7hWVd6u_6BzSs88HD4xbFbLhYiMjjRHJliY1TGGHKtXcSYenSXtPq9LXAVBVjkHiwoQe1lCf0Gd1B6_t0NXH8a-DfHuC8-vJElrNgQi2KMI8N9SqgiRC6oc9O31GMYNUBA2nl6cXKnlED0xYhZhKd",
      tags: ["MERN Stack", "Gemini API", "React", "Express"],
      githubUrl: "https://github.com/SyedShamaan2000/AI-ChatLingo",
      demoUrl: "#",
      fullDetails: {
        challenge: "Language learners lack risk-free environments to practice conversational skills with real-time feedback and corrections.",
        solutions: [
          "Architected user authentication system with secure JWT-based session management.",
          "Developed AI-powered chatbot interactions using Gemini API for contextual language practice."
        ],
        outcomes: [
          "Delivered a responsive UI optimized across all devices for seamless learning experience.",
          "Enabled immersive conversational practice with AI-powered corrections."
        ]
      }
    },
    {
      title: "TaskTrackr",
      year: "2023",
      description: "Task management tool built with MERN stack featuring user authentication, task editing, deletion, and secure access controls. Prioritizes security and usability with a minimalist, responsive design.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMUxRrSPV3F7__qethW5pF_Xf6-2EdZN9tvfmle-SnJ9A3Fe10T9soo-7gARmBolT60YJov77ggO64vHauBWpRDb1_EjBrh-0E-OdzNqJ-dnCMzJuUUOAxjWps1DzMltUuQRPd87aoR89TSVpavLnut2ImBUX_POWs9KVZ1zQiOdOx9xbSgpeawh5degt_zeAqoPJUxhLbIHB_DDNf7_laNdtau6MuRFmrmWEr822QEPp-8BYySLowd0l8RO4aR99jocjXwBWfKBCs",
      tags: ["MERN Stack", "React", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/SyedShamaan2000/taskapp",
      demoUrl: "#",
      fullDetails: {
        challenge: "Traditional task managers are weighed down by heavy interfaces. Teams need visual simplicity and responsive interactions for efficient task management.",
        solutions: [
          "Built an optimized front-end with custom CSS transitions and minimal dependencies.",
          "Implemented JWT authentication to secure data at the resource-ID level."
        ],
        outcomes: [
          "Delivered instant UI interactions and reduced time-to-interactive significantly.",
          "Provided secure, intuitive task management for improved team collaboration."
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
  ],
  achievements: [
    "Secured 1st Winner Place at a Hackathon conducted by MetLife Company"
  ]
};
