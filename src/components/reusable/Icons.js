import React from "react";
import { animated } from "react-spring";
import "../../css/main.css";

export const Icons = ({ icons, slideUpLong }) => {
  const renderIcons = icons.map(icon => {
    return (
      <a target="_blank" href={`${icon.url}`}>
        {icon.icon}
      </a>
    );
  });

  return (
    <animated.div
      style={slideUpLong}
      className="section__header--title-and-desc--icons"
    >
      {renderIcons}
    </animated.div>
  );
};
