import React from "react";
import { movieType } from "./Carousel";
import Image from "next/image";
import Link from "next/link";
import notFound from "@/public/not-found.jpg";

function ListCard({ data }: { data: movieType }) {
  const NAME_CHAR_LIMIT = 17;
  return (
    <Link
      href={`/movie/${data.imdbId}`}
      className="w-[13rem] p-1 h-[20rem] flex flex-col justify-between items-center group cursor-pointer active:opacity-75"
    >
      <div className="mb-2">
        <Image
          className="group-hover:scale-105 transition-all duration-300"
          src={data.image == "N/A" ? notFound : data.image}
          alt={data.name}
          width={190}
          height={270}
          style={{ width: "190px", height: "270px" }}
        />
      </div>
      <div className="flex flex-col justify-between w-full px-2">
        <div className="hover:text-blue-500">
          {data.name.length > NAME_CHAR_LIMIT
            ? `${data.name.slice(0, NAME_CHAR_LIMIT)}...`
            : data.name}
        </div>
        <span className="text-left">
          Score: {data.aggregateRating.ratingValue}
        </span>
      </div>
    </Link>
  );
}

export default ListCard;
