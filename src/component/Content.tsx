import tw from "tailwind-styled-components";
import Education from "@/src/component/Education";
import Skill from "@/src/component/Skill";
import Introduce from "./Introduce";
import Projects from "./Projects";

const Container = tw.div`
    flex
    flex-col
    mx-auto
    my-20
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
