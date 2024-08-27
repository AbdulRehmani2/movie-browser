"use client";
import React from "react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

function Search() {
  const [value, setValue] = useState("");

  return (
    <div className="z-[1] absolute mt-3 right-8 flex items-center bg-black text-white py-2 px-3 rounded-xl border-white border-[1px]">
      <input
        type="text"
        className="bg-black border-r-[1px] border-white outline-none"
        placeholder="Seach"
        value={value}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          setValue(e.currentTarget.value);
        }}
      />
      <button className="pl-2">
        <CiSearch className="w-8 h-auto" />
      </button>
    </div>
  );
}

export default Search;
