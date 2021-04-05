import {
   SignInAPIRequest,
   SignInAPIResponse,
   SignUpAPIRequest,
} from "../../types";

export interface AuthService {
   signInAPI: (data: SignInAPIRequest) => Promise<SignInAPIResponse>;

   signUpAPI: (data: SignUpAPIRequest) => Promise<{}>;
}
