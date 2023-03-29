import tw from "tailwind-styled-components";
import Navbar from "../src/component/Navbar";
import Content from "./../src/component/Content";

const Display = tw.div`
  flex
`;

const Home: React.FC = () => {
  return (
    <Display>
      <Navbar />
      <Content />
    </Display>
  );
};

export default Home;
