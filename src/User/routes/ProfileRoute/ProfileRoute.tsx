import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { History } from "history";

import { isSignedIn } from "../../../Common/utils/AuthUtils";
import { Header } from "../../../Dashboard/components/Header";

import { Container, ProfileContainer } from "./styledComponents";

interface ProfileRouteProps {
   history: History;
}

const ProfileRoute = observer((props: ProfileRouteProps) => {
   const { history } = props;

   if (!isSignedIn()) {
      return <Redirect to="/sign-in" />;
   }

   return (
      <ProfileContainer>
         <Header />
         <Container></Container>
      </ProfileContainer>
   );
});

const ProfileRouteWithRouter = withRouter(ProfileRoute);

export { ProfileRouteWithRouter };
