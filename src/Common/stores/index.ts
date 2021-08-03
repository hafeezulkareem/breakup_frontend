import { createContext, useContext } from "react";

import { AuthAPIs } from "../../Authentication/services/AuthService/index.api";
import { AuthFixtures } from "../../Authentication/services/AuthService/index.fixture";
import AuthStore from "../../Authentication/stores/AuthStore";
import { ProjectsAPIs } from "../../Dashboard/services/ProjectsService/index.api";
import { ProjectsFixtures } from "../../Dashboard/services/ProjectsService/index.fixture";
import { StagesAPIs } from "../../Dashboard/services/StagesService/index.api";
import { StagesFixtures } from "../../Dashboard/services/StagesService/index.fixture";
import { TasksAPIs } from "../../Dashboard/services/TasksService/index.api";
import { TasksFixture } from "../../Dashboard/services/TasksService/index.fixture";
import { ProjectsStore } from "../../Dashboard/stores/ProjectsStore";
import { StagesStore } from "../../Dashboard/stores/StagesStore";
import { TasksStore } from "../../Dashboard/stores/TasksStore";
import { TaskUIStore } from "../../Dashboard/stores/TaskUIStore";
import { UIStore } from "../../Dashboard/stores/UIStore";
import { UserStore } from "../../User/stores/UserStore";

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

function getStagesFixtures() {
   if (useFixtures) {
      return new StagesFixtures();
   }
   return new StagesAPIs();
}

function getTasksFixtures() {
   if (useFixtures) {
      return new TasksFixture();
   }
   return new TasksAPIs();
}

const userStore = new UserStore();
const authStore = new AuthStore(getUserAPIFixtures(), userStore);
const uiStore = new UIStore();
const tasksStore = new TasksStore(getTasksFixtures());
const stagesStore = new StagesStore(getStagesFixtures(), tasksStore);
const projectsStore = new ProjectsStore(getProjectsFixtures(), stagesStore);
const taskUIStore = new TaskUIStore();

export const stores = {
   userStore,
   authStore,
   uiStore,
   projectsStore,
   stagesStore,
   tasksStore,
   taskUIStore,
};

export const StoreContext = createContext(stores);

export const useStores = () => {
   return useContext(StoreContext);
};
