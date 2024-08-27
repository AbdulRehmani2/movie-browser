"use client";
import React, { ReactElement } from "react";
import { useRef, useEffect } from "react";

interface Props {
  children: ReactElement;
  hidden: boolean;
  setHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

function FocusElement({ children, hidden, setHidden }: Props) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setHidden(true);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className={`${hidden ? "hidden" : "flex"}`}>
      {children}
    </div>
  );
}

export default FocusElement;
