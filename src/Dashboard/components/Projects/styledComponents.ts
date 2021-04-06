import tw, { styled } from "twin.macro";

import Button from "../../../Common/components/Button";

export const ProjectsPage = styled.div`
   ${tw`
        flex flex-col
    `}
`;

export const ProjectsContainer = styled.div`
   ${tw`
        grid mt-16px
    `}
   ${({ singleCol }) =>
      singleCol
         ? tw`grid-cols-1`
         : tw`grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-min`}
   min-height: calc(100vh - 179px);
`;

export const CenterContainer = styled.div`
   ${tw`
        flex items-center justify-center self-center mx-auto
    `}
   ${({ col }) => (col ? tw`flex-col` : tw`flex-row`)}
`;

export const GetProjectsErrorMessage = styled.span``;

export const RetryButton = styled(Button)`
   ${tw`
        bg-royalBlue
    `}
`;

export const NoProjects = styled.span`
   ${tw`
        text-lg
    `}
`;
