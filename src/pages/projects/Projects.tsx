import * as React from "react";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import Portfolio from "../../components/portfolio/Portfolio";
import "./projects.scss";

export default function Projects() {
  return (
    <Stack
      id="projects"
      direction="column"
      className="root-projects"
      alignItems="center"
    >
      <Stack
        direction="row"
        spacing={1}
        sx={{ paddingBottom: "20px", paddingTop: "20px" }}
      >
        <Typography variant="button" color="secondary">
          .03
        </Typography>
        <Typography variant="button" color="text.primary">
          Projects
        </Typography>
        <div className="title1"></div>
      </Stack>
      <Portfolio />
    </Stack>
  );
}
