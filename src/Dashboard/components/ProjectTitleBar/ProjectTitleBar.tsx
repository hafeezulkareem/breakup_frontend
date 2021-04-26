import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { TiUserAdd } from "react-icons/ti";
import { CgMenuGridR } from "react-icons/cg";

import Button from "../../../Common/components/Button";

import { AddMember } from "../AddMember";

import {
   AddMemberButton,
   AddMemberContainer,
   MenuButtonText,
   ProjectMenuButton,
   TitleBarContainer,
} from "./styledComponents";

interface ProjectTitleBarProps {
   showProjectDetails: () => void;
}

const ProjectTitleBar = observer((props: ProjectTitleBarProps) => {
   const [showAddMember, setShowAddMember] = useState(false);

   const { showProjectDetails } = props;

   const openAddMember = () => {
      setShowAddMember(true);
   };

   const closeAddMember = () => {
      setShowAddMember(false);
   };

   return (
      <TitleBarContainer>
         <AddMemberContainer>
            <AddMemberButton
               color={Button.colors.primary}
               onClick={openAddMember}
            >
               <TiUserAdd size={18} />
            </AddMemberButton>
            {showAddMember ? (
               <AddMember closeAddMember={closeAddMember} />
            ) : null}
         </AddMemberContainer>
         <ProjectMenuButton onClick={showProjectDetails}>
            <CgMenuGridR />
            <MenuButtonText>Menu</MenuButtonText>
         </ProjectMenuButton>
      </TitleBarContainer>
   );
});

export { ProjectTitleBar };
