import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import cogoToast from "cogo-toast";
import { FcGenealogy } from "react-icons/fc";

import Button from "../../../Common/components/Button";
import { colors } from "../../../Common/themes/colors";
import { useStores } from "../../../Common/stores";
import { isFetching } from "../../../Common/utils/APIUtils";

import {
   FormContainer,
   FormInput,
   LogoContainer,
   SignInLink,
   SignInLinkContainer,
   SignUpPage,
   SubmitButton,
   Title,
   TitleContainer,
} from "./styledComponents";

interface SignUpProps {
   goToSignInPage: () => void;
}

const SignUp = observer((props: SignUpProps) => {
   const { goToSignInPage } = props;

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

   const {
      authStore: { signUpAPI, signUpAPIStatus },
   } = useStores();

   const onSuccessSignUpAPI = () => {
      cogoToast.success("Account created successfully", {
         position: "bottom-center",
      });
      goToSignInPage();
   };

   const onFailureSignUpAPI = (signUpAPIError: string) => {
      cogoToast.error(signUpAPIError, {
         position: "bottom-center",
      });
   };

   const signUp = (event) => {
      event.preventDefault();

      if (name && email && password && confirmPassword) {
         if (password === confirmPassword) {
            signUpAPI(
               { name, email, password },
               onSuccessSignUpAPI,
               onFailureSignUpAPI
            );
         } else {
            cogoToast.error("Password and Confirm password didn't match", {
               position: "bottom-center",
            });
         }
      } else {
         cogoToast.error("Fill all the details", {
            position: "bottom-center",
         });
      }
   };

   return (
      <SignUpPage>
         <FormContainer onSubmit={signUp}>
            <LogoContainer>
               <FcGenealogy size={42} />
            </LogoContainer>
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
               type={"password"}
               placeholder={"Confirm password"}
               onChange={onChangeConfirmPassword}
               startIcon={"password"}
               iconColor={colors.gray3}
            />
            <SubmitButton
               color={Button.colors.primary}
               loading={isFetching(signUpAPIStatus)}
               onClick={signUp}
            >
               Create Account
            </SubmitButton>
            <SignInLinkContainer>
               Already have an account? <SignInLink to="/">Sign In</SignInLink>
            </SignInLinkContainer>
         </FormContainer>
      </SignUpPage>
   );
});

export { SignUp };
