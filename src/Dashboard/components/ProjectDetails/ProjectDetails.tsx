import React from "react";
import { observer } from "mobx-react-lite";
import { IoClose } from "react-icons/io5";
import { MdDescription } from "react-icons/md";
import { GrEdit } from "react-icons/gr";

import { UserModel } from "../../../Authentication/stores/models/UserModel";

import {
   CloseButton,
   DescriptionContainer,
   DescriptionEditButton,
   DescriptionText,
   DescriptionTitleBar,
   Divider,
   ProjectDescription,
   ProjectDetailsContainer,
   ProjectTitle,
   TitleBar,
} from "./styledComponents";
import { ProjectMembers } from "../ProjectMembers";

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
         <ProjectMembers members={members} />
      </ProjectDetailsContainer>
   );
});

export { ProjectDetails };
