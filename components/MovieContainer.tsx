import { getMovieFromId } from "@/utils/Moviefunctions";
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

async function MovieContainer({ id }: { id: string }) {
  const data = await getMovieFromId(id);
  return (
    <div className="h-[80vh]">
      <h1 className="ml-24 text-4xl">Movie Details</h1>
      <div className="flex h-full gap-5 items-center justify-center flex-wrap md:flex-nowrap">
        <Image
          className="rounded-lg"
          src={data.image}
          alt={data.name}
          width={350}
          height={575}
          style={{ width: "350px", height: "575px" }}
        ></Image>
        <div className="flex flex-col gap-5 max-w-[40rem]">
          <h2 className="text-4xl">{data.name}</h2>
          <div>
            <div className="flex items-center gap-1">
              <span>Rating: {data.aggregateRating.ratingValue}</span>
              <FaStar className="text-yellow-500"></FaStar>
            </div>
            <div>
              Main Cast:{" "}
              {data.actor.map(
                (element: { name: string; url: string }, index: number) => {
                  return (
                    <a
                      className="hover:text-blue-500 hover:border-b-[1px] border-blue-500"
                      href={element.url}
                      key={index}
                    >
                      {index != data.actor.length - 1
                        ? `${element.name}, `
                        : element.name}
                    </a>
                  );
                }
              )}
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
          <div className="my-3">
            <a
              href={data.url}
              className="hover:text-blue-500 hover:border-b-[1px] border-blue-500 py-2 px-1 bg-white text-black rounded-lg my-4"
            >
              Visit ImdB
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieContainer;
