import tw, { styled } from "twin.macro";

import Button from "../../../Common/components/Button";

export const AddMemberContainer = styled.div`
   ${tw`
        w-full flex flex-col mt-12px relative
    `}
`;

export const AssignMemberButton = styled(Button)`
   ${tw`
        text-black flex justify-start items-center px-12px bg-darkGray10
    `}
   &:hover {
      ${tw`
            bg-gainsboro
        `}
   }
`;

export const AssignMemberButtonText = styled.span`
   ${tw`
        ml-6px
    `}
`;
