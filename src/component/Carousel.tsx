import React, { ReactNode } from "react";
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tw from "tailwind-styled-components";

const SliderWrapper = tw.div`
  w-[100%] mb-5 lg:mt-10 lg:ml-7
`;
const StyledSlider = tw(Slider)`
  mx-[auto] w-[16rem] sm:w-[30rem] md:w-[30rem] lg:w-[30rem] mb-5 bg-gray-200
`;
const NextArrowImg = tw.img`
  h-[1.5rem] w-[1.5rem] sm:h-[2rem] sm:w-[2rem] 
`;
const PreArrowImg = tw.img`
  h-[1.5rem] w-[1.5rem] sm:h-[2rem] sm:w-[2rem]
`;

const NextArrow = ({
  currentSlide,
  slideCount,
  ...props
}: CustomArrowProps) => (
  <div {...props}>
    <img src="/chevron-right.png" />
  </div>
);

const PreArrow = ({ currentSlide, slideCount, ...props }: CustomArrowProps) => (
  <div {...props}>
    <img src="/chevron-left.png" />
  </div>
);

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
    nextArrow: <NextArrow />,
    prevArrow: <PreArrow />,
  };

  return (
    <SliderWrapper>
      <StyledSlider {...settings}>{children}</StyledSlider>
    </SliderWrapper>
  );
};

export default Carousel;
