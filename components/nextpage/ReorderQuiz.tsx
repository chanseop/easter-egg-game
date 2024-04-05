"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { Reorder } from "framer-motion";
import { Item } from "./Item";
import { Logo } from "../icons";

const initialItems = ["🍅 토마토", "🧀 치즈", "🍞 빵"];
function ReorderQuiz() {
  const [items, setItems] = useState(initialItems);
  const [correct, setCorrect] = useState(false);

  useEffect(() => {
    if (
      JSON.stringify(items) ===
      JSON.stringify(["🍞 빵", "🧀 치즈", "🍅 토마토"])
    ) {
      setCorrect(true);
    }
  }, [items]);

  return (
    <>
      {correct ? (
        <div className="flex gap-2 text-[1.5rem] text-green-500">
          <Logo />
          이스터에그 #7
        </div>
      ) : (
        <>
          <h2 className="text-[2rem]  font-bold">미니게임</h2>
          <p className="text-[#696969] mb-2">
            순서를 조합해서 정답을 찾으시오.
          </p>
          <Reorder.Group
            className="border-2 border-gray-200 rounded-md p-4 w-full mx-auto bg-black shadow-md"
            axis="y"
            onReorder={setItems}
            values={items}
          >
            {items.map((item) => (
              <Item key={item} item={item} />
            ))}
          </Reorder.Group>
        </>
      )}
    </>
  );
}

export default ReorderQuiz;
