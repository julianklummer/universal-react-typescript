import React, { StrictMode } from "react";
import routes from "./routes";
import { Route, Link, Redirect, Switch } from "react-router-dom";
import NoMatch from "./NoMatch";

export const App: React.FC = () => {
  return (
    <StrictMode>
      <p>Navbar placeholder</p>
      <Switch>
        {routes.map(({ path, exact, component }) => (
            <Route
                path={path}
                exact={exact}
            >
                {component}
            </Route>
        ))}
        <Route render={() => <NoMatch />} />
      </Switch>
    </StrictMode>
  );
};
