"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { movieType } from "@/components/Carousel";
import List from "@/components/List";

function Page() {
  const [movies, setMovies] = useState<movieType[]>([]);
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  useEffect(() => {
    fetch(`/api/search?name=${name}`)
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, [movies]);

  return (
    <>
      {movies.length == 0 ? (
        <span>Loading...</span>
      ) : (
        <List title={`Search Results for ${name}`} movies={movies} />
      )}
    </>
  );
}

export default Page;
