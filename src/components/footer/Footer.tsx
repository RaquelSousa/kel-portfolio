import { FC } from "react";
import { IconButton, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer: FC = () => {
  return (
    <Stack
      direction="row"
      className="footer"
      alignItems="center"
      justifyContent="center"
    >
      <IconButton
        href="https://github.com/RaquelSousa"
        sx={(theme) => ({
          "&:hover": {
            background: "inherit",
          },
        })}
        target="_blank"
      >
        <GitHubIcon
          sx={(theme) => ({
            "&:hover": {
              color: theme.palette.primary.main,
            },
          })}
        />
      </IconButton>
      <IconButton
        href="https://www.linkedin.com/in/raquel-sousa-b7205b21/"
        sx={(theme) => ({
          "&:hover": {
            background: "inherit",
          },
        })}
        target="_blank"
      >
        <LinkedInIcon
          sx={(theme) => ({
            "&:hover": {
              color: theme.palette.primary.main,
            },
          })}
        />
      </IconButton>
    </Stack>
  );
};

export default Footer;
