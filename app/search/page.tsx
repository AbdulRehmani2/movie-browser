"use client";
import React, { Suspense } from "react";
import Loading from "@/components/Loading";
import SearchComponent from "@/components/SearchComponent";

function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <SearchComponent />
    </Suspense>
  );
}

export default Page;
