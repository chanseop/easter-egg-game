"use client";
import React from "react";
import { title, subtitle } from "@/components/primitives";
import Image from "next/image";
import { Logo } from "./icons";
function TouchEggImage() {
  const [touchCount, setTouchCount] = React.useState(0);

  return (
    <>
      <div
        onClick={() => setTouchCount(touchCount + 1)}
        className={`absolute -left-6 -top-3 ${
          touchCount >= 10 ? "animate-spin" : ""
        }`}
      >
        <Image src="/egg.png" alt={"egg이미지"} width={60} height={60}></Image>
      </div>

      <h1
        className={title({
          color: "yellow",
          className: `pb-2 transition-all duration-500 ease-in-out ${
            touchCount >= 10 ? "opacity-100 visible" : "opacity-0 hidden"
          }`,
        })}
      >
        이스터에그 #10
      </h1>

      <h1
        className={title({
          color: "yellow",
          className: `pb-2 transition-all duration-500 ease-in-out ${
            touchCount >= 10 ? "opacity-0 hidden" : "opacity-100 visible"
          }`,
        })}
      >
        EasterEggGame
      </h1>
    </>
  );
}

export default TouchEggImage;
