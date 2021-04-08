import React from "react";
import { observer } from "mobx-react-lite";
import { IoClose } from "react-icons/io5";
import { MdDescription } from "react-icons/md";
import { GrEdit } from "react-icons/gr";
import { RiTeamLine } from "react-icons/ri";
import { FcBusinessman } from "react-icons/fc";

import { UserModel } from "../../../Authentication/stores/models/UserModel";

import {
   CloseButton,
   DescriptionContainer,
   DescriptionEditButton,
   DescriptionText,
   DescriptionTitleBar,
   Divider,
   MemberContainer,
   MemberName,
   MemberPicAndNameContainer,
   MemberPicContainer,
   MembersContainer,
   MembersListContainer,
   MembersTitleBar,
   MemberTypeContainer,
   MemberTypeText,
   ProjectDescription,
   ProjectDetailsContainer,
   ProjectTitle,
   TeamText,
   TitleBar,
} from "./styledComponents";

interface ProjectDetailsProps {
   shouldShow: boolean;
   hideProjectDetails: () => void;
   title: string;
   description: string;
   members: Array<UserModel>;
}

const ProjectDetails = observer((props: ProjectDetailsProps) => {
   const {
      shouldShow,
      hideProjectDetails,
      title,
      description,
      members,
   } = props;

   return (
      <ProjectDetailsContainer shouldShow={shouldShow}>
         <TitleBar>
            <ProjectTitle>{title}</ProjectTitle>
            <CloseButton disableShadow onClick={hideProjectDetails}>
               <IoClose size={24} />
            </CloseButton>
         </TitleBar>
         <Divider />
         <DescriptionContainer>
            <DescriptionTitleBar>
               <MdDescription size={20} />
               <DescriptionText>Description</DescriptionText>
               <DescriptionEditButton disableShadow>
                  <GrEdit size={18} />
               </DescriptionEditButton>
            </DescriptionTitleBar>
            <ProjectDescription>{description}</ProjectDescription>
         </DescriptionContainer>
         <Divider />
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
                        <MemberPicAndNameContainer>
                           <MemberPicContainer>
                              <FcBusinessman size={24} />
                           </MemberPicContainer>
                           <MemberName>{name}</MemberName>
                        </MemberPicAndNameContainer>
                        <MemberTypeContainer>
                           <MemberTypeText>Normal</MemberTypeText>
                        </MemberTypeContainer>
                     </MemberContainer>
                  );
               })}
            </MembersListContainer>
         </MembersContainer>
      </ProjectDetailsContainer>
   );
});

export { ProjectDetails };
