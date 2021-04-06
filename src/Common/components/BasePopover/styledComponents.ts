import tw, { styled } from "twin.macro";

export const PopoverContainer = styled.div`
   ${({ mobile }) => (mobile ? tw`md:relative` : tw`relative`)}
`;
