import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Listing from "./components/Listing/Listing";
import ROUTES from "./utils/routes";
import PropertyDetails from "./components/PropertyDetails/PropertyDetails";
import Error from "./components/Error/Error"; 

 function App() {
  useEffect(() => {}, []);

  return (
    <Switch>
        <Route path={ROUTES.PROPERTY_DETAILS}>
          <PropertyDetails />
        </Route>
        <Route path={ROUTES.LISTING}>
          <Listing/>
        </Route>
        <Route path={ROUTES.SETTINGS}>
          <div>Settings</div>
        </Route>
        <Route path={ROUTES.DASHBOARD} exact>
          <Dashboard />
        </Route>
        <Route path={ROUTES.ERROR}>
          <Error/>
        </Route>
    </Switch>
  );
}
export default App;

