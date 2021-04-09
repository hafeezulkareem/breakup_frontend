import tw, { styled } from "twin.macro";

import Button from "../../../Common/components/Button";

export const ProjectDetailsContainer = styled.div`
   ${tw`
        w-3/4 md:w-2/4 lg:w-1/4 fixed bg-white p-24px z-50
        shadow overflow-y-auto bottom-0 right-0 transform transition-transform
        duration-300
    `}
   top: 75px;
   ${({ shouldShow }) =>
      shouldShow ? tw`translate-x-0` : tw`translate-x-full`}
`;

export const TitleBar = styled.div`
   ${tw`
        flex items-center justify-between
    `}
`;

export const ProjectTitle = styled.span`
   ${tw`
        text-lg font-bold
    `}
`;

export const CloseButton = styled(Button)`
   ${tw`
        bg-transparent p-0
    `}
   &:hover {
      ${tw`
            bg-transparent
        `}
   }
`;

export const Divider = styled.div`
   ${tw`
        w-full h-px bg-darkGray10 mt-16px
    `}
`;

export const DescriptionContainer = styled.div`
   ${tw`
        mt-16px
    `}
`;

export const DescriptionTitleBar = styled.div`
   ${tw`
        flex items-center
    `}
`;

export const DescriptionText = styled.div`
   ${tw`
        ml-4px text-lg
    `}
`;

export const DescriptionEditButton = styled(Button)`
   ${tw`
        ml-12px bg-transparent p-0
    `}
   &:hover {
      ${tw`
            bg-transparent
        `}
   }
`;

export const ProjectDescription = styled.span`
   ${tw`
        text-sm text-gray-500 mt-8px
    `}
`;

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

export const MemberPicAndNameContainer = styled.div`
   ${tw`
        flex items-center
    `}
`;

export const MemberPicContainer = styled.div``;

export const MemberName = styled.span`
   ${tw`
        font-semibold ml-8px
    `}
`;

export const MemberTypeContainer = styled.div``;

export const MemberTypeText = styled.span`
   ${tw`
        text-sm text-gray-500 mt-8px
    `}
`;
