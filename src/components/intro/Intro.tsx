import React from "react";
import { Link, Stack, Typography } from "@mui/material";
// import "./about.scss";
import CustomLink from "../../components/customlink/CustomLink";
import { red } from "@mui/material/colors";

function Intro() {
  return (
    <Stack
      spacing={2}
      direction="column"
      className="root-about"
      maxWidth="1000px"
    >
      <Typography variant="overline" color="secondary" className="intro">
        Hi, my name is
      </Typography>
      <Typography variant="h2">Raquel Sousa.</Typography>
      <Typography variant="h3" className="subtitle">
        I build accessible products for what you see on the web and beyond.
      </Typography>
    </Stack>
  );
}

export default Intro;
