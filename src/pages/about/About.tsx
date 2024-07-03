import React from "react";
import { Stack, Typography } from "@mui/material";
import "./about.scss";
import CustomLink from "../../components/customlink/CustomLink";
import { TagCloud } from "../../components/tagcloud/TagCloud";

function About() {
  return (
    <Stack id="about" spacing={2} direction="column" className="root-about">
      <Stack direction="row" spacing={1}>
        <Typography variant="button" color="secondary">
          .01
        </Typography>
        <Typography variant="button" color="text.primary">
          About
        </Typography>
        <div className="title"></div>
      </Stack>
      <Stack direction="row" justifyContent="flex-start">
        <Stack
          direction="column"
          maxWidth="1400px"
          sx={{ paddingRight: "300px" }}
        >
          <Typography variant="body1" className="subtitle">
            Since I was little, I always had an interest in technologies, and
            how everything worked. My first computer was purchased fully built,
            but I insisted on learning how to assemble one, and learned it
            myself. Nowadays, I have build all my computers myself, and help
            several friends and family build theirs too. But my interest in
            technology didn't end there. I always strived to learn and
            understand why things worked the way they did in windows, and soon
            enough there was no problem friends and family had I couldn't help
            solve. But I wanted to go further. So I decided to take a Level 3
            course in IT and Company Management, which included both Programing
            (Pascal, Java, SQL, PHP, HTML and CSS) and company management
            elements. As my first job, I enrolled in a 3 month Oracle Forms
            course, (which included Oracle PL/SQL, JSP, and Oracle Forms), and
            worked on a company called Logica (now part of the CGI group). All
            my development related roles after that were all based around Data.
          </Typography>
          <br />
          <Typography variant="body1" className="subtitle">
            However, fast forward to 2019, I found my passion in Frontend
            Development. I have been working with React, CSS and Typescript, and
            I love it.
          </Typography>
          <br />
          <Typography variant="body1" className="subtitle">
            I am very enthusiastic, I am keen to learn and to develop my
            knowledge. I like to understand how things work, and do it myself. I
            strive to keep up to date with best practices and new technologies.
            In the past, I have worked on Data, Retail and Development, ranging
            from companies in the{" "}
            <CustomLink href="https://twocircles.com/gb-en/" label="Sports" />,{" "}
            <CustomLink href="https://www.stark.co.uk/" label="Electricity" />,{" "}
            <CustomLink
              href="https://www.mapleparking.co.uk/"
              label="Parking"
            />
            , Food,{" "}
            <CustomLink href="https://www.contextworld.com/home" label="Data" />{" "}
            and{" "}
            <CustomLink
              href="https://edison365.com/"
              label="Project Management"
            />{" "}
            Industries. Currently I'm working as a Software Engineer at{" "}
            <CustomLink
              href="https://safetynetaccess.com/"
              label="Safety NetAccess."
            />{" "}
          </Typography>
        </Stack>
        <TagCloud />
      </Stack>
    </Stack>
  );
}

export default About;
