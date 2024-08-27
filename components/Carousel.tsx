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
  ratingValue: number;
  type: string;
  genre: string[];
}

const movie = {
  url: "https://www.imdb.com/title/tt0903747/",
  name: "Breaking Bad",
  image:
    "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
  description:
    "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student to secure his family&apos;s future.",
  ratingValue: 9.5,
  type: "TVSeries",
  genre: ["Crime", "Drama", "Thriller"],
};

export default function Carousal() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((index) => (index + 1) % 100);
    }, 5000);

    return () => clearInterval(id);
  }, [index]);

  return (
    <div className="w-full relative z-[0]">
      {movie == null ? (
        <h1>Loading...</h1>
      ) : (
        <div className="h-[50vh] z-[0] relative">
          <div
            className="z-[-10] absolute inset-0 bg-[50%_25%] bg-cover opacity-75"
            style={{ backgroundImage: `url(${movie.image})` }}
          ></div>
          <div className="relative z-[0] flex items-center justify-between h-full px-2">
            <button
              className="cursor-pointer"
              onClick={() => setIndex((index) => (index == 0 ? 99 : index - 1))}
            >
              <FaArrowLeft />
            </button>
            <CarouselCard data={movie} />
            <button
              className="cursor-pointer"
              onClick={() => setIndex((index) => (index + 1) % 100)}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
