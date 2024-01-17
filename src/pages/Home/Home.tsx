import React from "react";
import logo from "../logo.svg";
import { Stack, createTheme } from "@mui/material";
import About from "../about/About";
import Experience from "../experience/Experience";
import Projects from "../projects/Projects";
import Intro from "../../components/intro/Intro";

function Home() {
  return (
    <Stack direction="column" className="home-root">
      <Intro />
      <About />
      <Experience />
      <Projects />
    </Stack>
  );
}

export default Home;
