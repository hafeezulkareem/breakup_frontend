import React, { useState } from "react";
import { RiCloseCircleFill } from "react-icons/ri";

import Button from "../../../Common/components/Button";
import { colors } from "../../../Common/themes/colors";

import { CloseButton } from "../AddProjectModal/styledComponents";

import {
   AddMemberButton,
   AddMemberButtonText,
   AddMemberContainer,
   MemberDataCollectorContainer,
   MemberInput,
   TopBar,
} from "./styledComponents";

interface AddMemberProps {
   closeAddMember: () => void;
}

const AddMember = (props: AddMemberProps) => {
   const { closeAddMember } = props;

   const [memberEmail, setMemberEmail] = useState("");

   const updateMemberMail = (event) => {
      setMemberEmail(event.target.value);
   };

   const hideAddMember = () => {
      setMemberEmail("");
      closeAddMember();
   };

   return (
      <AddMemberContainer>
         <TopBar>
            <CloseButton disableShadow onClick={hideAddMember}>
               <RiCloseCircleFill size={20} color={colors.persianRed} />
            </CloseButton>
         </TopBar>
         <MemberDataCollectorContainer>
            <MemberInput
               placeholder="Enter email"
               value={memberEmail}
               onChange={updateMemberMail}
               fullWidth
               autoFocus
            />
            <AddMemberButton color={Button.colors.primary}>
               <AddMemberButtonText>Add Member</AddMemberButtonText>
            </AddMemberButton>
         </MemberDataCollectorContainer>
      </AddMemberContainer>
   );
};

export { AddMember };
