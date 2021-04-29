import React from "react";
import { observer } from "mobx-react-lite";
import { RiCloseCircleFill, RiTeamLine } from "react-icons/ri";
import { FcBusinessman } from "react-icons/fc";

import { colors } from "../../../Common/themes/colors";
import { useStores } from "../../../Common/stores";

import { MemberDetails } from "../../types";

import {
   LeftContainer,
   MemberContainer,
   MemberName,
   MemberNameAndRoleContainer,
   MemberPicContainer,
   MemberRemoveButton,
   MembersContainer,
   MembersListContainer,
   MembersTitleBar,
   MemberTypeText,
   TeamText,
} from "./styledComponents";

const ProjectMembers = observer((props) => {
   const {
      projectsStore: { projectDetails },
   } = useStores();
   let members: Array<MemberDetails> = [];
   if (projectDetails) {
      members = projectDetails.members;
   }

   return (
      <MembersContainer>
         <MembersTitleBar>
            <RiTeamLine size={24} />
            <TeamText>Team</TeamText>
         </MembersTitleBar>
         <MembersListContainer>
            {members.map((member) => {
               const { id, name, role } = member;
               return (
                  <MemberContainer key={id}>
                     <LeftContainer>
                        <MemberPicContainer>
                           <FcBusinessman size={36} />
                        </MemberPicContainer>
                        <MemberNameAndRoleContainer>
                           <MemberName>{name}</MemberName>
                           <MemberTypeText>{`${
                              role.charAt(0) + role.slice(1).toLowerCase()
                           }`}</MemberTypeText>
                        </MemberNameAndRoleContainer>
                     </LeftContainer>
                     {role !== "ADMIN" ? (
                        <MemberRemoveButton>
                           <RiCloseCircleFill
                              size={20}
                              color={colors.persianRed}
                           />
                        </MemberRemoveButton>
                     ) : null}
                  </MemberContainer>
               );
            })}
         </MembersListContainer>
      </MembersContainer>
   );
});

export { ProjectMembers };
