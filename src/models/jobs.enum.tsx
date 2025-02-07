export interface JobType {
  id: number;
  jobTitle: string;
  company: any;
  dates: string;
  content: string;
  skills: Array<string>;
  website: string;
}

export const job: Array<JobType> = [
  {
    id: 0,
    jobTitle: "Frontend Developer",
    company: "Workstream",
    dates: "Jul 2024 - Present",
    content:
      "Development of a SaaS application in it's early stages. Agile work environment, including Code Reviews. End-to-2nd Testing. Junior Developer Mentoring.",
    skills: [
      "Typescript",
      "Tailwind CSS",
      "HTML",
      "Git",
      "RESTful APIs",
      "Next.JS",
      "Cypress",
    ],
    website: "https://goworkstream.io/",
  },
  {
    id: 1,
    jobTitle: "Software Engineer I",
    company: "Safety NetAccess",
    dates: "Apr 2024 - Present",
    content:
      "Varied Ad-hoc development for both in-house programs and customers. Various technologies and languages used to fit customer's requirements.",
    skills: [
      "Typescript",
      "React",
      "CSS",
      "HTML",
      "Git",
      "Node.JS",
      "RESTful APIs",
      "Next.JS",
    ],
    website: "https://safetynetaccess.com/",
  },
  {
    id: 2,
    jobTitle: "Product Developer",
    company: "Edison365",
    dates: "Aug 2021 - Apr 2024",
    content:
      "Development of a brand new SaaS application from scratch, with micro applications and microservices. Development of a component library. Agile work environment, including Code Reviews. Unit Testing.",
    skills: [
      "Typescript",
      "React",
      "SCSS",
      "Jest",
      "Agile",
      "Azure",
      "Material UI",
      "Redux",
      "HTML",
      "Storybook",
      "RESTful APIs",
    ],
    website: "https://edison365.com/",
  },
  {
    id: 3,
    jobTitle: "Software Engineer",
    company: "Stark",
    dates: "Aug 2020 - Aug 2021",
    content:
      "Bug fixing and new feature implementation using VB.net Creating/maintaining SQL procedures using SSMS Version control using TFS",
    skills: ["VB.net", "SQL", "SSMS", "TFS", "Agile", "VBA", "Excel"],
    website: "https://www.stark.co.uk/",
  },
  {
    id: 4,
    jobTitle: "Business Analyst",
    company: "Maple Parking",
    dates: "July 2018 - April 2020",
    content:
      "Daily price checking, comparison, and amending SQL queries to form ad-hoc reports using SQL Server Management Studio and Data Analysis. Advanced Excel formulas and Pivot Tables. Charts generated with PowerBI. Office 365 implementation and administration. IT Support.",
    skills: ["SQL", "SSMS", "PowerBI", "Excel", "Office365", "IT Support"],
    website: "https://www.mapleparking.co.uk/",
  },
  {
    id: 5,
    jobTitle: "Junior Developer",
    company: "Two Circles",
    dates: "September 2017 - July 2018",
    content:
      "Development and enhancement of existing products, through complex SQL procedures, to assist Data Analysts in creating charts, and automated data presentation.",
    skills: ["SSIS", "C#", "SQL", "Excel", "Jira", "Agile"],
    website: "https://twocircles.com/gb/",
  },
  {
    id: 6,
    jobTitle: "Junior Data Analyst",
    company: "Context",
    dates: "October 2016 - August 2017",
    content:
      "Development and enhancement of existing products, through complex SQL procedures, to then create charts, and automated data presentation.",
    skills: [
      "ETL",
      "Data Analysis",
      "SQL",
      "Excel",
      "Regex",
      "Project Management",
    ],
    website: "https://www.contextworld.com/",
  },
];
