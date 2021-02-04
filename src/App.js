import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Listing from "./components/pages/Listing/Listing";
import ROUTES from "./utils/routes";
import PropertyDetails from "./components/pages/PropertyDetails/PropertyDetails";
import Error from "./components/pages/Error/Error";
import LoginContainer from "./redux/containers/pages/LoginContainer";
import Settings from "./components/pages/Settings/Settings"; 

function App() {
  useEffect(() => {}, []);

  return (
    <Switch>
      <Route path={ROUTES.LOGIN}>
        <LoginContainer />
      </Route>
      <Route path={ROUTES.PROPERTY_DETAILS}>
        <PropertyDetails />
      </Route>
      <Route path={ROUTES.LISTING}>
        <Listing />
      </Route>
      <Route path={ROUTES.SETTINGS}>
        <Settings/>
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
