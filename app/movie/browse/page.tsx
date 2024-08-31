"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { movieType } from "@/components/Carousel";
import List from "@/components/List";
import Loading from "@/components/Loading";

function page() {
  const searchParams = useSearchParams();
  const list = searchParams.get("list");
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<movieType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/fetch?page=${page}&list=${list}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies((prev) => [...prev, ...data]);
        setLoading(false);
        console.log(movies);
      });
  }, [page, list]);

  useEffect(() => {
    setMovies([]);
    setPage(1);
  }, [list]);

  return (
    <div className="h-full mx-3">
      <List
        title={`${
          list && list.slice(0, 1).toUpperCase() + list.slice(1, list.length)
        } Movies`}
        movies={movies}
      />
      {loading ? (
        <div className="flex items-center justify-center mb-5">
          <Loading />
        </div>
      ) : (
        <button
          className="w-full mx-auto py-5 hover:text-blue"
          onClick={() => {
            !loading && setPage((prev) => prev + 1);
          }}
        >
          Show More
        </button>
      )}
    </div>
  );
}

export default page;
