import tw, { styled } from "twin.macro";

import Button from "../../../Common/components/Button";
import { getScreenSize } from "../../../Common/utils/DisplayUtils";

const screenSize = getScreenSize();

export const ProjectStageContainer = styled.div`
   ${tw`
        mr-16px px-12px shadow-sm rounded-8px pb-12px bg-darkGray10
    `}
   height: fit-content;
   ${`min-width: ${screenSize / 4 - 60}px;`}
`;

export const StageTitleBar = styled.div`
   ${tw`
        flex items-center justify-between h-9
    `}
`;

export const StageName = styled.div`
   ${tw`
        font-bold
    `}
`;

export const StageOptionsMenuButton = styled(Button)`
   ${tw`
        bg-transparent p-0 text-xl
    `}
   &:hover {
      ${tw`
            bg-transparent
        `}
   }
`;

export const BlockContainer = styled.div`
   ${tw`
        mt-12px
    `}
`;
