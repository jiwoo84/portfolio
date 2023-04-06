import Image from "next/image";
import tw from "tailwind-styled-components";

interface CustomImgProps {
  src: string;
  alt: string;
}
const CustomImg = ({ src, alt }: CustomImgProps) => {
  return (
    <Wrapper>
      <Img src={src} alt={alt} width="0" height="0" sizes="100vw" />
    </Wrapper>
  );
};

const Wrapper = tw.div`
    relative w-full h-full
`;
const Img = tw(Image)`
w-full h-[auto]
`;

export default CustomImg;
