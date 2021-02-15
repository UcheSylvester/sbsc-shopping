import { RouteProps as RRouteProps } from "react-router-dom";
import HomePage from "../pages/homepage/homepage.component";
import ProductItemPage from "../pages/product-item-page/product-item-page.component";

export type RouteProps = {
  key: number;
} & RRouteProps;

export const BaseRoutes: RouteProps[] = [
  {
    key: 1,
    component: HomePage,
    path: "/",
    exact: true,
  },

  {
    key: 2,
    component: ProductItemPage,
    path: "/:collection/:product_slug",
  },
];
