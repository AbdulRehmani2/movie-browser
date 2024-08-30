import React from "react";
import Menu from "./Menu";
import HoverSearch from "./HoverSearch";
import Link from "next/link";

function Navbar() {
  const items = ["Home", "New Movies", "Top Rated Movies"];
  return (
    <div className="bg-slate-900">
      <div className="grid grid-cols-3 grid-rows-1 py-5 px-3">
        <div className="flex justify-start">
          <Menu items={items} />
        </div>
        <h1 className="flex justify-center">
          <Link href="/">Movie Browser</Link>
        </h1>
        <div className="flex justify-end">
          <HoverSearch />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
