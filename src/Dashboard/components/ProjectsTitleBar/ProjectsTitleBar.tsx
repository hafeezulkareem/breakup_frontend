import React from "react";
import { observer } from "mobx-react-lite";
import { FcDataSheet } from "react-icons/fc";

import Button from "../../../Common/components/Button";
import { useStores } from "../../../Common/stores";

import {
   AddProjectButton,
   Title,
   TitleAndIconContainer,
   TitleBarContainer,
} from "./styledComponents";

const ProjectsTitleBar = observer(() => {
   const {
      uiStore: { updateAddProjectModalStatus },
   } = useStores();

   return (
      <TitleBarContainer>
         <TitleAndIconContainer>
            <Title>Your Projects!</Title>
            <FcDataSheet size={28} />
         </TitleAndIconContainer>
         <AddProjectButton
            color={Button.colors.primary}
            startIcon={"add"}
            onClick={() => updateAddProjectModalStatus(true)}
         >
            Project
         </AddProjectButton>
      </TitleBarContainer>
   );
});

export { ProjectsTitleBar };
