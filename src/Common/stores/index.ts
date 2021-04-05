import { createContext, useContext } from "react";

import { UserAPIs } from "../../Authentication/services/UserService/index.api";
import { UserFixtures } from "../../Authentication/services/UserService/index.fixture";
import UserStore from "../../Authentication/stores/UserStore";

const useFixtures = false;

function getUserAPIFixtures() {
   if (useFixtures) {
      return new UserFixtures();
   }
   return new UserAPIs();
}

const userStore = new UserStore(getUserAPIFixtures());

export const stores = { userStore };

export const StoreContext = createContext(stores);

export const useStores = () => {
   return useContext(StoreContext);
};
