import React, { useState } from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { mens_kurta } from "../../../Data/mens_kurta";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HomeSectionCarosel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const items = mens_kurta
    .slice(0, 10)
    .map((item) => <HomeSectionCard product={item} />);

  return (
    <div className="relative p-5 border border-black">
      <Carousel responsive={responsive}>{items}</Carousel>
    </div>
  );
};

export default HomeSectionCarosel;
