import React from "react";
import { observer } from "mobx-react-lite";
import { RiCloseCircleFill, RiTeamLine } from "react-icons/ri";
import { FcBusinessman } from "react-icons/fc";

import { colors } from "../../../Common/themes/colors";

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

interface ProjectMembersProps {
   members: Array<any>;
}

const ProjectMembers = observer((props: ProjectMembersProps) => {
   const { members } = props;

   return (
      <MembersContainer>
         <MembersTitleBar>
            <RiTeamLine size={24} />
            <TeamText>Team</TeamText>
         </MembersTitleBar>
         <MembersListContainer>
            {members.map((member) => {
               const { id, name } = member;
               return (
                  <MemberContainer key={id}>
                     <LeftContainer>
                        <MemberPicContainer>
                           <FcBusinessman size={36} />
                        </MemberPicContainer>
                        <MemberNameAndRoleContainer>
                           <MemberName>{name}</MemberName>
                           <MemberTypeText>Normal</MemberTypeText>
                        </MemberNameAndRoleContainer>
                     </LeftContainer>
                     <MemberRemoveButton>
                        <RiCloseCircleFill
                           size={20}
                           color={colors.persianRed}
                        />
                     </MemberRemoveButton>
                  </MemberContainer>
               );
            })}
         </MembersListContainer>
      </MembersContainer>
   );
});

export { ProjectMembers };
