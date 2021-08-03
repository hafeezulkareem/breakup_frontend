import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { SignInRoute } from "./Authentication/routes/SignInRoute";
import { SignUpRoute } from "./Authentication/routes/SignUpRoute";
import { PageNotFound } from "./Common/components/PageNotFound";
import { StoreContext, stores } from "./Common/stores";
import { DashboardRoute } from "./Dashboard/routes/DashboardRoute";
import { AddProjectModal } from "./Dashboard/components/AddProjectModal";
import { ProjectRoute } from "./Dashboard/routes/ProjectRoute";
import { TaskModal } from "./Dashboard/components/TaskModal";
import { ProfileRoute } from "./User/routes/ProfileRoute";

function App() {
   return (
      <StoreContext.Provider value={stores}>
         <Router>
            <Switch>
               <Route path="/sign-in" component={SignInRoute} exact />
               <Route path="/sign-up" component={SignUpRoute} exact />
               <Route path="/" component={DashboardRoute} exact />
               <Route path="/project/:id" component={ProjectRoute} exact />
               <Route path="/profile" component={ProfileRoute} exact />
               <Route path="*" component={PageNotFound} />
            </Switch>
         </Router>
         <AddProjectModal />
         <TaskModal />
      </StoreContext.Provider>
   );
}

export default App;
