import tw from "tailwind-styled-components";
import Navbar from "../src/module/Navbar";
import Content from "./../src/component/Content";

const Home = () => {
  return (
    <Display>
      <Navbar />
      <Content />
    </Display>
  );
};

export default Home;

const Display = tw.div`
  flex
`;
