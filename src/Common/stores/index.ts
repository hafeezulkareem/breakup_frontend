import { createContext, useContext } from "react";

import { AuthAPIs } from "../../Authentication/services/AuthService/index.api";
import { AuthFixtures } from "../../Authentication/services/AuthService/index.fixture";
import AuthStore from "../../Authentication/stores/AuthStore";

const useFixtures = false;

function getUserAPIFixtures() {
   if (useFixtures) {
      return new AuthFixtures();
   }
   return new AuthAPIs();
}

const authStore = new AuthStore(getUserAPIFixtures());

export const stores = { authStore };

export const StoreContext = createContext(stores);

export const useStores = () => {
   return useContext(StoreContext);
};
