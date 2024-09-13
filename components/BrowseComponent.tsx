"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { movieType } from "@/components/Carousel";
import List from "@/components/List";
import Loading from "@/components/Loading";

function BrowseComponent() {
  const searchParams = useSearchParams();
  const list = searchParams.get("list");
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<movieType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMovies([]);
    setPage(1);
  }, [list]);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/fetch?page=${page}&list=${list}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies((prev) => [...prev, ...data]);
        setLoading(false);
      });
  }, [page, list]);

  return (
    <Suspense fallback={<Loading />}>
      <div className="min-h-[80vh] mx-3 flex flex-col items-center justify-center">
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
    </Suspense>
  );
}

export default BrowseComponent;
