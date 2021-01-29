import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import ROUTES from "./utils/routes";

function App() {
  useEffect(() => {}, []);

  return (
    <Switch>
      <Route path={ROUTES.HOME_DETAILS}>
       <div>Property details</div>
      </Route>
      <Route path={ROUTES.LISTING}>
       <div>Listing</div>
      </Route>
      <Route path={ROUTES.SETTINGS}>
       <div>Settings</div>
      </Route>
      <Route path={ROUTES.DASHBOARD}>
       <div>Dashboard</div>
      </Route>
    </Switch>
  );
}

export default App;
