import tw, { styled } from "twin.macro";
import Button from "../../../Common/components/Button";

export const StagesContainer = styled.div`
   ${tw`
        flex flex-grow p-16px mt-16px rounded-8px bg-catskillWhite overflow-x-auto
    `}
`;

export const StageContainer = styled.div`
   ${tw`
        flex flex-col pr-16px
    `}
   min-width: calc(25% - 12px);
   max-width: calc(25% - 12px);
`;

export const CenterContainer = styled.div`
   ${tw`
        flex flex-col self-center mx-auto
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
