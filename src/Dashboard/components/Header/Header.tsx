import React, { ReactNode } from "react";
import { observer } from "mobx-react-lite";
import { FcGenealogy } from "react-icons/fc";

import MenuDropdown from "../../../Common/components/MenuDropdown/MenuDropdown";
import { useStores } from "../../../Common/stores";

import {
   HeaderContainer,
   LeftContainer,
   LogoContainer,
   Profile,
   ProfileContainer,
   RightContainer,
   Title,
   TitleAndLogoContainer,
   TitleAndNavigationContainer,
} from "./styledComponents";

interface HeaderProps {
   titleAndNavigation?: () => ReactNode;
}

const Header = observer((props: HeaderProps) => {
   const { titleAndNavigation } = props;

   const {
      userStore: { user },
   } = useStores();

   let name = "";
   if (user) {
      name = user.name;
   }

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
         <RightContainer>
            <ProfileContainer>
               <Profile
                  src="https://res.cloudinary.com/trucmachin/image/upload/c_thumb,w_400,g_face/v1607022210/avatar/spwho5a72zebv7wjfdvu.jpg"
                  className="w-full"
                  alt="avatar"
               />
            </ProfileContainer>
            <MenuDropdown user={name} />
         </RightContainer>
      </HeaderContainer>
   );
});

export { Header };
