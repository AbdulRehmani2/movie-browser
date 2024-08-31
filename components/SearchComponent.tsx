"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { movieType } from "@/components/Carousel";
import List from "@/components/List";
import Loading from "@/components/Loading";

function SearchComponent() {
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
        <Loading />
      ) : (
        <List title={`Search Results for ${name}`} movies={movies} />
      )}
    </>
  );
}

export default SearchComponent;
