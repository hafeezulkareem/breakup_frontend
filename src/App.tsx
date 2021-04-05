import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { SignInRoute } from "./Authentication/routes/SignInRoute";
import { SignUpRoute } from "./Authentication/routes/SignUpRoute";
import { PageNotFound } from "./Common/components/PageNotFound";
import { StoreContext, stores } from "./Common/stores";
import { DashboardRoute } from "./Dashboard/routes/DashboardRoute";

function App() {
   return (
      <StoreContext.Provider value={stores}>
         <Router>
            <Switch>
               <Route path="/sign-in" component={SignInRoute} exact />
               <Route path="/sign-up" component={SignUpRoute} exact />
               <Route path="/" component={DashboardRoute} exact />
               <Route path="*" component={PageNotFound} />
            </Switch>
         </Router>
      </StoreContext.Provider>
   );
}

export default App;
