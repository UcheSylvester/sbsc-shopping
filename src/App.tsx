import { useEffect } from "react";
import { Route, useLocation } from "react-router-dom";

import "./App.scss";
import Header from "./components/header/header.component";
import { BaseRoutes } from "./routes/routes.component";
import { scrollToTop } from "./utils/utils";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return (
    <>
      <Header />

      {BaseRoutes.map((route) => (
        <Route {...route} />
      ))}
    </>
  );
}

export default App;
