import React, { useState } from "react";

import Button from "../../../Common/components/Button";
import { colors } from "../../../Common/themes/colors";

import {
   FormContainer,
   FormInput,
   SignInLink,
   SignInLinkContainer,
   SignUpPage,
   SubmitButton,
   Title,
   TitleContainer,
} from "./styledComponents";

const SignUp = (props) => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");

   const onChangeName = (event) => {
      setName(event.target.value);
   };

   const onChangeEmail = (event) => {
      setEmail(event.target.value);
   };

   const onChangePassword = (event) => {
      setPassword(event.target.value);
   };

   const onChangeConfirmPassword = (event) => {
      setConfirmPassword(event.target.value);
   };

   const signUp = (event) => {
      event.preventDefault();
   };

   return (
      <SignUpPage>
         <FormContainer onSubmit={signUp}>
            <TitleContainer>
               <Title>Sign up</Title>
            </TitleContainer>
            <FormInput
               value={name}
               placeholder={"Name"}
               onChange={onChangeName}
               startIcon={"person"}
               iconColor={colors.gray3}
            />
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
            <FormInput
               value={confirmPassword}
               type={"confirmPassword"}
               placeholder={"Confirm password"}
               onChange={onChangeConfirmPassword}
               startIcon={"password"}
               iconColor={colors.gray3}
            />
            <SubmitButton color={Button.colors.primary} onClick={signUp}>
               Create Account
            </SubmitButton>
            <SignInLinkContainer>
               Already have an account? <SignInLink to="/">Sign In</SignInLink>
            </SignInLinkContainer>
         </FormContainer>
      </SignUpPage>
   );
};

export { SignUp };
