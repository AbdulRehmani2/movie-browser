// import Image from "next/image";
import TrendingMovieContainer from "@/components/TrendingMovieContainer";
import LatestMovieContainer from "@/components/LatestMovieContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Movie Browser | Find all your favourite movies",
  description: "Movie Browser website's home page.",
};

export default function Home() {
  return (
    <div>
      <section className="mb-10">
        <TrendingMovieContainer />
        <LatestMovieContainer />
      </section>
    </div>
  );
}
