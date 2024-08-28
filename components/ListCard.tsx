import React from "react";
import { movieType } from "./Carousel";
import Image from "next/image";

function ListCard({ data }: { data: movieType }) {
  const NAME_CHAR_LIMIT = 17;
  return (
    <div className="w-[13rem] p-1 h-[20rem] flex flex-col justify-between items-center group cursor-pointer">
      <Image
        className="group-hover:scale-105 transition-all duration-300"
        src={data.image}
        alt={data.name}
        width={190}
        height={350}
        style={{ width: "190px", height: "350px" }}
      />
      <div className="flex flex-col justify-between w-full px-2">
        <span>
          {data.name.length > NAME_CHAR_LIMIT
            ? `${data.name.slice(0, NAME_CHAR_LIMIT)}...`
            : data.name}
        </span>
        <span className="text-left">
          Score: {data.aggregateRating.ratingValue}
        </span>
      </div>
    </div>
  );
}

export default ListCard;
