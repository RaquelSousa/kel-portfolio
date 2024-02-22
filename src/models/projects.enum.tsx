import Hiraeth from "../assets/hiraeth.png";
import Cryoware from "../assets/cryoware.png";
import RaquelCv from "../assets/raquelcv.png";

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
    website: "https://hiraeth.dreamhosters.com/",
    description: "Website created for a World of Warcraft guild called Hiraeth",
    git: "https://github.com/RaquelSousa/hiraeth2",
    skills: ["Typescript", "React", "SaSS", "Git", "Material UI"],
  },
  {
    id: 1,
    img: Cryoware,
    title: "Cryoware",
    website: "https://cryoware.dreamhosters.com/",
    description:
      "Website created for a friend starting a pc building business. Under development.",
    git: "https://github.com/lenatomas/nano",
    skills: ["Typescript", "React", "SaSS", "Git"],
  },
  {
    id: 2,
    img: RaquelCv,
    title: "Portfolio",
    website: "https://raquelsousa.dreamhosters.com/",
    description:
      "This is the current website you're on. A CV/Portfolio website to showcase my experience.",
    git: "https://github.com/RaquelSousa/kel-portfolio",
    skills: [
      "Typescript",
      "React",
      "SaSS",
      "Git",
      "Tailwind CSS",
      "Material UI",
    ],
  },
];
