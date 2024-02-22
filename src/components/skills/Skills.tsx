import { Chip, Stack } from "@mui/material";
import React, { FC } from "react";

interface SkillProps {
  jobSkills: Array<string>;
}

export const Skills: FC<SkillProps> = ({ jobSkills }) => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      spacing={1}
      sx={{ flexWrap: "wrap" }}
    >
      {jobSkills.map((skill: string) => (
        <Chip
          color="secondary"
          label={skill}
          sx={{ marginBottom: "10px !important" }}
        />
      ))}
    </Stack>
  );
};
