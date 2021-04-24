import tw, { styled } from "twin.macro";

import Button from "../../../Common/components/Button";

export const EditButton = styled(Button)`
   ${tw`
        hidden bg-transparent p-0
    `}
   &:hover {
      ${tw`
            bg-transparent
        `}
   }
`;

export const TaskDraggableContainer = styled.div`
   ${tw`
        mt-12px
    `}
   &:first-child {
      ${tw`
         mt-0
       `}
   }
`;

export const TaskContainer = styled.div`
   ${tw`
        flex flex-col bg-white rounded-8px shadow p-12px cursor-pointer
        transition-all duration-100
    `}
   &:hover {
      ${EditButton} {
         ${tw`
            inline
          `}
      }
      ${tw`
         bg-porcelain
      `}
   }
   ${({ isDragging }) => (isDragging ? tw`transform rotate-6` : tw``)}
`;

export const TitleBar = styled.div`
   ${tw`
        flex items-center justify-between
    `}
`;

export const TaskTitleContainer = styled.div`
   ${tw`
      flex flex-wrap
   `}
`;

export const TaskTitle = styled.span`
   ${tw`
      text-sm font-semibold
    `}
`;
