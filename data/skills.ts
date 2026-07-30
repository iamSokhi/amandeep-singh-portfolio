export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript"],
  },
  {
    category: "Frontend",
    items: [
      "React",
      "Redux Toolkit",
      "Redux Saga",
      "Redux Thunk",
      "AG React Grid",
      "HTML5",
      "CSS3",
      "SCSS",
    ],
  },
  {
    category: "Testing",
    items: ["Jest", "React Testing Library", "Playwright", "Cucumber"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "Webpack", "CI/CD Pipelines", "Agile/Scrum"],
  },
  {
    category: "Concepts",
    items: [
      "Performance Optimization",
      "Component Architecture",
      "REST API Integration",
      "Responsive Design",
      "Cross-Browser Compatibility",
    ],
  },
];
