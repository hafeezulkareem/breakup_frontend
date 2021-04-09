import tw, { styled } from "twin.macro";

import Button from "../../../Common/components/Button";
import Input from "../../../Common/components/Input";

export const AddTaskButton = styled(Button)`
   ${tw`
        w-full flex justify-between bg-hawkesBlue
    `}
   &:hover {
      ${tw`
            bg-royalBlue10
        `}
   }
`;

export const AddTaskButtonText = styled.span`
   ${tw`
        text-sm font-bold text-pictonBlue
    `}
`;

export const AddTaskInputContainer = styled.div`
   ${tw`
        flex flex-col
    `}
`;

export const AddTaskInput = styled(Input)`
   ${tw`
        w-full
    `}
`;

export const ButtonsContainer = styled.div`
   ${tw`
        flex
    `}
`;

export const AddButton = styled(Button)`
   ${tw`
        bg-royalBlue
    `}
`;

export const CancelButton = styled(Button)`
   ${tw`
        ml-8px
    `}
`;
