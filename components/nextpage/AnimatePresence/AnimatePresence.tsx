"use client";
import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence as AP } from "framer-motion";
import { wrap } from "popmotion";
import { images } from "./image-data";
import { Logo } from "@/components/icons";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
function MyAnimatePresence() {
  const [[page, direction], setPage] = useState([0, 0]);

  //   console.log(page, direction);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      {page === -11 ? (
        <div className="flex justify-center items-center h-96 gap-2 text-4xl text-white">
          <Logo size={60} />
          이스터에그 #8
        </div>
      ) : (
        <>
          <AP initial={false} custom={direction}>
            <motion.img
              key={page}
              src={images[imageIndex]}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            />
          </AP>
          <div className="next" onClick={() => paginate(1)}>
            {"‣"}
          </div>
          <div className="prev" onClick={() => paginate(-1)}>
            {"‣"}
          </div>
          <div className="z-10 text-[4rem] text-white absolute">{page}</div>
        </>
      )}
    </>
  );
}

export default MyAnimatePresence;
