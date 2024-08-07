export interface JobType {
  id: number;
  jobTitle: string;
  company: any;
  dates: string;
  content: string;
  skills: Array<string>;
}

export const job: Array<JobType> = [
  {
    id: 0,
    jobTitle: "Software Engineer I",
    company: "Safety NetAccess",
    dates: "Apr 2024 - Present",
    content:
      "Ad-hoc internet access portal development. Various technologies and languages used to fit customer's requirements.",
    skills: [
      "Typescript",
      "React",
      "CSS",
      "HTML",
      "Git",
      "Node.JS",
      "RESTful APIs",
      "Next.JS",
      "Node-RED",
      "Apex",
    ],
  },
  {
    id: 1,
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
  },
  {
    id: 2,
    jobTitle: "Software Engineer",
    company: "Stark",
    dates: "Aug 2020 - Aug 2021",
    content:
      "Bug fixing and new feature implementation using VB.net Creating/maintaining SQL procedures using SSMS Version control using TFS",
    skills: ["VB.net", "SQL", "SSMS", "TFS", "Agile", "VBA", "Excel"],
  },
  {
    id: 3,
    jobTitle: "Business Analyst",
    company: "Maple Parking",
    dates: "July 2018 - April 2020",
    content:
      "Daily price checking, comparison, and amending SQL queries to form ad-hoc reports using SQL Server Management Studio and Data Analysis. Advanced Excel formulas and Pivot Tables. Charts generated with PowerBI. Office 365 implementation and administration. IT Support.",
    skills: ["SQL", "SSMS", "PowerBI", "Excel", "Office365", "IT Support"],
  },
  {
    id: 4,
    jobTitle: "Junior Developer",
    company: "Two Circles",
    dates: "September 2017 - July 2018",
    content:
      "Development and enhancement of existing products, through complex SQL procedures, to assist Data Analysts in creating charts, and automated data presentation.",
    skills: ["SSIS", "C#", "SQL", "Excel", "Jira", "Agile"],
  },
  {
    id: 5,
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
  },
];
