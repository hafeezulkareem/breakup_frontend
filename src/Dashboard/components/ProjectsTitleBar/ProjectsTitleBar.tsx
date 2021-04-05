import React from "react";
import { observer } from "mobx-react-lite";
import { FcDataSheet } from "react-icons/fc";

import Button from "../../../Common/components/Button";

import {
   AddProjectButton,
   Title,
   TitleAndIconContainer,
   TitleBarContainer,
} from "./styledComponents";

const ProjectsTitleBar = observer(() => {
   return (
      <TitleBarContainer>
         <TitleAndIconContainer>
            <Title>Your Projects!</Title>
            <FcDataSheet size={28} />
         </TitleAndIconContainer>
         <AddProjectButton color={Button.colors.primary} startIcon={"add"}>
            Project
         </AddProjectButton>
      </TitleBarContainer>
   );
});

export { ProjectsTitleBar };
