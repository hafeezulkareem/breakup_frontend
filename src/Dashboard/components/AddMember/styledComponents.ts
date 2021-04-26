import tw, { styled } from "twin.macro";

import Button from "../../../Common/components/Button";
import Input from "../../../Common/components/Input";

export const AddMemberContainer = styled.div`
   ${tw`
        absolute rounded-8px shadow bg-white pt-12px inset-0
    `}
   width: 320px;
   height: 125px;
   left: 56px;
`;

export const TopBar = styled.div`
   ${tw`
        flex justify-end px-12px
    `}
`;

export const CloseButton = styled(Button)`
   ${tw`
        bg-transparent
    `}
   &:hover {
      ${tw`
            bg-transparent
        `}
   }
`;

export const MemberDataCollectorContainer = styled.div`
   ${tw`
        flex flex-col px-12px mt-8px
    `}
`;

export const MemberInput = styled(Input)`
   ${tw`
        m-0
    `}
`;

export const AddMemberButton = styled(Button)`
   ${tw`
        w-32 h-10 self-start bg-royalBlue
    `}
`;

export const AddMemberButtonText = styled.span`
   ${tw`
        font-bold
    `}
`;
