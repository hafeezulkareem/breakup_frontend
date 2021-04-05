import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import { SignIn } from "./Authentication/components/SignIn";
import { SignUp } from "./Authentication/components/SignUp";
import { PageNotFound } from "./Common/components/PageNotFound";

function App() {
   return (
      <Router>
         <Switch>
            <Route path="/" component={SignIn} exact />
            <Route path="/sign-up" component={SignUp} exact />
            <Route path="*" component={PageNotFound} />
         </Switch>
      </Router>
   );
}

export default App;
