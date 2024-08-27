"use client";

import React, { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import FocusElement from "./FocusElement";

function Menu({ items }: { items: string[] }) {
  const [hidden, setHidden] = useState(true);
  const hoverEffect =
    " p-1 hover:text-black hover:bg-white hover:cursor-pointer hover:rounded-sm";

  return (
    <div>
      <button disabled={!hidden} onClick={() => setHidden((prev) => !prev)}>
        <IoMenuSharp className="w-7 h-auto" />
      </button>
      <div className="w-24">
        <FocusElement hidden={hidden} setHidden={setHidden}>
          <div
            className={`flex flex-col gap-1 mt-3 bg-black py-2 px-3 rounded-md border-white border-[1px] absolute`}
          >
            {items.map((element: string, index: number) => {
              return (
                <span key={index} className={hoverEffect}>
                  {element}
                </span>
              );
            })}
          </div>
        </FocusElement>
      </div>
    </div>
  );
}

export default Menu;
