import { Chip, Stack } from "@mui/material";
import React, { FC } from "react";

interface SkillProps {
  jobSkills: Array<string>;
}

export const Skills: FC<SkillProps> = ({ jobSkills }) => {
  return (
    <Stack direction="row" spacing={1}>
      {jobSkills.map((skill: string) => (
        <Stack direction="row" spacing={1}>
          <Chip color="secondary" label={skill} />
        </Stack>
      ))}
    </Stack>
  );
};
