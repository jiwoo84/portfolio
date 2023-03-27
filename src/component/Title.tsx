import React from "react";
import Project from "./Project";
import tw from "tailwind-styled-components";

const Container = tw.h1`
  text-4xl mt-5 mb-3 font-bold 
`;

interface titleProps {
  title: string;
  length: string;
}

const Title: React.FC<titleProps> = ({ title }) => {
  const Separator = tw.div`
  bg-blue-500 h-2 w-[8rem] mb-10
`;
  return (
    <>
      <Container>{title}</Container>
      <Separator />
    </>
  );
};

export default Title;
