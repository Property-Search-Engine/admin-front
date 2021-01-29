import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import CardContainer from "./components/CardContainer";
import Sidebar from "./components/common/Sidebar/Sidebar";

import ROUTES from "./utils/routes";

function App() {
  useEffect(() => {}, []);

  return (
    <Switch>
      <Route path={ROUTES.HOME_DETAILS}>
       <div>Property details</div>
      </Route>
      <Route path={ROUTES.LISTING}>
          <Sidebar active="listing"/>
          <div>Listing</div>
      </Route>
      <Route path={ROUTES.SETTINGS}>
        <Sidebar active="settings"/>
      </Route>
      <Route path={ROUTES.DASHBOARD}>
          <Sidebar active="dashboard"/>
      </Route>
    </Switch>
  );
}

export default App;
