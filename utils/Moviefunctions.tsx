import { Data } from "@/components/TrendingMovieContainer";
import { movieDataType, movieType } from "@/components/Carousel";

export async function fetchTrendingMovieData(page = 1) {
  const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}&api_key=${process.env.NEXT_APP_TMDB_API_KEY}`;
  return fetchMovieData(url);
}

export async function fetchLatestMovieData(page = 1) {
  const year = new Date().getFullYear();
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_APP_TMDB_API_KEY}&year=${year}&page=${page}`;
  const data = fetchMovieData(url);
  return data;
}

export async function fetchSearchResults(name: string) {
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

  return movies.map((element) => {
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
}

// export async function getMovieFromId(id: string) {
//   const url = `https://search.imdbot.workers.dev/?tt=${id}`;
//   const res = await fetch(url);
//   const data = await res.json();
//   return {
//     ...data.short,
//     name: cleanData(data.short.name),
//     description: cleanData(data.short.description),
//     imbdId: data.imdbId,
//   };
// }
export async function getMovieFromId(id: string) {
  const url = `http://www.omdbapi.com/?apikey=${process.env.NEXT_APP_OMDB_API_KEY}&i=${id}`;
  const res = await fetch(url);
  const data = await res.json();
  return {
    name: data.Title,
    description: data.Plot,
    imdbId: data.imdbID,
    url: `https://www.imdb.com/title/${data.imdbID}/`,
    image: data.Poster,
    aggregateRating: {
      ratingValue: data.imdbRating,
    },
    type: data.Type,
    genre: data.Genre.split(","),
    actor: data.Actors.split(",").map((e: string) => {
      return { name: e, url: "#" };
    }),
  };
}

async function fetchMovieData(url: string) {
  try {
    const res = await fetch(url, { next: { revalidate: 86400 } });
    if (!res.ok) throw new Error("Failed to fetch data");

    const data = await res.json();

    const idList = await parseData(data);

    const promises = (await idList).map((element) => {
      return getDetails(element);
    });

    const details = await Promise.all(promises);

    // const movies = details.map((element: movieDataType) => {
    //   return {
    //     ...element.short,
    //     name: cleanData(element.short.name),
    //     description: cleanData(element.short.description),
    //     imdbId: element.imdbId,
    //   };
    // });

    const movies = details.map((element) => {
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

    //   const movies: {
    //     name: string;
    //     description: string;
    //     imdbId: string;
    //     url: string;
    //     image: string;
    //     aggregateRating: {
    //         ratingValue: number;
    //     };
    //     type: string;
    //     genre: string[];
    //     actor: [{
    //         name: string;
    //         url: string;
    //     }];
    // }[]

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

// async function getDetails(id: string) {
//   const res = await fetch(`https://search.imdbot.workers.dev/?tt=${id}`);
//   return await res.json();
// }

export async function getDetails(id: string) {
  const res = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.NEXT_APP_OMDB_API_KEY}&i=${id}`
  );
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
