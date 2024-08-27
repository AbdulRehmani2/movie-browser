import React from "react";
import Carousal, { movieType, movieDataType } from "./Carousel";

async function CarouselContainer() {
  const data: movieType[] = await fetchTrendingMovieData();
  return (
    <div>
      <Carousal movies={data} />
    </div>
  );
}

interface Data {
  results: [
    {
      id: number;
    }
  ];
}

async function fetchTrendingMovieData() {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${process.env.NEXT_APP_TMDB_API_KEY}`,
      { next: { revalidate: 86400 } }
    );
    if (!res.ok) throw new Error("Failed to fetch data");

    const data = await res.json();

    const idList = await parseData(data);

    const promises = (await idList).map((element) => {
      return getDetails(element);
    });

    const details = await Promise.all(promises);

    const movies = details.map((element: movieDataType) => {
      return {
        ...element.short,
        name: cleanData(element.short.name),
        description: cleanData(element.short.description),
      };
    });

    return movies;
  } catch (err) {
    console.log(err);
    return [];
  }
}

async function parseData(data: Data) {
  let ids: number[] = [];
  data.results.map((element) => {
    ids.push(element.id);
  });
  const promises = ids.map((element: number) => {
    return getId(element);
  });

  return await Promise.all(promises);
}

async function getDetails(id: string) {
  const res = await fetch(`https://search.imdbot.workers.dev/?tt=${id}`);
  return await res.json();
}

async function getId(id: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/external_ids?api_key=${process.env.NEXT_APP_TMDB_API_KEY}`
  );
  const data = await res.json();
  return data.imdb_id;
}

function cleanData(data: string) {
  return data.replace(/&apos;/g, "'");
}

export default CarouselContainer;
