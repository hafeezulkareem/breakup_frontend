import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import cogoToast from "cogo-toast";

import { colors } from "../../../Common/themes/colors";
import Button from "../../../Common/components/Button";
import { useStores } from "../../../Common/stores";
import { isFetching } from "../../../Common/utils/APIUtils";

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

interface SignInProps {
   goToDashboard: () => void;
}

const SignIn = observer((props: SignInProps) => {
   const { goToDashboard } = props;

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const onChangeEmail = (event) => {
      setEmail(event.target.value);
   };

   const onChangePassword = (event) => {
      setPassword(event.target.value);
   };

   const {
      authStore: { signInAPI, signInAPIStatus },
   } = useStores();

   const onFailureSignIn = (signInAPIError: string) => {
      cogoToast.error(signInAPIError, {
         position: "bottom-center",
      });
   };

   const signIn = (event) => {
      event.preventDefault();
      if (email && password) {
         signInAPI({ email, password }, goToDashboard, onFailureSignIn);
      } else {
         cogoToast.error("Fill all the details", {
            position: "bottom-center",
         });
      }
   };

   return (
      <SignInPage>
         <FormContainer onSubmit={signIn}>
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
            <SubmitButton
               color={Button.colors.primary}
               onClick={signIn}
               loading={isFetching(signInAPIStatus)}
            >
               Login
            </SubmitButton>
            <SignUpLinkContainer>
               Don't have an account?{" "}
               <SignUpLink to="/sign-up">Create One</SignUpLink>
            </SignUpLinkContainer>
         </FormContainer>
      </SignInPage>
   );
});

export { SignIn };
