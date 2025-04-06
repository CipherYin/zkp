"use client";

import React, { useState, useRef, useEffect } from "react";

type TooltipProps = {
  children: React.ReactNode;
  content: React.ReactNode;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
};

const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
//   position = "top-right",
}) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

//   const getPositionClass = () => {
//     switch (position) {
//       case "top-left":
//         return "bottom-full left-0 mb-2";
//       case "top-right":
//         return "bottom-full right-0 mb-2";
//       case "bottom-left":
//         return "top-full left-0 mt-2";
//       case "bottom-right":
//       default:
//         return "top-full right-0 mt-2";
//     }
//   };

  return (
    <div
      ref={ref}
      className="relative inline-block"
      onClick={() => {
        if (isMobile) {
          setVisible((v) => !v);
        }
      }}
      onMouseEnter={() => {
        if (!isMobile) setVisible(true);
      }}
      onMouseLeave={() => {
        if (!isMobile) setVisible(false);
      }}
    >
      {children}
      {visible && (
        <div
          className={`absolute z-50 bg-white text-[#676767] text-[2vw] 2xl:text-[0.55vw] -mt-2 rounded-xl p-2 2xl:p-4 shadow-xl left-12 whitespace-nowrap transition-all duration-200`}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
