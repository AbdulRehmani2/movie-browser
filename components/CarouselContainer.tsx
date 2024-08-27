import React from "react";
import Carousal from "./Carousel";

async function CarouselContainer() {
  return (
    <div>
      <Carousal />
    </div>
  );
}

// async function fetchTrendingMovieData() {
//   try {
//     const res = await fetch(
//       `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${process.env.NEXT_APP_TMDB_API_KEY}`,
//       { next: { revalidate: 86400 } }
//     );
//     if (!res.ok) throw new Error("Failed to fetch data");
//     const data = await res.json();
//     console.log(data);
//     return data;
//   } catch (err) {
//     console.log(err);
//     return null;
//   }
// }

// async function fetchTrendingShowsData() {
//   const res = await fetch(
//     "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
//     { next: { revalidate: 86400 } }
//   );
// }

export default CarouselContainer;
