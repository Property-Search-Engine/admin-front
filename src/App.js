import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

// import ROUTES from "./utils/routes";

function App() {
  useEffect(() => {}, []);

  return (
    <Switch>
      <Route path={'/users'}>
       <div>Hello world</div>
      </Route>
    </Switch>
  );
}

export default App;
