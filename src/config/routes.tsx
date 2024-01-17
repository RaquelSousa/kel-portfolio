import React, { FC, ReactNode } from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import About from "../pages/about/About";
import Experience from "../pages/experience/Experience";
import Projects from "../pages/projects/Projects";

export interface RouteItem {
  key: string;
  title?: string;
  tooltip?: string;
  path: string;
  component?: ReactNode | string;
  enabled: boolean;
  icon?: any;
  subRoutes?: Array<RouteItem>;
  isApp?: boolean;
  isIndex?: boolean;
  themeName?: string;
  description?: string;
  color?: string;
}

export const ContainerRouter = () => (
  <Routes>
    {moduleRoutes.map((route) => (
      <Route key={route.key} path={route.path} element={route.component} />
    ))}
  </Routes>
);

export const moduleRoutes: Array<RouteItem> = [
  {
    key: "Home",
    path: "/",
    enabled: false,
    component: <Home />,
    isIndex: true,
    description: "Home",
  },
  {
    key: "About",
    path: "#about",
    enabled: true,
    component: <About />,
    icon: ".01",
    description: "About",
  },
  {
    key: "Experience",
    path: "#experience",
    enabled: true,
    component: <Experience />,
    icon: ".02",
    description: "Experience",
  },
  {
    key: "Projects",
    path: "#projects",
    enabled: true,
    component: <Projects />,
    icon: ".03",
    description: "Projects",
  },
];
