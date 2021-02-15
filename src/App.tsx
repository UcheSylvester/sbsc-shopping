import { Route } from "react-router-dom";

import "./App.scss";
import Header from "./components/header/header.component";
import { BaseRoutes } from "./routes/routes.component";

function App() {
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
