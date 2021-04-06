import tw, { styled } from "twin.macro";

import Button from "../../../Common/components/Button";

export const ProjectsPage = styled.div`
   ${tw`
        flex flex-col
    `}
`;

export const ProjectsContainer = styled.div`
   ${tw`
        flex mt-16px
    `}
   min-height: calc(100vh - 179px);
`;

export const CenterContainer = styled.div`
   ${tw`
        flex items-center self-center mx-auto
    `}
`;

export const GetProjectsErrorMessage = styled.span`
   ${tw`
    `}
`;

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
