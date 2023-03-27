import Education from "@/src/component/Education";
import Skill from "@/src/component/Skill";
import Introduce from "./../src/component/Introduce";
import Projects from "./../src/component/Projects";
import tw from "tailwind-styled-components";
import SideBar from "../src/component/Sidebar";

const Display = tw.div`
  flex
`;

const Content = tw.div``;

export default function Home() {
  return (
    <Display>
      <SideBar />
      <Content>
        <Introduce />
        <Projects />
        <Skill />
        <Education />
      </Content>
    </Display>
  );
}
