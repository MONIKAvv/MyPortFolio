export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

export interface NavItem {
  name: string;
  href: string;
}

export interface InfoItem {
  label: string;
  value: string;
  iconName: string;
}

export interface SkillItem {
  id: string;
  name: string;
  description: string;
  category: 'core' | 'tools' | 'soft';
  iconType: string;
  accentColor?: string;
}

export interface WhatIDoItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  shortDescription: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  highlights?: string[];
  featured?: boolean;
  isPrivate?: boolean;
  privateMessage?: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  companyOrContext: string;
  description: string;
  badge?: string;
  isCurrent?: boolean;
}

export interface ContactInfoItem {
  label: string;
  value: string;
  subtext: string;
  href: string;
  iconName: string;
  type: 'email' | 'linkedin' | 'github' | 'location';
}

export interface PortfolioData {
  developer: {
    name: string;
    firstName: string;
    lastName: string;
    role: string;
    greeting: string;
    bioSummary: string;
    aboutParagraphs: string[];
    handwrittenDoodleHero: string;
    handwrittenDoodleContact: string;
    profileImage: string;
    resumeUrl: string;
  };
  navigation: NavItem[];
  socialLinks: SocialLink[];
  aboutInfo: InfoItem[];
  skills: SkillItem[];
  whatIDo: WhatIDoItem[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  contactInfo: ContactInfoItem[];
  footer: {
    tagline: string;
    copyrightText: string;
  };
}
