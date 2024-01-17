import React, { FC } from "react";
import { Link } from "@mui/material";

interface LinkProps {
  href: string;
  label: string;
}

const CustomLink: FC<LinkProps> = ({ href, label }) => {
  return (
    <Link
      fontWeight={600}
      underline="none"
      target="_blank"
      href={href}
      variant="body1"
      color="secondary"
      sx={(theme) => ({
        "&:hover": {
          color: theme.palette.primary.main,
        },
      })}
    >
      {label}
    </Link>
  );
};

export default CustomLink;
