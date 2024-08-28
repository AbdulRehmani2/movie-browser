import React from "react";
import { movieType } from "./Carousel";
import { fetchLatestMovieData } from "@/utils/Moviefunctions";
import List from "@/components/List";

async function LatestMovieContainer() {
  const data: movieType[] = await fetchLatestMovieData();
  const year = new Date().getFullYear();
  const LIST_TITLE = `Latest Movies of ${year}`;
  return (
    <>
      <section className="px-5">
        <List movies={data} title={LIST_TITLE} />
      </section>
    </>
  );
}

export default LatestMovieContainer;
