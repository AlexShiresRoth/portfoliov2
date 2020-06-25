import React from "react";
import { animated, useSpring } from "react-spring";
import style from "../Header.module.scss";

export const Icons = ({ icons }) => {
  const slideUpLong = useSpring({
    config: { duration: 500 },
    delay: 900,
    to: { transform: "translateY(0vh)", opacity: 1 },
    from: { transform: "translateY(30vh)", opacity: 0 },
  });
  const renderIcons = icons.map((icon, i) => {
    return (
      <a target="_blank" href={`${icon.url}`} key={i} rel="noopener noreferrer">
        {icon.icon}
      </a>
    );
  });

  return (
    <animated.div style={slideUpLong} className={style.icons}>
      {renderIcons}
    </animated.div>
  );
};
