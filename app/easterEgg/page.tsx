import { Logo } from "@/components/icons";
import { title, subtitle } from "@/components/primitives";
import React from "react";

function page() {
  return (
    <>
      <div>
        <h2
          className={subtitle({
            class:
              "my-10 mb-20 text-center text-black text-[1.5rem] font-bold pl-6",
          })}
        >
          Github가 궁금했던 당신 개발자의 자격이 있다.
        </h2>
      </div>
      <div className="flex gap-2 justify-center items-center text-red-600 text-[1.5rem]">
        <Logo size={60} />
        이스터에그 #5
      </div>
    </>
  );
}

export default page;
