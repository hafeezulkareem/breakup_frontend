import { createContext, useContext } from "react";

import { AuthAPIs } from "../../Authentication/services/AuthService/index.api";
import { AuthFixtures } from "../../Authentication/services/AuthService/index.fixture";
import AuthStore from "../../Authentication/stores/AuthStore";
import { UIStore } from "../../Dashboard/stores/UIStore";

const useFixtures = false;

function getUserAPIFixtures() {
   if (useFixtures) {
      return new AuthFixtures();
   }
   return new AuthAPIs();
}

const authStore = new AuthStore(getUserAPIFixtures());

const uiStore = new UIStore();

export const stores = { authStore, uiStore };

export const StoreContext = createContext(stores);

export const useStores = () => {
   return useContext(StoreContext);
};
