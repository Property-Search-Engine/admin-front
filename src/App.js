import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import ListContainer from "../src/components/ListingContainer/ListContainer";

import ROUTES from "./utils/routes";

function App() {
  useEffect(() => {}, []);

  return (
    <Switch>
      <Route path={ROUTES.HOME_DETAILS}>
        <div>Property details</div>
      </Route>
      <Route path={ROUTES.LISTING}>
        <div>
          <ListContainer />
        </div>
      </Route>
      <Route path={ROUTES.SETTINGS}>
        <div>Settings</div>
      </Route>
      <Route path={ROUTES.DASHBOARD}></Route>
    </Switch>
  );
}

export default App;
