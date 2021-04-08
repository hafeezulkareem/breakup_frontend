import tw, { styled } from "twin.macro";

export const StagesContainer = styled.div`
   ${tw`
        flex flex-grow p-16px mt-16px rounded-8px bg-catskillWhite overflow-x-auto
    `}
`;

export const StageContainer = styled.div`
   ${tw`
        pr-16px
    `}
   min-width: calc(25% - 12px);
`;
