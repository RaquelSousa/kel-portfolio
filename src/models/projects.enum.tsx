import Hiraeth from "../assets/hiraeth.png";
import Cryoware from "../assets/cryoware.png";
import RaquelCv from "../assets/raquelcv.png";
import Weather from "../assets/weather.png";
import Kkaquatics from "../assets/kkaquatics.png";
import NeuralDraftWebsite from "../assets/neuraldraftwebsite.png";
import hiraethinfinite from "../assets/hiraethinfinite.png";

export interface ProjectType {
  id: number;
  img: any;
  title: string;
  website: string;
  description: string;
  git: string;
  skills: Array<string>;
}

export const projects: Array<ProjectType> = [
  {
    id: 0,
    img: Hiraeth,
    title: "Hiraeth",
    website: "https://hiraeth2.vercel.app/",
    description: "Website created for a World of Warcraft guild called Hiraeth",
    git: "https://github.com/RaquelSousa/hiraeth2",
    skills: ["Typescript", "React", "SCSS", "Git", "Material UI"],
  },
  {
    id: 1,
    img: Cryoware,
    title: "Cryoware",
    website: "https://cryoware.dreamhosters.com/",
    description:
      "Website created for a friend starting a pc building business. Under development.",
    git: "https://github.com/lenatomas/nano",
    skills: ["Typescript", "React", "SCSS", "Git"],
  },
  {
    id: 2,
    img: RaquelCv,
    title: "Portfolio",
    website: "https://raquelsousa-portfolio.vercel.app/",
    description:
      "This is the current website you're on. A CV/Portfolio website to showcase my experience.",
    git: "https://github.com/RaquelSousa/kel-portfolio",
    skills: [
      "Typescript",
      "React",
      "SCSS",
      "Git",
      "Tailwind CSS",
      "Material UI",
    ],
  },
  {
    id: 3,
    img: Weather,
    title: "Weather App",
    website: "https://kel-weather-app.vercel.app/",
    description:
      "Basic Weather app to search a city and get details of the weather real-time.",
    git: "https://github.com/RaquelSousa/weather-app",
    skills: [
      "Typescript",
      "Angular",
      "SCSS",
      "Git",
      "Bootstrap",
      "RESTful API",
    ],
  },
  {
    id: 4,
    img: Kkaquatics,
    title: "K&K Aquatics",
    website: "https://kandkaquatics.com/",
    description: "Website for an aquascape, aquarium and pond services company",
    git: "https://github.com/RaquelSousa/kkaquatics",
    skills: [
      "Next.Js",
      "Typescript",
      "Tailwind CSS",
      "Git",
      "Node.js",
      "RESTful API",
    ],
  },
  // {
  //   id: 5,
  //   img: NeuralDraftWebsite,
  //   title: "NeuralDraft Website",
  //   website: "https://neuraldraft-website.vercel.app/",
  //   description: "Website for an app that creates AI-powered eSports analytics. Under Development. Github private",
  //   git: "/",
  //   skills: [
  //     "React",
  //     "Typescript",
  //     "Tailwind CSS",
  //     "Git",
  //     "Node.js",
  //     "RESTful API",
  //   ],
  // },
  // {
  //   id: 6,
  //   img: hiraethinfinite,
  //   title: "Hiraeth Infinite",
  //   website: "https://hiraethinfinite.vercel.app/",
  //   description: "Website for a web development company. Under Development. Github private",
  //   git: "/",
  //   skills: [
  //     "Next.Js",
  //     "Typescript",
  //     "Tailwind CSS",
  //     "Git",
  //     "Shadcn"
  //   ],
  // },
];
