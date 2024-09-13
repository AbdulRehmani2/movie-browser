"use client";
import React from "react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/navigation";

function Search({
  setHidden,
}: {
  setHidden: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [value, setValue] = useState("");
  const router = useRouter();

  function searchMovie() {
    if (value == "") {
      return;
    }
    setHidden(true);
    router.push(`/search?name=${value}`);
    setValue("");
  }

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
      <button className="pl-2" onClick={searchMovie}>
        <CiSearch className="w-8 h-auto hover:text-white" />
      </button>
    </div>
  );
}

export default Search;
