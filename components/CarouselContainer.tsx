import React from "react";
import Carousal from "./Carousel";

function CarouselContainer() {
  return (
    <div>
      <Carousal />
    </div>
  );
}

// async function fetchTrendingData() {
//     const data = await fetch({next: {revalidate: 86400}})
// }

export default CarouselContainer;
