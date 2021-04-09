import tw, { styled } from "twin.macro";

export const TasksContainer = styled.div`
   ${tw`
        flex flex-col
    `}
   ${({ margin }) => (margin ? tw`mt-16px` : tw``)}
`;
