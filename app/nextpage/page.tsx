import MyAnimatePresence from "@/components/nextpage/AnimatePresence/AnimatePresence";
import ReorderQuiz from "@/components/nextpage/Reorder/ReorderQuiz";
import React from "react";

function page() {
  return (
    <section className="container mx-auto">
      <ReorderQuiz />

      <div className="example-container my-[10rem] border rounded-lg overflow-hidden p-10 bg-black">
        <MyAnimatePresence />
      </div>

      <div className="flex gap-2 text-[4rem] text-white dark:text-black cursor-text text-center">
        이스터에그 #7
      </div>
    </section>
  );
}

export default page;
