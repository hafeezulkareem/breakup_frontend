import React from "react";
import { observer } from "mobx-react-lite";
import { FcGenealogy } from "react-icons/fc";

import {
   HeaderContainer,
   LogoContainer,
   Title,
   TitleAndLogoContainer,
} from "./styledComponents";

const Header = observer((props) => {
   return (
      <HeaderContainer>
         <TitleAndLogoContainer>
            <LogoContainer>
               <FcGenealogy size={42} />
            </LogoContainer>
            <Title>BreakUp</Title>
         </TitleAndLogoContainer>
      </HeaderContainer>
   );
});

export { Header };
