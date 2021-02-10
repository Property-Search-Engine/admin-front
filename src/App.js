import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import ROUTES from "./utils/routes";
import Error from "./components/pages/Error/Error";
import LoginContainer from "./redux/containers/pages/LoginContainer";
import Settings from "./components/pages/Settings/Settings";
import PropertyDetailsContainer from "./redux/containers/pages/PropertyDetailsContainer";
import ListingContainer from "./redux/containers/pages/ListingContainer";

function App() {
  return (
    <Switch>
      <Route path={ROUTES.LOGIN} exact>
        <LoginContainer />
      </Route>
      <Route
        path={ROUTES.PROPERTY_DETAILS}
        component={PropertyDetailsContainer}
        exact
      />
      <Route path={ROUTES.LISTING} exact>
        <ListingContainer />
      </Route>
      <Route path={ROUTES.SETTINGS}>
        <Settings />
      </Route>
      <Route path={ROUTES.DASHBOARD} exact>
        <Dashboard />
      </Route>
      <Route path={ROUTES.ERROR}>
        <Error />
      </Route>
    </Switch>
  );
}
export default App;
