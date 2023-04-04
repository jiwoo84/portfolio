import tw from "tailwind-styled-components";
import Education from "@/src/component/Education";
import Skill from "@/src/component/Skill";
import Footer from "./Footer";
import About from "./About";
import { Projects } from "./Projects";
import Wave from "./Wave";

const Container = tw.div`
    flex
    flex-col
    mx-auto
    mt-20
`;

const Content: React.FC = () => {
  return (
    <Container id="about">
      <Wave />
      <About />
      <Projects />
      <Skill />
      <Education />
      <Footer />
    </Container>
  );
};

export default Content;
