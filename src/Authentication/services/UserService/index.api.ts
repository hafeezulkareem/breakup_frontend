import { create } from "apisauce";

import { networkCallWithAxios } from "../../../Common/utils/APIUtils";
import { apiMethods } from "../../../Common/constants/APIConstants";

import {
   SignInAPIRequest,
   SignInAPIResponse,
   SignUpAPIRequest,
} from "../../types";

import { endpoints } from "../endpoints";

import { UserService } from ".";

class UserAPIs implements UserService {
   api: Record<string, any>;

   constructor() {
      this.api = create({ baseURL: "http://localhost:8000/api" });
   }

   signInAPI(data: SignInAPIRequest): Promise<SignInAPIResponse> {
      return networkCallWithAxios(
         this.api,
         endpoints.signIn,
         data,
         apiMethods.post
      );
   }

   signUpAPI(data: SignUpAPIRequest): Promise<{}> {
      return networkCallWithAxios(
         this.api,
         endpoints.signUp,
         data,
         apiMethods.post
      );
   }
}

export { UserAPIs };
