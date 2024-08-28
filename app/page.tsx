// import Image from "next/image";
import TrendingMovieContainer from "@/components/TrendingMovieContainer";
import LatestMovieContainer from "@/components/LatestMovieContainer";

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
