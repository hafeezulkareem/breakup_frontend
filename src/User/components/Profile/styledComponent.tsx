import tw, { styled } from "twin.macro";

export const ProfileContainer = styled.div`
   ${tw`
      flex
   `}
`;

export const ProfileImageContainer = styled.div`
   ${tw`
      bg-red-100
   `}
   width: 128px;
   height: 128px;
`;

export const ProfileImage = styled.img`
   ${tw`
      w-full h-full
   `}
`;

export const UserDetailsContainer = styled.div`
   ${tw`
      flex flex-col ml-12px
   `}
`;

export const Username = styled.p`
   ${tw`
      p-0 m-0 text-gray-500 font-bold
   `}
`;

export const UserEmailAndPassword = styled.p`
   ${tw`
      p-0 m-0 mt-8px text-gray-500 font-semibold
   `}
`;
