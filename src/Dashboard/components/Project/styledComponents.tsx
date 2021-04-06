import tw, { styled } from "twin.macro";

export const ProjectContainer = styled.div`
   ${tw`
        flex flex-col shadow py-16px px-12px rounded-6px cursor-pointer
    `}
   height: max-content;
`;

export const ProjectTitle = styled.span``;

export const ProjectDescription = styled.span`
   ${tw`
        text-sm mt-12px
    `}
`;

export const HorizontalLine = styled.div`
   ${tw`
        border border-solid border-darkGray10 mt-12px
    `}
`;

export const ProjectFooter = styled.div`
   ${tw`
        flex items-center mt-12px
    `}
`;

export const AdminProfileContainer = styled.div`
   ${tw`
        w-8 h-8 flex items-center justify-center shadow rounded-full
    `}
`;
