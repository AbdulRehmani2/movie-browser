// import Image from "next/image";
import CarouselContainer from "@/components/CarouselContainer";
import List from "@/components/List";

export default function Home() {
  return (
    <div>
      <section className="mb-10">
        <CarouselContainer />
      </section>
      <section className="px-5">
        <List />
      </section>
    </div>
  );
}
