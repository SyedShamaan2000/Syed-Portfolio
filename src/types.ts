export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
  skills?: string[];
}

export interface ProjectEntry {
  title: string;
  year: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  fullDetails?: {
    challenge: string;
    solutions: string[];
    outcomes: string[];
  };
}

export interface EducationEntry {
  degree: string;
  period: string;
  institution: string;
  location: string;
  cgpa: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  subtitle: string;
  bio: string[];
  avatarUrl: string;
  resumeUrl: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
  };
  skills: SkillCategory[];
  experience: ExperienceEntry[];
  projects: ProjectEntry[];
  education: EducationEntry[];
}
