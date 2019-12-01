import React from "react";

import "../../css/main.css";

export const Icons = props => {
  const renderIcons = props.icons.map(icon => {
    return (
      <a target="_blank" href={`${icon.url}`}>
        {icon.icon}
      </a>
    );
  });

  return (
    <div className="section__header--title-and-desc--icons">{renderIcons}</div>
  );
};
