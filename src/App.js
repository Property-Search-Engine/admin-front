import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Listing from "./components/Listing/Listing";
import ROUTES from "./utils/routes";
import PropertyDetails from "./components/PropertyDetails/PropertyDetails";

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
      <Route path={ROUTES.DASHBOARD}>
        <Dashboard />
      </Route>
    </Switch>
  );
}
export default App;

