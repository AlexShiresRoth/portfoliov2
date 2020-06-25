import React from "react";
import style from "../Header.module.scss";

export const Icons = ({ icons }) => {
  const renderIcons = icons.map((icon, i) => {
    return (
      <a target="_blank" href={`${icon.url}`} key={i} rel="noopener noreferrer">
        {icon.icon}
      </a>
    );
  });

  return <div className={style.icons}>{renderIcons}</div>;
};
