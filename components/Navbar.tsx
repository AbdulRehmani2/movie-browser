import React from "react";
import { CiSearch } from "react-icons/ci";
import Menu from "./Menu";
import HoverSearch from "./HoverSearch";

function Navbar() {
  const items = [
    "Home",
    "Movies",
    "Shows",
    "Top Rated Movies",
    "Top Rated Shows",
    "Most Watched Movies",
    "Most Watched Shows",
  ];
  return (
    <div className="bg-slate-900">
      <div className="grid grid-cols-3 grid-rows-1 py-5 px-3">
        <div className="flex justify-start">
          <Menu items={items} />
        </div>
        <h1 className="flex justify-center">Movie Browser</h1>
        <div className="flex justify-end">
          <HoverSearch />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
