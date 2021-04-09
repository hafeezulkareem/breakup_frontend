import { createContext, useContext } from "react";

import { AuthAPIs } from "../../Authentication/services/AuthService/index.api";
import { AuthFixtures } from "../../Authentication/services/AuthService/index.fixture";
import AuthStore from "../../Authentication/stores/AuthStore";
import { ProjectsAPIs } from "../../Dashboard/services/ProjectsService/index.api";
import { ProjectsFixtures } from "../../Dashboard/services/ProjectsService/index.fixture";
import { ProjectsStore } from "../../Dashboard/stores/ProjectsStore";
import { StagesStore } from "../../Dashboard/stores/StagesStore";
import { TasksStore } from "../../Dashboard/stores/TasksStore";
import { UIStore } from "../../Dashboard/stores/UIStore";

const useFixtures = false;

function getUserAPIFixtures() {
   if (useFixtures) {
      return new AuthFixtures();
   }
   return new AuthAPIs();
}

function getProjectsFixtures() {
   if (useFixtures) {
      return new ProjectsFixtures();
   }
   return new ProjectsAPIs();
}

const authStore = new AuthStore(getUserAPIFixtures());
const uiStore = new UIStore();
const tasksStore = new TasksStore();
const stagesStore = new StagesStore(tasksStore);
const projectsStore = new ProjectsStore(getProjectsFixtures(), stagesStore);

export const stores = {
   authStore,
   uiStore,
   projectsStore,
   stagesStore,
   tasksStore,
};

export const StoreContext = createContext(stores);

export const useStores = () => {
   return useContext(StoreContext);
};
