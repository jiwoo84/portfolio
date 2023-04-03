import tw from "tailwind-styled-components";
import Education from "@/src/component/Education";
import Skill from "@/src/component/Skill";
import Projects from "./Projects";
import Footer from "./Footer";
import About from "./About";

const Container = tw.div`
    flex
    flex-col
    mx-auto
    mt-20
`;

const Content: React.FC = () => {
  return (
    <Container id="about">
      <About />
      <Projects />
      <Skill />
      <Education />
      <Footer />
    </Container>
  );
};

export default Content;
