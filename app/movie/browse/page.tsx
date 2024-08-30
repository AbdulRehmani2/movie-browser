"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { movieType } from "@/components/Carousel";
import List from "@/components/List";

function page() {
  const searchParams = useSearchParams();
  const list = searchParams.get("list");
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<movieType[]>([]);

  useEffect(() => {
    fetch(`/api/fetch?page=${page}&list=${list}`)
      .then((res) => res.json())
      .then((data) => setMovies((prev) => [...prev, ...data]));
  }, [page]);

  return (
    <div className="h-full">
      {movies.length == 0 ? (
        <span>Loading...</span>
      ) : (
        <List title={`${list} Movies`} movies={movies} />
      )}
      <button onClick={() => setPage((prev) => prev + 1)}>Show More</button>
    </div>
  );
}

export default page;
