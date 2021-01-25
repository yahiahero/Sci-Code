import React from "react";
import { Route, Switch } from "react-router-dom";

import Homepage from "./screens/Homepage/Homepage";

function App() {
  return (
    <Switch>
      <Route path="/" component={Homepage} />
    </Switch>
  );
}

export default App;
