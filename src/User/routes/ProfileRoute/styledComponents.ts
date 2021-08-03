import tw, { styled } from "twin.macro";

export const ProfileContainer = styled.div`
   ${tw`
      w-full
   `}
   min-height: calc(100vh - 75px)
`;

export const Container = styled.div`
   ${tw`
      flex-grow mt-75px py-24px px-44px
   `}
`;
