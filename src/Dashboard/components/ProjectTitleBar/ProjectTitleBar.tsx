import React from "react";
import { observer } from "mobx-react-lite";
import { TiUserAdd } from "react-icons/ti";
import { CgMenuGridR } from "react-icons/cg";

import Button from "../../../Common/components/Button";

import {
   AddMemberButton,
   MenuButtonText,
   ProjectMenuButton,
   TitleBarContainer,
} from "./styledComponents";

const ProjectTitleBar = observer((props) => {
   return (
      <TitleBarContainer>
         <AddMemberButton color={Button.colors.primary}>
            <TiUserAdd size={18} />
         </AddMemberButton>
         <ProjectMenuButton>
            <CgMenuGridR />
            <MenuButtonText>Menu</MenuButtonText>
         </ProjectMenuButton>
      </TitleBarContainer>
   );
});

export { ProjectTitleBar };
