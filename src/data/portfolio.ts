export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  featured: boolean;
  category: 'ai' | 'web' | 'data' | 'other';
}

export const projects: Project[] = [
  {
    id: 'blood-test-analyzer',
    name: 'Blood Test Analyzer',
    description: 'AI-powered blood test analysis system using CrewAI and FastAPI. Provides intelligent insights and recommendations based on blood test results.',
    technologies: ['Python', 'CrewAI', 'FastAPI', 'AI'],
    github: 'https://github.com/Sarangev/blood-test-analyzer',
    featured: true,
    category: 'ai',
  },
  {
    id: 'opportunityminer',
    name: 'Opportunity Miner',
    description: 'An intelligent tool for mining and discovering opportunities using data analysis and automation techniques.',
    technologies: ['Python', 'Data Mining', 'Automation'],
    github: 'https://github.com/Sarangev/opportunityminer',
    featured: true,
    category: 'ai',
  },
  {
    id: 'luna',
    name: 'Luna',
    description: 'A TypeScript-based project showcasing modern web development practices and clean architecture.',
    technologies: ['TypeScript', 'React', 'Modern Web'],
    github: 'https://github.com/Sarangev/luna',
    featured: true,
    category: 'web',
  },
  {
    id: 'train-search-crew',
    name: 'Train Search Crew',
    description: 'A Python-based train search system leveraging AI agents for intelligent travel planning and booking assistance.',
    technologies: ['Python', 'AI Agents', 'Search'],
    github: 'https://github.com/Sarangev/train-search-crew',
    featured: true,
    category: 'ai',
  },
  {
    id: 'customer',
    name: 'Customer Management',
    description: 'A comprehensive customer management system built with Python for handling customer data and interactions.',
    technologies: ['Python', 'Database', 'Backend'],
    github: 'https://github.com/Sarangev/Customer',
    featured: false,
    category: 'data',
  },
  {
    id: 'kerala-tourism',
    name: 'Kerala Tourism',
    description: 'A beautiful tourism website showcasing the incredible destinations and experiences of Kerala, India.',
    technologies: ['HTML', 'CSS', 'Web Design'],
    github: 'https://github.com/Sarangev/kerala_toruism',
    featured: false,
    category: 'web',
  },
  {
    id: 'travel',
    name: 'Travel Website',
    description: 'A responsive travel website with modern CSS styling and engaging user interface.',
    technologies: ['CSS', 'HTML', 'Responsive Design'],
    github: 'https://github.com/Sarangev/Travel',
    featured: false,
    category: 'web',
  },
  {
    id: 'pricecomp',
    name: 'Price Comparison',
    description: 'A price comparison tool for finding the best deals across multiple platforms.',
    technologies: ['Web Scraping', 'Automation'],
    github: 'https://github.com/Sarangev/Pricecomp',
    featured: false,
    category: 'data',
  },
];

export const skills = {
  languages: ['Python', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  frameworks: ['FastAPI', 'React', 'CrewAI'],
  tools: ['Git', 'VS Code', 'Docker'],
  domains: ['AI/ML', 'Web Development', 'Data Analysis', 'Automation'],
};

export const profile = {
  name: 'E V SARANG',
  username: 'Sarangev',
  location: 'Kannur, Kerala, India',
  avatar: 'https://avatars.githubusercontent.com/u/105229410?v=4',
  github: 'https://github.com/Sarangev',
  linkedin: 'https://www.linkedin.com/in/e-v-sarang-51282a247',
  tagline: 'Building intelligent solutions with AI & modern web technologies',
  bio: 'A passionate developer from Kerala, India, focused on creating innovative AI-powered applications and modern web experiences. Specializing in Python, TypeScript, and AI agent frameworks like CrewAI.',
};
