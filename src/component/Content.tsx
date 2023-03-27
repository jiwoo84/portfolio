import tw from "tailwind-styled-components";
import Education from "@/src/component/Education";
import Skill from "@/src/component/Skill";
import Introduce from "./Introduce";
import Projects from "./Projects";
import { FC } from "react";

const Container = tw.div`
    flex
    flex-col
    mt-5
    mx-auto
`;

const Content: React.FC = () => {
  return (
    <Container>
      <Introduce />
      <Projects />
      <Skill />
      <Education />
    </Container>
  );
};

export default Content;
