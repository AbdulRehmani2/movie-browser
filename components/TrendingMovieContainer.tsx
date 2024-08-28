import React from "react";
import Carousal, { movieType } from "./Carousel";
import { fetchTrendingMovieData } from "@/utils/Moviefunctions";
import List from "@/components/List";

async function TrendingMovieContainer() {
  const data: movieType[] = await fetchTrendingMovieData();
  const LIST_TITLE = `Trending movies of all time`;
  return (
    <>
      <section>
        <Carousal movies={data} />
      </section>
      <section className="px-5">
        <List movies={data} title={LIST_TITLE} />
      </section>
    </>
  );
}

export interface Data {
  results: [
    {
      id: number;
    }
  ];
}

export default TrendingMovieContainer;
