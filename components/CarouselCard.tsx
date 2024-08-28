import React from "react";
import { movieType } from "./Carousel";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";

function CarouselCard({ data }: { data: movieType }) {
  return (
    <div className="text-white px-5 flex gap-3 flex-col w-[90%]">
      <h1 className="text-4xl">
        <Link href={`/movie/${data.imdbId}`}>{data.name}</Link>
      </h1>
      <div>
        <div className="flex items-center gap-1">
          <span>Rating: {data.aggregateRating.ratingValue}</span>
          <FaStar className="text-yellow-500"></FaStar>
        </div>
        <span>Genre: </span>
        {data.genre.map((element: string, index: number) => {
          return (
            <span key={index}>
              {index != data.genre.length - 1 ? `${element}, ` : element}
            </span>
          );
        })}
      </div>
      <p>{data.description}</p>
    </div>
  );
}

export default CarouselCard;
