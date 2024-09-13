"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { movieType } from "@/components/Carousel";
import List from "@/components/List";
import Loading from "@/components/Loading";

function SearchComponent() {
  const [movies, setMovies] = useState<movieType[]>([]);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  useEffect(() => {
    setMovies([]);
    setLoading(true);
    fetch(`/api/search?name=${name}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      });
  }, [name]);

  return (
    <div className="mx-5 min-h-[80vh] flex items-center justify-center">
      {loading ? (
        <div className="flex justify-center my-10 items-center h-full">
          <Loading />
        </div>
      ) : movies.length == 0 ? (
        <h1 className="text-3xl">No Results found.</h1>
      ) : (
        <List title={`Search Results for ${name}`} movies={movies} />
      )}
    </div>
  );
}

export default SearchComponent;
