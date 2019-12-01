import React from "react";

import "../css/main.css";

export const Loader = () => {
  const loaderStyle = {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#000b76"
  };
  const imgStyle = {
    maxWidth: "10rem"
  };
  return (
    <div className="load-fallback" style={{ ...loaderStyle }}>
      <img
        src={
          "https://res.cloudinary.com/snackmanproductions/image/upload/v1570836532/portfolio/white_logo_transparent_background_ql1iww.png"
        }
        alt="logo"
        style={{ ...imgStyle }}
      />
    </div>
  );
};
