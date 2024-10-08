"use client";

import React, { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import FocusElement from "./FocusElement";
import Link from "next/link";

function Menu({ items }: { items: { name: string; link: string }[] }) {
  const [hidden, setHidden] = useState(true);
  const hoverEffect =
    " p-1 hover:text-black hover:bg-white hover:cursor-pointer hover:rounded-sm";

  return (
    <div>
      <button disabled={!hidden} onClick={() => setHidden((prev) => !prev)}>
        <IoMenuSharp className="w-7 h-auto hover:text-white hover:scale-[1.05]" />
      </button>
      <div className="w-24">
        <FocusElement hidden={hidden} setHidden={setHidden}>
          <div
            className={`flex flex-col gap-1 mt-3 bg-black py-2 px-3 rounded-md border-white border-[1px] absolute z-[1]`}
          >
            {items.map(
              (element: { name: string; link: string }, index: number) => {
                return (
                  <Link
                    href={element.link}
                    key={index}
                    className={hoverEffect}
                    onClick={() => setHidden(true)}
                  >
                    {element.name}
                  </Link>
                );
              }
            )}
          </div>
        </FocusElement>
      </div>
    </div>
  );
}

export default Menu;
