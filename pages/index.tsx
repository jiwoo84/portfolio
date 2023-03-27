import tw from "tailwind-styled-components";
import SideBar from "../src/component/Sidebar";
import Content from "./../src/component/Content";

const Display = tw.div`
  flex
`;

const Home: React.FC = () => {
  return (
    <Display>
      <SideBar />
      <Content />
    </Display>
  );
};

export default Home;
