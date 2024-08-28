import MovieContainer from "@/components/MovieContainer";
import React from "react";

function pages({ params }: { params: { imdbId: string } }) {
  const imdbId = params.imdbId;
  return (
    <div>
      <MovieContainer id={imdbId} />
    </div>
  );
}

export default pages;
