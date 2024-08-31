import MovieContainer from "@/components/MovieContainer";
import React from "react";

function Page({ params }: { params: { imdbId: string } }) {
  const imdbId = params.imdbId;
  return (
    <div className="my-10">
      <MovieContainer id={imdbId} />
    </div>
  );
}

export default Page;
