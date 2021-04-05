export interface SignInAPIRequest {
   email: string;
   password: string;
}

export interface SignUpAPIRequest extends SignInAPIRequest {
   name: string;
}

export interface SignInAPIResponse {
   id: string;
   name: string;
   token: string;
}
