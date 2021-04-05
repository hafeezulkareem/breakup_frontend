import { UserService } from ".";

import { resolveWithTimeOut } from "../../../Common/utils/TestUtils";

import signInResponse from "../../fixtures/postSignInAPIResponse.json";

class UserFixtures implements UserService {
   signInAPI() {
      return resolveWithTimeOut(signInResponse);
   }

   signUpAPI() {
      return resolveWithTimeOut({});
   }
}

export { UserFixtures };
