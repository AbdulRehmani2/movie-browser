import React from "react";
import ListCard from "./ListCard";

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

function List() {
  return (
    <>
      <h2>Trending</h2>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-4">
          <ListCard data={movie}></ListCard>
          <ListCard data={movie}></ListCard>
          <ListCard data={movie}></ListCard>
          <ListCard data={movie}></ListCard>
          <ListCard data={movie}></ListCard>
          <ListCard data={movie}></ListCard>
          <ListCard data={movie}></ListCard>
          <ListCard data={movie}></ListCard>
        </div>
      </div>
    </>
  );
}

export default List;
