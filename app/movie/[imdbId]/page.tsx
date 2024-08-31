import MovieContainer from "@/components/MovieContainer";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Movie Details | Find all your favourite movies",
  description: "Show all the details related to the movie",
};

function Page({ params }: { params: { imdbId: string } }) {
  const imdbId = params.imdbId;
  return (
    <div className="my-10">
      <MovieContainer id={imdbId} />
    </div>
  );
}

export default Page;
