import * as React from "react";
import { Link } from "@mui/material";
import ArrowOutwardTwoToneIcon from "@mui/icons-material/ArrowOutwardTwoTone";

export default function Cv() {
  return (
    <Link
      color="secondary"
      underline="none"
      target="_blank"
      href="https://docs.google.com/document/d/1t82n3E9je6DkGVWS-vznq8o7x5gZwT3-CvJkcL0GRt8/edit?usp=sharing"
      variant="overline"
      sx={(theme) => ({
        "&:hover": {
          color: theme.palette.primary.main,
        },
      })}
    >
      View Full CV <ArrowOutwardTwoToneIcon fontSize="small" />
    </Link>
  );
}
