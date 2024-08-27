import React from "react";
import ListCard from "./ListCard";

function List() {
  return (
    <>
      <h2>Trending</h2>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-4">
          {/* <ListCard data={movie}></ListCard>
          <ListCard data={movie}></ListCard>
          <ListCard data={movie}></ListCard>
          <ListCard data={movie}></ListCard>
          <ListCard data={movie}></ListCard>
          <ListCard data={movie}></ListCard>
          <ListCard data={movie}></ListCard>
          <ListCard data={movie}></ListCard> */}
        </div>
      </div>
    </>
  );
}

export default List;
