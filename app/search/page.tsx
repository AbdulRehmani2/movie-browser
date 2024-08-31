"use client";
import React, { Suspense } from "react";
import Loading from "@/components/Loading";
import SearchComponent from "@/components/SearchComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search | Find all your favourite movies",
  description: "Search your favourite movies",
};
function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <SearchComponent />
    </Suspense>
  );
}

export default Page;
