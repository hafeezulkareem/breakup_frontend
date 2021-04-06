import React from "react";

import PageNotFoundImage from "../../assets/img/404.svg";

import { ImageContainer, PageContainer, Image } from "./styledComponents";

const PageNotFound = (props) => {
   return (
      <PageContainer>
         <ImageContainer>
            <Image src={PageNotFoundImage} alt={"Page not found"} />
         </ImageContainer>
      </PageContainer>
   );
};

export { PageNotFound };
