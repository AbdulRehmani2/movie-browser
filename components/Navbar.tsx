import React from "react";
import Menu from "./Menu";
import HoverSearch from "./HoverSearch";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

function Navbar() {
  const items = [
    { name: "Home", link: "/" },
    { name: "New Movies", link: "/movie/browse?list=new" },
    { name: "Top Rated Movies", link: "/movie/browse?list=trending" },
  ];
  return (
    <div className="bg-slate-900">
      <div className="grid grid-cols-3 grid-rows-1 py-5 px-10">
        <div className="flex justify-start items-center">
          <Menu items={items} />
        </div>
        <h1 className="flex justify-center items-center">
          <Link href="/">
            <Image
              src={logo}
              alt="movie browser"
              width={100}
              height={100}
            ></Image>
          </Link>
        </h1>
        <div className="flex justify-end items-center">
          <HoverSearch />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
