import tw from "tailwind-styled-components";
import Education from "@/src/component/Education";
import Skill from "@/src/component/Skill";
import Footer from "./Footer";
import About from "./About";
import { Projects } from "./Projects";
import Wave from "../element/Wave";

const Content: React.FC = () => {
  return (
    <Container>
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

const Container = tw.div`
    flex
    flex-col
    mx-auto
    md:mt-20
    lg:mt-20
`;
