"use client";
import React, { Suspense } from "react";
import Loading from "@/components/Loading";
import BrowseComponent from "@/components/BrowseComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Browse Movies | Find all your favourite movies",
  description: "Browse all the new and trending movies",
};
function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowseComponent />
    </Suspense>
  );
}

export default Page;
