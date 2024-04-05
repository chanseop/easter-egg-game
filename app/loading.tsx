import { Logo } from "@/components/icons";
import React from "react";

function Loading() {
  return (
    <div className="flex gap-2 justify-center items-center text-purple-100 text-[1.5rem]">
      <Logo size={60} />
      이스터에그 #6
    </div>
  );
}

export default Loading;
