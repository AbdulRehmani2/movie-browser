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
    <div>
      <div className="flex justify-between py-5 px-3">
        <Menu items={items} />
        <h1>Movie Browser</h1>
        <HoverSearch />
      </div>
    </div>
  );
}

export default Navbar;
