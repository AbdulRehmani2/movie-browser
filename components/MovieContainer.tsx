import { getMovieFromId } from "@/utils/Moviefunctions";
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Movie from "./Movie";

async function MovieContainer({ id }: { id: string }) {
  const data = await getMovieFromId(id);
  return <Movie data={data} />;
}

export default MovieContainer;
