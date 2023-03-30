import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tw from "tailwind-styled-components";

const SliderWrapper = tw.div`
  p-10 w-[30rem]
`;
const StyledSlider = tw(Slider)`
  w-[100%] relative 
`;
const NextArrow = tw.img`
  w-5
`;
const PreArrow = tw.div`
  w-[30px] h-[30px] absolute r-[16px] z-99 
`;

const Carousel: React.FC = () => {
  // 옵션
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow src="/chevron-right.png" />,
    prevArrow: (
      <PreArrow>
        <img src="/chevron-left.png" />
      </PreArrow>
    ),
  };

  return (
    <SliderWrapper>
      <Slider {...settings} className="relative shadow-lg">
        <img src="/나도땀1.png" />
        <img src="/나도땀2.png" />
      </Slider>
    </SliderWrapper>
  );
};

export default Carousel;
