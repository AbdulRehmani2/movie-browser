import {
  fetchLatestMovieData,
  fetchTrendingMovieData,
} from "@/utils/Moviefunctions";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const list = searchParams.get("list");
  const page = Number(searchParams.get("page"));

  let data;

  if (list == "new" && page != null) {
    data = await fetchLatestMovieData(page);
  } else if (list == "trending" && page != null) {
    data = await fetchTrendingMovieData(page);
  }

  console.log(data);

  return Response.json(data);
}
