import tw, { styled } from "twin.macro";

import Button from "../../../Common/components/Button";
import Input from "../../../Common/components/Input";

export const AddStageButton = styled(Button)`
   ${tw`
        w-full flex justify-between bg-hawkesBlue
    `}
   &:hover {
      ${tw`
            bg-royalBlue10
        `}
   }
`;

export const AddStageButtonText = styled.span`
   ${tw`
        text-sm font-bold text-pictonBlue
    `}
`;

export const AddStageInput = styled(Input)`
   ${tw`
        p-8px
    `}
`;
