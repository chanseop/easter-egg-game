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
    </section>
  );
}

export default page;
