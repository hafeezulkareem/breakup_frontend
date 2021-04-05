import {
   SignInAPIRequest,
   SignInAPIResponse,
   SignUpAPIRequest,
} from "../../types";

export interface UserService {
   signInAPI: (data: SignInAPIRequest) => Promise<SignInAPIResponse>;

   signUpAPI: (data: SignUpAPIRequest) => Promise<{}>;
}
