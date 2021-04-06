import tw, { styled } from "twin.macro";
import { Link } from "react-router-dom";

import Input from "../../../Common/components/Input";
import Button from "../../../Common/components/Button";

export const SignUpPage = styled.div`
   ${tw`
        h-screen flex flex-col items-center justify-center
    `}
`;

export const TitleContainer = styled.div`
   ${tw`
        mb-16px mt-12px
    `}
`;

export const Title = styled.span`
   ${tw`
        text-lg
    `}
`;

export const LogoContainer = styled.div``;

export const FormContainer = styled.form`
   ${tw`
        flex flex-col w-full md:w-1/5 border border-solid border-darkGray10 shadow rounded-16px py-36px px-32px
    `}
`;

export const FormInput = styled(Input)`
   ${tw`
        w-full
    `}
`;

export const SubmitButton = styled(Button)`
   ${tw`
        w-full mt-8px border border-solid border-2 bg-royalBlue
    `}
   &:focus {
      ${tw`
            border-blue-800
        `}
   }
`;

export const SignInLinkContainer = styled.span`
   ${tw`
        text-gray3 text-xs mt-16px mx-auto
    `}
`;

export const SignInLink = styled(Link)`
   ${tw`
        text-persianBlue cursor-pointer
    `}
`;
