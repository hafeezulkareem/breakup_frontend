import tw, { styled } from "twin.macro";

import Button from "../../../Common/components/Button";

export const Container = styled.div`
   ${tw`
        flex items-center divide-x
    `}
`;

export const Title = styled.span`
   ${tw`
        font-bold
    `}
`;

export const AllProjectsButton = styled(Button)`
   ${tw`
        bg-royalBlue ml-12px
    `}
`;

export const Divider = styled.div`
   ${tw`
        w-px h-6 bg-gray3 ml-6px
    `}
`;
