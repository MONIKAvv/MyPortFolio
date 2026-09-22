import type { PortfolioData } from '../types';
import monikaProfile from '../assets/monika-profile.jpg';
import brainvaultImg from '../assets/brainvault.jpg';
import insightseImg from '../assets/insightse.jpg';
import stellapolarisImg from '../assets/stellapolaris.jpg';

export const portfolioData: PortfolioData = {
  developer: {
    name: 'Monika Kumari',
    firstName: 'Monika',
    lastName: 'Kumari',
    role: 'Flutter / Application Developer',
    greeting: "Hi, I'm",
    bioSummary:
      'I build modern, user-friendly mobile applications with clean code and a focus on real-world impact. Passionate about turning ideas into meaningful products.',
    aboutParagraphs: [
      "I'm a passionate application developer with experience in building mobile apps using Flutter and Android. I love solving problems, learning new technologies and creating smooth, intuitive user experiences.",
      "Currently, I'm working on expanding my skills in system design, backend integration and exploring AI to build smarter applications. My goal is to grow as a professional developer and work on impactful products, both remotely and internationally."
    ],
    handwrittenDoodleHero: 'Better\nApps\nBrighter\nIdeas',
    handwrittenDoodleContact: 'Build\nSomething\nGreat',
    profileImage: monikaProfile,
    resumeUrl: '#resume'
  },

  navigation: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ],

  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/MONIKAvv/',
      icon: 'Github',
      ariaLabel: 'Monika Kumari GitHub profile'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/monika',
      icon: 'Linkedin',
      ariaLabel: 'Monika Kumari LinkedIn profile'
    },
    {
      name: 'Email',
      url: 'mailto:monikasoftwaredev@gmail.com',
      icon: 'Mail',
      ariaLabel: 'Send email to Monika'
    }
  ],

  aboutInfo: [
    {
      label: 'Location',
      value: 'India',
      iconName: 'MapPin'
    },
    {
      label: 'Email',
      value: 'monikasoftwaredev@gmail.com',
      iconName: 'Mail'
    },
    {
      label: 'Experience',
      value: '1+ year (Professional + Personal Projects)',
      iconName: 'Briefcase'
    },
    {
      label: 'Languages',
      value: 'English, Hindi',
      iconName: 'Languages'
    }
  ],

  skills: [
    {
      id: 'flutter',
      name: 'Flutter',
      description: 'Mobile app development with Flutter & Dart',
      category: 'core',
      iconType: 'Flutter',
      accentColor: 'from-blue-500 to-cyan-400'
    },
    {
      id: 'android-kotlin',
      name: 'Android / Kotlin',
      description: 'Native Android development with Kotlin',
      category: 'core',
      iconType: 'Android',
      accentColor: 'from-emerald-500 to-teal-400'
    },
    {
      id: 'firebase',
      name: 'Firebase',
      description: 'Auth, Firestore, Cloud Functions & more',
      category: 'core',
      iconType: 'Firebase',
      accentColor: 'from-amber-500 to-orange-400'
    },
    {
      id: 'rest-apis',
      name: 'REST APIs',
      description: 'Integration with third-party APIs',
      category: 'core',
      iconType: 'Cloud',
      accentColor: 'from-sky-500 to-blue-400'
    },
    {
      id: 'git-github',
      name: 'Git & GitHub',
      description: 'Version control & collaboration',
      category: 'tools',
      iconType: 'GitBranch',
      accentColor: 'from-orange-500 to-red-400'
    },
    {
      id: 'vscode',
      name: 'VS Code',
      description: 'Development environment',
      category: 'tools',
      iconType: 'Code2',
      accentColor: 'from-blue-600 to-indigo-400'
    },
    {
      id: 'other-tools',
      name: 'Other Tools',
      description: 'Android Studio, Figma, Postman, Firebase CLI',
      category: 'tools',
      iconType: 'Wrench',
      accentColor: 'from-purple-500 to-indigo-400'
    },
    {
      id: 'soft-skills',
      name: 'Soft Skills',
      description: 'Problem solving, Teamwork, Communication',
      category: 'soft',
      iconType: 'Users',
      accentColor: 'from-violet-500 to-fuchsia-400'
    }
  ],

  whatIDo: [
    {
      id: 'mobile-app',
      title: 'Mobile App Development',
      description: 'Flutter & Android apps with modern UI/UX',
      iconName: 'Smartphone'
    },
    {
      id: 'api-integration',
      title: 'API Integration',
      description: 'Connect apps with secure and scalable APIs',
      iconName: 'Cloud'
    },
    {
      id: 'problem-solving',
      title: 'Problem Solving',
      description: 'Find simple solutions to complex problems',
      iconName: 'Lightbulb'
    },
    {
      id: 'continuous-learning',
      title: 'Continuous Learning',
      description: 'Always exploring new tools, frameworks and ideas',
      iconName: 'TrendingUp'
    }
  ],

  projects: [
    {
      id: 'brainvault',
      title: 'BrainVault',
      shortDescription:
        'AI-powered productivity and knowledge-management application built with Flutter, Firebase and Gemini.',
      longDescription:
        'BrainVault brings intelligent contextual note-taking, AI document summaries, semantic search, and multi-device cloud synchronization into a smooth, native Flutter experience powered by Google Gemini AI and Firebase cloud backend.',
      image: brainvaultImg,
      technologies: ['Flutter', 'Firebase', 'Gemini', 'Dart'],
      githubUrl: 'https://github.com/MONIKAvv/BrainVault',
      liveUrl: 'https://github.com/MONIKAvv/BrainVault',
      highlights: [
        'Integrated Google Gemini LLM API for automated document summaries and insights',
        'Built reactive state management with Riverpod and offline-first Firestore sync',
        'Polished 60 FPS micro-animations and adaptive responsive layouts for iOS & Android'
      ],
      featured: true
    },
    {
      id: 'insightse',
      title: 'Insightse (School App)',
      shortDescription:
        'Attendance, fee management and class logs application for schools.',
      longDescription:
        'A comprehensive institutional mobile platform serving teachers, parents, and school administrators. Features streamlined daily biometric attendance logs, real-time fee payment status dashboards, and instant class announcements.',
      image: insightseImg,
      technologies: ['Flutter', 'Dart', 'REST APIs'],
      githubUrl: 'YOUR_GITHUB_URL',
      liveUrl: 'PROJECT_URL',
      highlights: [
        'Engineered responsive dashboards for daily attendance logging and PDF grade report generation',
        'Implemented secure RESTful API communication and JWT token caching',
        'Designed intuitive multi-role user workflows with smooth navigation'
      ],
      featured: true
    },
    {
      id: 'stella-polaris',
      title: 'Stella Polaris (ERPNext)',
      shortDescription:
        'Contributed to Project Manager, Sales Invoice and Room Book modules under ERPNext.',
      longDescription:
        'Enterprise Resource Planning (ERP) modules designed and customized on Frappe / ERPNext framework. Streamlined end-to-end booking calendars, automated sales invoice reconciliation, and Kanban project workflow trackers.',
      image: stellapolarisImg,
      technologies: ['Frappe', 'JavaScript', 'ERPNext'],
      githubUrl: 'YOUR_GITHUB_URL',
      liveUrl: 'PROJECT_URL',
      highlights: [
        'Developed custom Frappe DocTypes and automated client-side JavaScript controllers',
        'Implemented dynamic Room Booking schedule calendar with real-time conflict checking',
        'Streamlined multi-currency Sales Invoice generation and project time tracking'
      ],
      featured: true
    }
  ],

  experience: [
    {
      id: 'exp-1',
      period: '2024 – Present',
      role: 'Application Developer (Flutter)',
      companyOrContext: 'BrainVault & Application Projects',
      description:
        'Working on BrainVault and other application projects, building mobile applications and integrating APIs.',
      badge: 'Current',
      isCurrent: true
    },
    {
      id: 'exp-2',
      period: '2026',
      role: 'Application Developer',
      companyOrContext: 'Insightse (School App)',
      description:
        'Worked on attendance management, fee management and class logs modules.',
      badge: 'Project',
      isCurrent: false
    },
    {
      id: 'exp-3',
      period: '2026',
      role: 'Software Developer',
      companyOrContext: 'Stella Polaris (ERPNext)',
      description:
        'Contributed to Project Manager, Sales Invoice and Room Book modules.',
      badge: 'Project',
      isCurrent: false
    },
    {
      id: 'exp-4',
      period: '2025',
      role: 'Software Developer Intern',
      companyOrContext: 'FunMate',
      description:
        'Contributed to create a platform reward based application, where people can get reward while learning',
      badge: 'Project',
      isCurrent: false
    }
  ],

  contactInfo: [
    {
      label: 'Email',
      value: 'monikasoftwaredev@gmail.com',
      subtext: 'Send me an email',
      href: 'mailto:monikasoftwaredev@gmail.com',
      iconName: 'Mail',
      type: 'email'
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/monika',
      subtext: 'Connect with me',
      href: 'https://linkedin.com/in/monika2',
      iconName: 'Linkedin',
      type: 'linkedin'
    },
    {
      label: 'GitHub',
      value: 'github.com/MONIKAvv',
      subtext: 'Check my work',
      href: 'https://github.com/MONIKAvv',
      iconName: 'Github',
      type: 'github'
    },
    {
      label: 'Location',
      value: 'India',
      subtext: 'Remote / Open to Relocation',
      href: '#',
      iconName: 'MapPin',
      type: 'location'
    }
  ],

  footer: {
    tagline: 'Your ideas. Organised. Your Future. Elevated.',
    copyrightText: '© 2025 Monika. All rights reserved.'
  }
};
