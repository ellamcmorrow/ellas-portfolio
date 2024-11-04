"use client";
import React from "react";
import styled from "styled-components";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Title = styled.h2`
  font-size: 10rem;
  font-weight: 700;
  font-family: "Neue Montreal", Helvetica, sans-serif;
  color: white;
`;

const Character = styled(motion.span)`
  display: inline-block;
`;

const AnimatedTitle: React.FC<{
  text: string;
  startX: string;
  endX: string;
}> = ({ text, startX, endX }) => {
  const myText = text; // This would normally be passed into this component as a prop!

  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const characterAnimation = {
    hidden: {
      opacity: 0,
      x: startX,
    },
    visible: {
      opacity: 1,
      x: endX,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <Title aria-label={myText} role="heading">
      {myText.split("").map((character, index) => (
        <Character
          ref={ref}
          aria-hidden="true"
          key={index}
          initial="hidden"
          animate={ctrls}
          variants={characterAnimation}
        >
          {character}
        </Character>
      ))}
    </Title>
  );
};
export default AnimatedTitle;
