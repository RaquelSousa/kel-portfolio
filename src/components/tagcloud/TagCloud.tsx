import React, { FC } from "react";
import { skills } from "../../models/skills.enum";

export const TagCloud: FC = () => {
  return (
    <ul className="flex justify-center flex-wrap max-w-xl align-center gap-2 leading-8 self-center">
      {skills.map((skill) => (
        <li>
          <p className={skill.class}>{skill.name}</p>
        </li>
      ))}
    </ul>
  );
};
