// import Image from "next/image";
import Carousel from "@/components/Carousel";
import List from "@/components/List";

export default function Home() {
  return (
    <div>
      <section className="mb-10">
        <Carousel />
      </section>
      <section className="px-5">
        <List />
      </section>
    </div>
  );
}
