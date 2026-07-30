export type ExperienceEntry = {
  id: string;
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  highlights: string[];
  stack: string[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "morgan-stanley",
    role: "Lead Front End Developer",
    company: "Morgan Stanley (via Wissen Technologies)",
    location: "Brampton, ON",
    start: "Jan 2025",
    end: "Present",
    current: true,
    highlights: [
      "Led frontend development for a large-scale Non-Financial Risk Assessment (NFRAC/iNFRA) platform used by 1,000+ internal users.",
      "Architected scalable frontend solutions using React, TypeScript, Redux Toolkit, and Redux Saga for complex workflows.",
      "Built reusable UI component libraries, reducing code duplication by 30% and improving development efficiency.",
      "Improved application performance by 40% through code splitting, lazy loading, and memoization techniques.",
      "Integrated RESTful APIs and real-time data streams, reducing data latency by 25%.",
      "Increased test coverage from 50% to 85% using Jest, React Testing Library, Playwright, and Cucumber.",
      "Mentored 4–6 developers and conducted code reviews, reducing production defects by 20%.",
    ],
    stack: ["React", "TypeScript", "Redux Toolkit", "Redux Saga", "Playwright", "Jest"],
  },
  {
    id: "salado-solutions",
    role: "Senior React Developer",
    company: "Salado Solutions",
    location: "Toronto, ON",
    start: "Sep 2024",
    end: "Dec 2024",
    highlights: [
      "Developed and maintained React-based applications with a focus on performance and scalability.",
      "Collaborated with cross-functional teams to deliver high-quality UI features in agile environments.",
      "Collaborated with cross-functional teams to integrate RESTful APIs into applications.",
      "Led code reviews and provided mentorship to junior developers, promoting best practices.",
      "Optimized application performance through code refactoring and component reuse strategies.",
    ],
    stack: ["React", "TypeScript", "REST APIs"],
  },
  {
    id: "copart",
    role: "Senior Software Engineer",
    company: "Copart",
    location: "Hyderabad, India",
    start: "Sep 2018",
    end: "Apr 2024",
    highlights: [
      "Led development of enterprise web applications using React and TypeScript, improving user experience and scalability.",
      "Improved application performance by 60% through lazy loading and code splitting.",
      "Developed reusable components and custom hooks, reducing code redundancy by 30%.",
      "Implemented API call cancellation and optimized data fetching strategies.",
      "Integrated REST APIs for seamless backend communication.",
      "Introduced automated testing, reducing production bugs by 50%.",
      "Established coding standards and improved overall code quality by 20%.",
      "Collaborated with stakeholders, achieving 95% satisfaction in deliverables.",
    ],
    stack: ["React", "TypeScript", "Custom Hooks", "REST APIs"],
  },
  {
    id: "infosys",
    role: "Technology Analyst",
    company: "Infosys",
    location: "Chandigarh, India",
    start: "Aug 2017",
    end: "Sep 2018",
    highlights: [
      "Spearheaded the migration of legacy codebase to React, modernizing the tech stack and reducing maintenance overhead by 40%.",
      "Used Adobe AEM CMS to author pages.",
      "Collaborated with the back-end team to integrate RESTful APIs, ensuring seamless data flow.",
      "Utilized Redux for state management, improving application efficiency and reducing bugs.",
      "Conducted over 100 code reviews, ensuring adherence to best practices and maintaining high code quality standards.",
      "Championed the adoption of TypeScript, improving codebase maintainability and reducing runtime errors by 25%.",
      "Optimized components for maximum performance across a vast array of web-capable devices and browsers.",
      "Mentored and trained 15 junior developers, fostering a culture of continuous learning and professional growth.",
    ],
    stack: ["React", "TypeScript", "Redux", "Adobe AEM"],
  },
  {
    id: "cognizant",
    role: "Programmer Analyst",
    company: "Cognizant",
    location: "Hyderabad, India",
    start: "Apr 2014",
    end: "Jul 2017",
    highlights: [
      "Assisted in the development of a client single-page application with React, contributing to project completion on time.",
      "Collaborated with UI/UX designers to implement user-friendly and visually appealing interfaces.",
      "Created pixel-perfect React UI components from Adobe XD designs.",
      "Implemented responsive design with SCSS, ensuring compatibility across various devices and screen sizes.",
      "Participated in daily stand-up meetings and agile development sprints, ensuring efficient workflow and project progress.",
      "Utilized Git for version control, managing codebase effectively and collaborating with team members.",
    ],
    stack: ["React", "SCSS", "Adobe XD", "Git"],
  },
];

export const education = [
  {
    degree: "Bachelor of Technology, Electronics & Communication Engineering",
    school: "Punjab Technology University",
    location: "Phagwara, Punjab",
    date: "Jul 2013",
  },
  {
    degree: "High School Diploma",
    school: "Shri Harkrishan Sahib Public School",
    location: "Ludhiana, Punjab",
    date: "Jan 2009",
  },
];

export const languages = [
  { name: "English", level: "Full Professional", value: 80 },
  { name: "Hindi", level: "Native or Bilingual", value: 100 },
  { name: "Punjabi", level: "Native or Bilingual", value: 100 },
  { name: "French", level: "Limited Working", value: 35 },
];

export const accomplishments = [
  'Awarded the "Digital Award for Excellence" for support and contribution toward the MFL BAU release while at Cognizant.',
  'Recognized for contributions toward "Title Transfer," "Service Order Management," and "Vendor Billing" releases while at Copart.',
];
