import { action, makeObservable, observable } from "mobx";

import { apiStatus } from "../../../Common/constants/APIConstants";
import { getParsedErrorMessage } from "../../../Common/utils/APIUtils";
import { setToken } from "../../../Common/utils/StorageUtils";

import { UserService } from "../../services/UserService";
import { SignInAPIRequest, SignInAPIResponse } from "../../types";

import { UserModel } from "../models/UserModel/UserModel";

class UserStore {
   userService: UserService;
   @observable signInAPIStatus!: number;
   @observable signInAPIError!: string;
   @observable signUpAPIStatus!: number;
   @observable signUpAPIError!: string;
   user!: null | UserModel;

   constructor(userService: UserService) {
      makeObservable(this);
      this.userService = userService;
      this.init();
   }

   @action.bound
   init() {
      this.user = null;
      this.signInAPIStatus = 0;
      this.signInAPIError = "";
      this.signUpAPIStatus = 0;
      this.signUpAPIError = "";
   }

   @action
   setSignInAPIStatus = (status: number) => {
      this.signInAPIStatus = status;
   };

   @action.bound
   setSignInAPIError(error) {
      this.signInAPIError = getParsedErrorMessage(error);
   }

   @action.bound
   setSignInAPIResponse(
      response: null | SignInAPIResponse,
      email: string,
      password: string
   ) {
      if (response) {
         const { id, name, token } = response;
         this.user = new UserModel({ id, name, email, password });
         setToken(token);
      }
   }

   @action.bound
   async signInAPI(
      data: SignInAPIRequest,
      onSuccess: Function = (): void => {},
      onFailure: Function = (): void => {}
   ) {
      const { email, password } = data;
      const signInAPIPromise = this.userService.signInAPI(data);
      this.setSignInAPIStatus(apiStatus.loading);
      await signInAPIPromise
         .then((data) => {
            this.setSignInAPIStatus(apiStatus.success);
            this.setSignInAPIResponse(data, email, password);
            onSuccess();
         })
         .catch((err) => {
            this.setSignInAPIStatus(apiStatus.failed);
            this.setSignInAPIError(err);
            onFailure(this.signInAPIError);
         });
   }

   @action.bound
   clear() {
      this.init();
   }
}

export { UserStore };
