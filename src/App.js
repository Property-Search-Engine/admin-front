import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Listing from "./components/pages/Listing/Listing";
import ROUTES from "./utils/routes";
import Error from "./components/pages/Error/Error";
import LoginContainer from "./redux/containers/pages/LoginContainer";
import Settings from "./components/pages/Settings/Settings";
import PropertyDetailsContainer from "./redux/containers/pages/PropertyDetailsContainer";
import PropertyDetails from "./components/pages/PropertyDetails/PropertyDetails";
import ListingContainer from "./redux/containers/pages/ListingContainer";

function App() {
  useEffect(() => {}, []);

  return (
    <Switch>
      <Route path={ROUTES.LOGIN}>
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
