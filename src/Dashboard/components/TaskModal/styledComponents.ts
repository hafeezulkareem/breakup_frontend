import tw, { styled } from "twin.macro";

import Button from "../../../Common/components/Button";

export const TaskModalContainer = styled.div`
   ${tw`
        flex flex-col p-16px
    `}
`;

export const TaskTitleBar = styled.div`
   ${tw`
        w-full flex justify-between items-center
    `}
`;

export const TaskTitle = styled.span`
   ${tw`
        font-bold
    `}
`;

export const TaskModalCloseButton = styled(Button)`
   ${tw`
        bg-transparent p-0
    `}
   &:hover {
      ${tw`
            bg-transparent
        `}
   }
`;

export const TaskAssigneeDetailsContainer = styled.div`
   ${tw`
        mt-8px
    `}
`;

export const TaskDetailsContainer = styled.div`
   ${tw`
        flex mt-16px
    `}
`;

export const TaskDetails = styled.div`
   ${tw`
        flex flex-col
    `}
`;

export const TaskDetailsLeftContainer = styled(TaskDetails)`
   ${tw`
        w-3/4 mr-12px
    `}
`;

export const TaskDetailsRightContainer = styled(TaskDetails)`
   ${tw`
        w-1/4 items-end
    `}
`;

export const TaskRightSectionTitle = styled.span`
   ${tw`
        text-14px text-sanJuan font-bold
    `}
`;
