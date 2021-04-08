import tw, { styled } from "twin.macro";

export const ProjectPageContainer = styled.div`
   ${tw`
      w-full flex flex-col relative
   `}
   min-height: calc(100vh - 75px);
   top: 75px;
`;

export const Container = styled.div`
   ${tw`
      flex flex-col py-24px px-44px
   `}
   min-height: calc(100vh - 125px);
`;
