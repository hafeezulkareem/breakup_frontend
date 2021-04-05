import { action, makeObservable, observable } from "mobx";

import { apiStatus } from "../../../Common/constants/APIConstants";
import { getParsedErrorMessage } from "../../../Common/utils/APIUtils";
import { setToken } from "../../../Common/utils/StorageUtils";

import { AuthService } from "../../services/AuthService";
import {
   SignInAPIRequest,
   SignInAPIResponse,
   SignUpAPIRequest,
} from "../../types";

import { UserModel } from "../models/UserModel/UserModel";

class AuthStore {
   authService: AuthService;
   @observable signInAPIStatus!: number;
   @observable signInAPIError!: string;
   @observable signUpAPIStatus!: number;
   @observable signUpAPIError!: string;
   user!: null | UserModel;

   constructor(authService: AuthService) {
      makeObservable(this);
      this.authService = authService;
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

   @action.bound
   setSignInAPIStatus(status: number) {
      this.signInAPIStatus = status;
   }

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
      const signInAPIPromise = this.authService.signInAPI(data);
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
   setSignUpAPIStatus(status: number) {
      this.signUpAPIStatus = status;
   }

   @action.bound
   setSignUpAPIError(error) {
      this.signUpAPIError = getParsedErrorMessage(error);
   }

   @action.bound
   async signUpAPI(
      data: SignUpAPIRequest,
      onSuccess: Function = (): void => {},
      onFailure: Function = (): void => {}
   ) {
      const signUpAPIPromise = this.authService.signUpAPI(data);
      this.setSignUpAPIStatus(apiStatus.loading);
      await signUpAPIPromise
         .then((data) => {
            this.setSignUpAPIStatus(apiStatus.success);
            onSuccess();
         })
         .catch((err) => {
            this.setSignUpAPIStatus(apiStatus.failed);
            this.setSignUpAPIError(err);
            onFailure(this.signUpAPIError);
         });
   }

   @action.bound
   clear() {
      this.init();
   }
}

export { AuthStore };
