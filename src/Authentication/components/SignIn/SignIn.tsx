import React, { useState } from "react";

import { colors } from "../../../Common/themes/colors";
import Button from "../../../Common/components/Button";

import {
   FormContainer,
   FormInput,
   SignInPage,
   SignUpLink,
   SignUpLinkContainer,
   SubmitButton,
   Title,
   TitleContainer,
} from "./styledComponents";

const SignIn = (props) => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const onChangeEmail = (event) => {
      setEmail(event.target.value);
   };

   const onChangePassword = (event) => {
      setPassword(event.target.value);
   };

   const login = (event) => {
      event.preventDefault();
   };

   return (
      <SignInPage>
         <FormContainer onSubmit={login}>
            <TitleContainer>
               <Title>Sign In</Title>
            </TitleContainer>
            <FormInput
               value={email}
               placeholder={"Email"}
               onChange={onChangeEmail}
               startIcon={"email"}
               iconColor={colors.gray3}
            />
            <FormInput
               value={password}
               type={"password"}
               placeholder={"Password"}
               onChange={onChangePassword}
               startIcon={"password"}
               iconColor={colors.gray3}
            />
            <SubmitButton color={Button.colors.primary} onClick={login}>
               Login
            </SubmitButton>
            <SignUpLinkContainer>
               Don't have an account?{" "}
               <SignUpLink to="/sign-up">Create One</SignUpLink>
            </SignUpLinkContainer>
         </FormContainer>
      </SignInPage>
   );
};

export { SignIn };
