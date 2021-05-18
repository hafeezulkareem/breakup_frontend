import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { BsFillPersonPlusFill } from "react-icons/bs";

import { useStores } from "../../../Common/stores";
import { Popover } from "../../../Common/components/Popover";

import {
   AddMemberContainer,
   AssignMemberButton,
   AssignMemberButtonText,
} from "./styledComponents";

const membersListStyles = {
   width: "225px",
};

const TaskAssignMember = observer((props) => {
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
            onClickItem={(value) => {
               console.log(value);
            }}
            list={members}
            menuListStyles={membersListStyles}
         />
      </AddMemberContainer>
   );
});

export { TaskAssignMember };
