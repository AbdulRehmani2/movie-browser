import MovieContainer from "@/components/MovieContainer";
import React from "react";

function pages({ params }: { params: { imdbId: string } }) {
  const imdbId = params.imdbId;
  return (
    <div className="my-10">
      <MovieContainer id={imdbId} />
    </div>
  );
}

export default pages;
