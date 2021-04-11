import tw, { styled } from "twin.macro";

export const TasksContainer = styled.div`
   ${tw`
        flex flex-col
    `}
   min-height: 1px;
   ${({ margin }) => (margin ? tw`mt-12px` : tw``)}
`;
