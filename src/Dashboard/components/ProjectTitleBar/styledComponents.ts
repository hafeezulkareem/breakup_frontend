import tw, { styled } from "twin.macro";

import Button from "../../../Common/components/Button";

export const TitleBarContainer = styled.div`
   ${tw`
        flex justify-between
    `}
`;

export const AddMemberButton = styled(Button)`
   ${tw`
        bg-royalBlue
    `}
`;

export const ProjectMenuButton = styled(Button)``;

export const MenuButtonText = styled.span`
   ${tw`
        ml-8px
    `}
`;

export const AddMemberContainer = styled.div`
   ${tw`
        flex relative
    `}
`;
