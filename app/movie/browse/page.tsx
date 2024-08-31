"use client";
import React, { Suspense } from "react";
import Loading from "@/components/Loading";
import BrowseComponent from "@/components/BrowseComponent";

function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowseComponent />
    </Suspense>
  );
}

export default Page;
