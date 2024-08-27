"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Search from "./Search";
import FocusElement from "./FocusElement";

function HoverSearch() {
  const [hidden, setHidden] = useState(true);

  return (
    <div>
      <button disabled={!hidden} onClick={() => setHidden((prev) => !prev)}>
        <CiSearch className="w-7 h-auto" />
      </button>
      <FocusElement hidden={hidden} setHidden={setHidden}>
        <Search />
      </FocusElement>
    </div>
  );
}

export default HoverSearch;
