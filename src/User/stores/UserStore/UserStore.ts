import { action, observable } from "mobx";

import { UserModel } from "../models/UserModel";

class UserStore {
   @observable user!: null | UserModel;

   constructor() {
      this.init();
   }

   @action.bound
   init() {
      this.user = null;
   }

   @action.bound
   setUserDetails({ id, name, email, password }) {
      this.user = new UserModel({ id, name, email, password });
   }
}

export { UserStore };
