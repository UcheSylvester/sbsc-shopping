import { RouteProps as RRouteProps } from "react-router-dom";
import HomePage from "../pages/homepage/homepage.component";

export type RouteProps = {
  key: number;
} & RRouteProps;

export const BaseRoutes: RouteProps[] = [
  {
    key: 1,
    component: HomePage,
    path: "/",
  },

  {
    key: 2,
    // component:
  },
];
