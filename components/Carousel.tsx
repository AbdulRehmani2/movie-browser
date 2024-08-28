// // url, name, image, description, ratingValue, type, genre
"use client";
import React from "react";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CarouselCard from "./CarouselCard";

export interface movieType {
  url: string;
  name: string;
  image: string;
  description: string;
  aggregateRating: {
    ratingValue: number;
  };
  type: string;
  genre: string[];
  actor: [
    {
      name: string;
      url: string;
    }
  ];
  imdbId: string;
}

export interface movieDataType {
  short: movieType;
  imdbId: string;
}

export default function Carousal({ movies }: { movies: movieType[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((index) => (index + 1) % movies.length);
    }, 10000);

    return () => clearInterval(id);
  }, [index]);

  return (
    <div className="w-full relative z-[0]">
      {movies.length == 0 ? (
        <h1>Loading...</h1>
      ) : (
        <div className="h-[70vh] z-[0] relative">
          <div
            className="z-[-10] absolute inset-0 bg-[50%_25%] bg-cover opacity-75"
            style={{ backgroundImage: `url(${movies[index].image})` }}
          ></div>
          <div className="relative z-[0] flex items-center justify-between h-full px-2">
            <button
              className="cursor-pointer bg-black text-white rounded-full p-3 opacity-75 hover:opacity-100"
              onClick={() =>
                setIndex((index) =>
                  index == 0 ? movies.length - 1 : index - 1
                )
              }
            >
              <FaArrowLeft />
            </button>
            <CarouselCard data={movies[index]} />
            <button
              className="cursor-pointer bg-black text-white rounded-full p-3 opacity-75 hover:opacity-100"
              onClick={() => setIndex((index) => (index + 1) % movies.length)}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
