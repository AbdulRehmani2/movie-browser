import React from "react";
import ListCard from "./ListCard";
import { movieType } from "./Carousel";

function List({ movies, title }: { movies: movieType[]; title: string }) {
  return (
    <div className="mt-5">
      <div className="py-3  flex justify-between items-center border-b-[1px] border-white">
        <h2 className="text-4xl">{title}</h2>
        <div className="flex gap-1 items-center">
          <button>more</button>
        </div>
      </div>
      <div className="flex items-center justify-center my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-4">
          {movies.map((element: movieType, index: number) => {
            return index < 16 && <ListCard key={index} data={element} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default List;
