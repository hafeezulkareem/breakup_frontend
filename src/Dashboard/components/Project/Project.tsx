import React from "react";
import { observer } from "mobx-react-lite";
import { FcBusinessman } from "react-icons/fc";

import { MiniProjectModel } from "../../stores/models/MiniProjectModel";

import {
   AdminProfileContainer,
   HorizontalLine,
   ProjectContainer,
   ProjectDescription,
   ProjectFooter,
   ProjectTitle,
} from "./styledComponents";

interface ProjectProps {
   project: MiniProjectModel;
}

const Project = observer((props: ProjectProps) => {
   const {
      project: { title, description },
   } = props;

   return (
      <ProjectContainer>
         <ProjectTitle title={title}>
            {title.length > 25 ? title.slice(0, 25) + "..." : title}
         </ProjectTitle>
         <ProjectDescription>{description}</ProjectDescription>
         <HorizontalLine />
         <ProjectFooter>
            <AdminProfileContainer>
               <FcBusinessman size={30} />
            </AdminProfileContainer>
         </ProjectFooter>
      </ProjectContainer>
   );
});

export { Project };
