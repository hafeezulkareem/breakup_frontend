import tw, { styled } from "twin.macro";

export const HeaderContainer = styled.div`
   ${tw`
        flex items-center justify-between shadow px-24px fixed top-0 left-0 right-0
    `}
   height: 75px;
`;

export const TitleAndLogoContainer = styled.div`
   ${tw`
        flex items-center
    `}
`;

export const LogoContainer = styled.div``;

export const Title = styled.span`
   ${tw`
        text-xl font-semibold ml-8px
    `}
`;