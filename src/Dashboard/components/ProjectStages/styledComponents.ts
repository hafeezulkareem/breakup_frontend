import tw, { styled } from "twin.macro";

import Button from "../../../Common/components/Button";

export const StagesContainer = styled.div`
   ${tw`
       flex flex-grow rounded-8px bg-catskillWhite p-16px mt-16px overflow-x-auto
    `}
`;

export const StageContainer = styled.div`
   ${tw`
        flex flex-col pr-16px
    `}
   min-width: calc(25% - 12px);
   max-width: calc(25% - 12px);
`;

export const CenterContainer = styled(StagesContainer)`
   ${tw`
        flex-col items-center justify-center
    `}
`;

export const GetProjectsErrorMessage = styled.span``;

export const RetryButton = styled(Button)`
   ${tw`
        bg-royalBlue mt-16px
    `}
`;
