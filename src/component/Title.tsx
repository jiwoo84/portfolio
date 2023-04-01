import React, { ReactNode } from "react";
import tw from "tailwind-styled-components";

interface SeparatorProps {
  length: string;
}

interface titleProps {
  length: string;
  children: ReactNode;
}

const TitleWrapper = tw.div`
`;
const TitleText = tw.h1`
  text-4xl mt-5 mb-3 font-bold
`;
const Separator = tw.div<SeparatorProps>`
  bg-green-500 h-2 ${(props) => props.length}}
`;

const Title = ({ length, children }: titleProps) => {
  return (
    <TitleWrapper>
      <TitleText>{children}</TitleText>
      <Separator length={length} />
    </TitleWrapper>
  );
};

export default Title;
