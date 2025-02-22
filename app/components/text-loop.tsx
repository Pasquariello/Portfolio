'use client'
import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import React, { useState, useEffect } from "react";

const texts = ["Software Developer", "Cyclist", "Frontend", "Backend", "Traveler", "Forever Learning"];

const variants = {
  enter: direction => {
    return {
      y: -20,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1
  },
  exit: direction => {
    return {
      zIndex: 0,
      opacity: 0
    };
  }
};

export const TextLoop = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      let next = index + 1;
      if (next === texts.length) {
        next = 0;
      }
      setIndex(next);
    }, 2.5 * 1000);
  }, [index, setIndex]);

  return (
    <>
      <AnimatePresence>
        <motion.span
          className="absolute left-0 right-0 lg:text-end"
          variants={variants}
          key={index}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            y: { type: "spring", stiffness: 300, damping: 200 },
            opacity: { duration: 0.5 }
          }}
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </>
  );
};
