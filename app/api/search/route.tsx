import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");

  const url = `https://www.omdbapi.com/?apikey=${process.env.NEXT_APP_OMDB_API_KEY}&s=${name}`;
  const res = await fetch(url);
  const data = await res.json();

  const idList = data.Search.map((element: { imdbID: string }) => {
    return element.imdbID;
  });

  const promises = idList.map((element: string) => {
    return getDetails(element);
  });

  const movies = await Promise.all(promises);

  const parsedMovies = movies.map((element) => {
    return {
      name: element.Title,
      description: element.Plot,
      imdbId: element.imdbID,
      url: `https://www.imdb.com/title/${element.imdbID}/`,
      image: element.Poster,
      aggregateRating: {
        ratingValue: element.imdbRating,
      },
      type: element.Type,
      genre: element.Genre.split(","),
      actor: element.Actors.split(",").map((e: string) => {
        return { name: e, url: "#" };
      }),
    };
  });

  return NextResponse.json(parsedMovies);
}

async function getDetails(id: string) {
  const res = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.NEXT_APP_OMDB_API_KEY}&i=${id}`
  );
  return await res.json();
}
