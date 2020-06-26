import React from "react";

const HeaderTag = () => {
  const tags = [
    { title: "Full Stack Dev" },
    { title: "Front End Developer" },
    { title: "Indie Game Dev" },
  ];

  return (
    <>
      <span>{tags[1].title}</span>
    </>
  );
};

export default HeaderTag;
