import React from "react";
import { Stack, Typography } from "@mui/material";
import "./experience.scss";
import { Jobs } from "../../components/jobs/Jobs";
import Cv from "../../components/cv/Cv";

function Experience() {
  return (
    <Stack
      id="experience"
      direction="column"
      spacing={1}
      className="root-experience"
      alignItems="center"
    >
      <Stack direction="row" spacing={1}>
        <Typography variant="button" color="secondary">
          .02
        </Typography>
        <Typography variant="button" color="text.primary">
          Experience
        </Typography>
        <div className="title"></div>
      </Stack>
      <Jobs />
      <Cv />
    </Stack>
  );
}

export default Experience;
