import tw from "tailwind-styled-components";

const Container = tw.div`
    absolute w-[100%] h-[200px] overflow-hidden z-[-1]
`;

const Wrapper = tw.div`
    w-[100%] h-[100%]
`;

const Wave = () => {
  return (
    <Container>
      <Wrapper>
        <div className="wave01"></div>
        <div className="wave01"></div>
      </Wrapper>
    </Container>
  );
};

export default Wave;
