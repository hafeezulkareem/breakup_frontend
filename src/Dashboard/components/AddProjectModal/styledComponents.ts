import tw, { styled } from "twin.macro";

import Button from "../../../Common/components/Button";
import Input from "../../../Common/components/Input";

export const ModalContainer = styled.div`
   ${tw`
        p-16px
    `}
`;

export const TitleBar = styled.div`
   ${tw`
        flex items-center justify-between
    `}
`;

export const AddProjectTitle = styled.span`
   ${tw`
        text-lg font-semibold
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

export const ModalBodyContainer = styled.div`
   ${tw`
        mt-16px
    `}
`;

export const ProjectTitleInput = styled(Input)``;

export const ProjectDescriptionInput = styled(Input)`
   ${tw`
        w-full
    `}
`;

export const AddProjectButton = styled(Button)`
   ${tw`
        bg-royalBlue mt-8px
    `}
`;
