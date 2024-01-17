import { FC } from "react";
import { Stack } from "@mui/material";
import "./header.scss";
import logo from "../../logo.png";
import Menu from "../menu/Menu";

const Header: FC = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      className="top-header"
      alignItems="center"
      sx={{ padding: "10px" }}
    >
      <img src={logo} className="logo" alt="logo" />
      <Menu />
    </Stack>
  );
};

export default Header;
