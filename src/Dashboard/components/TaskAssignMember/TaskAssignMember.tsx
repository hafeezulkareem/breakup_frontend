import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { BsFillPersonPlusFill } from "react-icons/bs";
import cogoToast from "cogo-toast";

import { useStores } from "../../../Common/stores";
import { Popover } from "../../../Common/components/Popover";

import { AssignMemberAPIRequest } from "../../types/";

import {
   AddMemberContainer,
   AssignMemberButton,
   AssignMemberButtonText,
} from "./styledComponents";

const membersListStyles = {
   width: "225px",
};

interface TaskAssignMemberProps {
   assignMemberAPI: (
      data: AssignMemberAPIRequest,
      onSuccess: () => void,
      onFailure: (error: string) => void
   ) => void;
}

const TaskAssignMember = observer((props: TaskAssignMemberProps) => {
   const { assignMemberAPI } = props;

   const [showProjectMembers, setShowProjectMembers] = useState(false);

   const {
      projectsStore: { projectDetails },
   } = useStores();

   let members: Array<{ label: string; value: string }> = [];
   if (projectDetails) {
      projectDetails.members.forEach((member) => {
         const { email, name } = member;
         members.push({ label: name, value: email });
      });
   }

   const onSuccessAssignMemberAPI = () => {
      cogoToast.success("Member assigned to task", {
         position: "bottom-center",
      });
   };

   const onFailureAssignMemberAPI = (error: string) => {
      cogoToast.error(error, {
         position: "bottom-center",
      });
   };

   const assignMember = (email: string) => {
      assignMemberAPI(
         { email },
         onSuccessAssignMemberAPI,
         onFailureAssignMemberAPI
      );
   };

   return (
      <AddMemberContainer>
         <Popover
            popoverButton={
               <AssignMemberButton
                  onClick={() => setShowProjectMembers(!showProjectMembers)}
               >
                  <BsFillPersonPlusFill size={16} />
                  <AssignMemberButtonText>Assign Member</AssignMemberButtonText>
               </AssignMemberButton>
            }
            onClickItem={assignMember}
            list={members}
            menuListStyles={membersListStyles}
         />
      </AddMemberContainer>
   );
});

export { TaskAssignMember };
