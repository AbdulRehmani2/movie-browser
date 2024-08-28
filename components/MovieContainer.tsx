import { getMovieFromId } from "@/utils/Moviefunctions";
import React from "react";

async function MovieContainer({ id }: { id: string }) {
  const data = await getMovieFromId(id);
  return <div>{data.name}</div>;
}

export default MovieContainer;
