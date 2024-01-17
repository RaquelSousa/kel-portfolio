import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Chip, Grid, IconButton, Stack } from "@mui/material";
import { projects, ProjectType } from "../../models/projects.enum";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FC } from "react";
import { Skills } from "../skills/Skills";

function Portfolio() {
  return (
    <Grid container spacing={1} justifyContent="center" alignItems="center">
      {projects.map((project: ProjectType) => (
        <Grid item xs={2} md={2}>
          <Card sx={{ maxWidth: 400 }}>
            <CardActionArea href={project.website} target="_blank">
              <CardMedia
                component="img"
                image={project.img}
                alt={project.title}
                sx={{ maxHeight: 100 }}
              />
            </CardActionArea>
            <CardContent sx={{ maxHeight: 200 }}>
              <Stack spacing={2}>
                <Stack direction="row">
                  <Typography variant="h6" component="div">
                    {project.title} -
                  </Typography>
                  <IconButton
                    href={project.git}
                    sx={(theme) => ({
                      "&:hover": {
                        background: "inherit",
                      },
                    })}
                    target="_blank"
                  >
                    <GitHubIcon
                      fontSize="small"
                      sx={(theme) => ({
                        "&:hover": {
                          color: theme.palette.primary.main,
                        },
                      })}
                    />
                  </IconButton>
                </Stack>
                <Typography variant="body2" color="grey">
                  {project.description}
                </Typography>
                <Skills jobSkills={project.skills} />
              </Stack>
              <Stack alignItems="center"></Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Portfolio;
