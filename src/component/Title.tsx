import React from "react";
import tw from "tailwind-styled-components";

interface SeparatorProps {
  length: string;
}

interface titleProps {
  title: string;
  length: string;
}

const Container = tw.h1`
  text-4xl mt-5 mb-3 font-bold
`;
const Separator = tw.div<SeparatorProps>`
  bg-blue-500 h-2 mb-10 ${(props) => `w-[${props.length}rem]`}
`;

const Title: React.FC<titleProps> = ({ title, length }) => {
  return (
    <>
      <Container>{title}</Container>
      <Separator length={length} />
    </>
  );
};

export default Title;
