import tw, { styled } from "twin.macro";

import Button from "../../../Common/components/Button";

export const MembersContainer = styled.div`
   ${tw`
        mt-16px
    `}
`;

export const MembersTitleBar = styled.div`
   ${tw`
        flex
    `}
`;

export const TeamText = styled.div`
   ${tw`
        ml-4px text-lg
    `}
`;

export const MembersListContainer = styled.div`
   ${tw`
        mt-12px
    `}
`;

export const MemberContainer = styled.div`
   ${tw`
        flex items-center justify-between
    `}
`;

export const LeftContainer = styled.div`
   ${tw`
        flex items-center
    `}
`;

export const MemberPicContainer = styled.div`
   ${tw`
        w-36px h-36px
    `}
`;

export const MemberNameAndRoleContainer = styled.div`
   ${tw`
        flex flex-col ml-8px
    `}
`;

export const MemberName = styled.span`
   ${tw`
        font-semibold
    `}
`;

export const MemberTypeText = styled.span`
   ${tw`
        text-sm text-gray-500 mt-2px
    `}
`;

export const MemberRemoveButton = styled(Button)`
   ${tw`
        bg-transparent p-0
    `}
   &:hover {
      ${tw`
            bg-transparent
        `}
   }
`;
