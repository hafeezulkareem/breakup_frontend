import { AuthService } from ".";

import { resolveWithTimeOut } from "../../../Common/utils/TestUtils";

import signInResponse from "../../fixtures/postSignInAPIResponse.json";

class AuthFixtures implements AuthService {
   signInAPI() {
      return resolveWithTimeOut(signInResponse);
   }

   signUpAPI() {
      return resolveWithTimeOut({});
   }
}

export { AuthFixtures };
