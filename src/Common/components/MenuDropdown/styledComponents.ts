import tw, { styled } from "twin.macro";
import Button from "../Button";

export const DropDownButton = styled(Button)`
	${tw`bg-transparent shadow-none hover:bg-transparent focus:outline-none`}
`;

export const Menu = styled.div`
	${tw`absolute w-auto top-0 right-0 bg-white rounded-lg shadow-xl mt-11 mr-5 py-3 px-4 z-10 border border-gray-100`}
`;

export const MenuItem = styled.div`
	${tw`rounded cursor-pointer m-0 p-2 text-current list-none hover:bg-gray-200`}
`;
