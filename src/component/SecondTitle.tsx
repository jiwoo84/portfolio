import tw from "tailwind-styled-components";
import { ReactNode } from "react";

const Wrapper = tw.h2`
 my-7 mx-auto py-2 px-10 sm:px-20 md:px-28 lg:px-28 text-2xl text-white font-bold bg-green-500 rounded-full  text-center shadow-lg 
`;

interface secondTitleProps {
  children: ReactNode;
}

const SecondTitle = ({ children }: secondTitleProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default SecondTitle;
