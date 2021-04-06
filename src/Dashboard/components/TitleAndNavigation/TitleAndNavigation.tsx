import React from "react";
import { observer } from "mobx-react-lite";

import Button from "../../../Common/components/Button";
import { useStores } from "../../../Common/stores";

import {
   AllProjectsButton,
   Container,
   Divider,
   Title,
} from "./styledComponents";

interface TitleAndNavigationProps {
   goToProjects: () => void;
}

const TitleAndNavigation = observer((props: TitleAndNavigationProps) => {
   const { goToProjects } = props;

   const {
      uiStore: { projectTitle },
   } = useStores();

   return (
      <Container>
         <Title>{projectTitle ? projectTitle : "..."}</Title>
         <Divider />
         <AllProjectsButton
            color={Button.colors.primary}
            onClick={goToProjects}
         >
            All Projects
         </AllProjectsButton>
      </Container>
   );
});

export { TitleAndNavigation };
