import tw, { styled } from "twin.macro";

export const PageContainer = styled.div`
   ${tw`
        h-screen flex items-center justify-center
    `}
`;

export const ImageContainer = styled.div`
   ${tw`
        w-4/5 md:w-2/5
    `}
`;

export const Image = styled.img`
   ${tw`
        w-full h-full
    `}
`;
