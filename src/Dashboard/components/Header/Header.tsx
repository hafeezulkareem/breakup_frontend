import React, { ReactNode } from "react";
import { observer } from "mobx-react-lite";
import { FcGenealogy } from "react-icons/fc";

import {
   HeaderContainer,
   LeftContainer,
   LogoContainer,
   Title,
   TitleAndLogoContainer,
   TitleAndNavigationContainer,
} from "./styledComponents";

interface HeaderProps {
   titleAndNavigation?: () => ReactNode;
}

const Header = observer((props: HeaderProps) => {
   const { titleAndNavigation } = props;
   const renderTitleAndNavigation = (): ReactNode => {
      if (titleAndNavigation) {
         return (
            <TitleAndNavigationContainer>
               {titleAndNavigation()}
            </TitleAndNavigationContainer>
         );
      }
      return null;
   };

   return (
      <HeaderContainer>
         <LeftContainer>
            <TitleAndLogoContainer>
               <LogoContainer>
                  <FcGenealogy size={42} />
               </LogoContainer>
               <Title>BreakUp</Title>
            </TitleAndLogoContainer>
            {renderTitleAndNavigation()}
         </LeftContainer>
      </HeaderContainer>
   );
});

export { Header };
