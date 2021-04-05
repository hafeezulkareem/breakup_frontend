import tw, { styled } from "twin.macro";

import Button from "../../../Common/components/Button";

export const TitleBarContainer = styled.div`
   ${tw`
        flex justify-between
    `}
`;

export const TitleAndIconContainer = styled.div`
   ${tw`
        flex items-center
    `}
`;

export const Title = styled.span`
   ${tw`
        text-lg font-bold mr-8px
    `}
`;

export const AddProjectButton = styled(Button)`
   ${tw`
        bg-royalBlue
    `}
`;
