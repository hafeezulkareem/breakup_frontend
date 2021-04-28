import tw, { styled } from "twin.macro";

import Input from "../../../Common/components/Input";

export const TaskDescriptionContainer = styled.div`
   ${tw`
        w-full flex flex-col
    `}
`;

export const DescriptionText = styled.span`
   ${tw`
        text-14px text-darkGray font-bold
    `}
`;

export const DescriptionContainer = styled.div`
   ${tw`
        w-full flex mt-8px
    `}
`;

export const DescriptionInput = styled(Input)`
   ${tw`
        m-0
    `}
`;

export const DescriptionTextContainer = styled.div`
   ${tw`
        w-full flex bg-darkGray10 cursor-pointer rounded-4px p-8px
    `}
`;

export const Description = styled.span`
   ${tw`
        text-sm
    `}
`;

export const DescriptionPlaceholder = styled(Description)`
   ${tw`
        text-darkGray
    `}
`;
