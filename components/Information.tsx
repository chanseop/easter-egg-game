"use client";
import React, { useEffect, useState } from "react";
import InformationIcon from "./icon/InformationIcon";
import { Logo } from "./icons";

function Information() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const hoverElement = document.getElementById("hoverElement");
    if (hoverElement) {
      hoverElement.addEventListener("mouseover", () => {
        setOpen(true);
      });
    }
    localStorage.setItem("EasterEgg#9", "EasterEgg#9");
  }, []);

  return (
    <div className="relative">
      <div id="hoverElement" onMouseOut={() => setOpen(false)}>
        <InformationIcon />
      </div>
      <div
        className={`absolute -left-[9rem]  top-6 h-[22rem] w-[20rem] transition-all rounded-lg bg-slate-100 dark:text-black ${
          open ? "" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-4 p-4">
          <h3 className="text-2xl font-bold">이스터에그란?</h3>
          <p>
            이스터에그란 소프트웨어나 컴퓨터 프로그램, 게임 등에 숨겨진 기능이나
            메시지를 말합니다.
          </p>
          <p>
            이스터에그는 소프트웨어 개발자가 자신의 작품에 대한 자신감을
            드러내거나 사용자들에게 재미를 주기 위해 숨겨둡니다.
          </p>

          <p className="text-lg font-semibold">아래의 모양의 찾으세요.</p>
          <div className="flex gap-1 bg-white p-2 rounded-lg justify-center items-center">
            <Logo /> 이스터에그 #숫자
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
