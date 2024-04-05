import * as React from "react";
import { useMotionValue, Reorder } from "framer-motion";
import { useRaisedShadow } from "./use-raised-shadow";

interface Props {
  item: string;
}

export const Item = ({ item }: Props) => {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);

  return (
    <Reorder.Item
      className="border-2 border-gray-200 rounded-md p-4 w-full text-[1.2rem] my-4 bg-white shadow-md"
      value={item}
      id={item}
      style={{ boxShadow, y }}
    >
      <span>{item}</span>
    </Reorder.Item>
  );
};
