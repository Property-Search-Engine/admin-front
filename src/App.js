import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard"; 
import Login from "./components/Login/Login";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import SignUp from "./components/SignUp/SignUp";

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
      <Route path={ROUTES.LOGIN}>
          <Login />
      </Route>
      <Route path={ROUTES.SIGNUP}>
          <SignUp />
      </Route>
      <Route path={ROUTES.RESET_PASSWORD}>
          <ResetPassword />
      </Route>
      <Route path={ROUTES.DASHBOARD}>
         <Dashboard/>
      </Route>
    </Switch>
  );
}

export default App;
