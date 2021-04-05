import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import { SignIn } from "./Authentication/components/SignIn";
import { SignUp } from "./Authentication/components/SignUp";
import { PageNotFound } from "./Common/components/PageNotFound";
import { StoreContext, stores } from "./Common/stores";
import { Projects } from "./Dashboard/components/Projects";

function App() {
   return (
      <StoreContext.Provider value={stores}>
         <Router>
            <Switch>
               <Route path="/" component={SignIn} exact />
               <Route path="/sign-up" component={SignUp} exact />
               <Route path="/dashboard" component={Projects} exact />
               <Route path="*" component={PageNotFound} />
            </Switch>
         </Router>
      </StoreContext.Provider>
   );
}

export default App;
