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

export const DropdownContainer = styled.div`
   ${tw`
        mt-2
    `}
`;

export const DropdownButton = styled.button`
   ${tw`
        text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center
    `}
`;

export const DropdownIcon = styled.svg`
   ${tw`
        w-4 h-4 ml-2
    `}
`;

export const DropdownList = styled.div`
   ${tw`
        bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-2
    `}
`;

export const DropdownItems = styled.div`
   ${tw`
        py-1
    `}
`;

export const DropdownItem = styled.div`
   ${tw`
        text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 cursor-pointer
    `}
`;

export const ButtonsContainer = styled.div`
   ${tw`
        flex my-2
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
