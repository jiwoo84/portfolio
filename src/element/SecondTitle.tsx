import tw from "tailwind-styled-components";
import { ReactNode } from "react";

interface secondTitleProps {
  children: ReactNode;
}

const SecondTitle = ({ children }: secondTitleProps) => {
  return (
    <Wrapper>
      <Title>{children}</Title>
    </Wrapper>
  );
};

export default SecondTitle;

const Wrapper = tw.div`
  flex justify-center mt-10 mb-5 
`;
const Title = tw.h2`
hover:scale-105 mx-auto py-2 px-10 sm:px-20 md:px-28 lg:px-28 text-xl md:text-2xl lg:text-2xl text-white font-bold bg-green-500 rounded-full  text-center shadow-lg 
`;
