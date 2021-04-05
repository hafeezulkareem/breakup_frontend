import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import { SignIn } from "./Authentication/components/SignIn";

function App() {
   return (
      <Router>
         <Switch>
            <Route path="/" component={SignIn} />
         </Switch>
      </Router>
   );
}

export default App;
