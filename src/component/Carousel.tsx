import React, { ReactNode } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tw from "tailwind-styled-components";

const SliderWrapper = tw.div`
  w-[100%]
`;
const StyledSlider = tw(Slider)`
  mx-[auto] w-[16rem] sm:w-[30rem] mt-5
`;
const NextArrow = tw.img`
  h-[1.5rem] w-[1.5rem] sm:h-[2rem] sm:w-[2rem] right-[-2rem] 
`;
const PreArrow = tw.img`
  h-[1.5rem] w-[1.5rem] sm:h-[2rem] sm:w-[2rem] left-[-2rem]
`;

interface CarouselProps {
  children: ReactNode;
}

const Carousel = ({ children }: CarouselProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "50px",
    nextArrow: <NextArrow src="/chevron-right.png" />,
    prevArrow: <PreArrow src="/chevron-left.png" />,
  };

  return (
    <SliderWrapper>
      <StyledSlider {...settings}>{children}</StyledSlider>
    </SliderWrapper>
  );
};

export default Carousel;
