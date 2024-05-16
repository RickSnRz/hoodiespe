import React from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HomeSectionCarosel = ({data, sectionName}) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1028 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 470 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const items = data
    .slice(0, 10)
    .map((item) => <HomeSectionCard product={item} />);

  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5">
        <Carousel responsive={responsive}>{items}</Carousel>
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
