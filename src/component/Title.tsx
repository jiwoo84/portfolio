import React from "react";
import tw from "tailwind-styled-components";

interface SeparatorProps {
  length: string;
}

interface titleProps {
  title: string;
  length: string;
}

const TitleWrapper = tw.div`
`;
const TitleText = tw.h1`
  text-4xl mt-5 mb-3 font-bold
`;
const Separator = tw.div<SeparatorProps>`
  bg-green-500 h-2 ${(props) => props.length}}
`;

const Title: React.FC<titleProps> = ({ title, length }) => {
  return (
    <TitleWrapper>
      <TitleText>{title}</TitleText>
      <Separator length={length} />
    </TitleWrapper>
  );
};

export default Title;
