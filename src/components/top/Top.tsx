import React, { useEffect, useState } from "react";
import "./top.scss";
import { IconButton } from "@mui/material";
import ArrowUpwardTwoToneIcon from "@mui/icons-material/ArrowUpwardTwoTone";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log("hello", window.scrollY);
      if (window.scrollY > 1) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <IconButton
      className="scrollTop"
      style={{ display: isVisible ? "block" : "none" }}
      onClick={goTop}
    >
      <ArrowUpwardTwoToneIcon />
    </IconButton>
  );
};

export default ScrollToTop;
