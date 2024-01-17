import { FC } from "react";
import {
  ListItemIcon,
  ListItemText,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { RouteItem, moduleRoutes } from "../../config/routes";
import { Link } from "react-router-dom";
import ColorToggle from "../colortoggle/ColorToggle";

const Menu: FC = () => {
  return (
    <Stack direction="row" justifyContent="space-between" className="menuitems">
      {moduleRoutes
        .filter((route: RouteItem) => !!route.enabled)
        .map((route: RouteItem) => (
          <Link
            style={{ textDecoration: "none" }}
            key={route.key}
            to={route.path}
            state={{ title: route.key }}
          >
            <MenuItem
              className="nav-menu"
              sx={(theme) => ({
                "&:hover": {
                  background: "inherit",
                },
              })}
            >
              <ListItemIcon className="nav-icon" sx={{ margin: "-10px" }}>
                <Typography variant="button" color="secondary">
                  {route.icon}
                </Typography>
              </ListItemIcon>
              <ListItemText>
                <Typography
                  fontWeight={600}
                  variant="button"
                  color="text.primary"
                  sx={(theme) => ({
                    "&:hover": {
                      color: theme.palette.secondary.main,
                    },
                  })}
                >
                  {route.key}
                </Typography>
              </ListItemText>
            </MenuItem>
          </Link>
        ))}
      <ColorToggle />
    </Stack>
  );
};

export default Menu;
