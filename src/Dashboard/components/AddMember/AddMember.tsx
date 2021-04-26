import React, { useState } from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import cogoToast from "cogo-toast";

import Button from "../../../Common/components/Button";
import { useStores } from "../../../Common/stores";
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
import { isFetching } from "../../../Common/utils/APIUtils";
import { observer } from "mobx-react-lite";

interface AddMemberProps {
   closeAddMember: () => void;
}

const AddMember = observer((props: AddMemberProps) => {
   const { closeAddMember } = props;

   const [memberEmail, setMemberEmail] = useState("");

   const {
      projectsStore: { addMemberAPI, addMemberAPIStatus },
   } = useStores();

   const updateMemberMail = (event) => {
      setMemberEmail(event.target.value);
   };

   const hideAddMember = () => {
      setMemberEmail("");
      closeAddMember();
   };

   const onSuccessAddMemberAPI = () => {
      cogoToast.success("Member is added to the project successfully", {
         position: "bottom-center",
      });
      hideAddMember();
   };

   const onFailureAddMemberAPI = (addMemberAPIError: string) => {
      cogoToast.error(addMemberAPIError, {
         position: "bottom-center",
      });
   };

   const addMember = () => {
      addMemberAPI(
         { email: memberEmail },
         onSuccessAddMemberAPI,
         onFailureAddMemberAPI
      );
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
            <AddMemberButton
               color={Button.colors.primary}
               onClick={addMember}
               loading={isFetching(addMemberAPIStatus)}
            >
               <AddMemberButtonText>Add Member</AddMemberButtonText>
            </AddMemberButton>
         </MemberDataCollectorContainer>
      </AddMemberContainer>
   );
});

export { AddMember };
