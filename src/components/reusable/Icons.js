import React from "react";
import { animated } from "react-spring";
import style from "../Header.module.scss";

export const Icons = ({ icons, slideUpLong }) => {
  const renderIcons = icons.map((icon, i) => {
    return (
      <a target="_blank" href={`${icon.url}`} key={i}>
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
