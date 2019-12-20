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
    background: "#eee"
  };
  const svgStyle = {
    width: "10rem",
    maxWidth: "10rem"
  };
  return (
    <div className="load-fallback" style={{ ...loaderStyle }}>
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        style={{ ...svgStyle }}
        className="svg-loader"
      >
        <g>
          <circle
            cx="50"
            cy="50"
            r="50"
            stroke="#000b76"
            fill="#000b76"
            stroke-width="3px"
            fill-opacity="0"
            stroke-opacity="1"
          ></circle>
          <path
            d="M0,50 L50,0 m0,0 L50,50 m0,0 L0,50 m50 0 L0, 100 m0,0 L50,0 m0,100 L50,0 m50,50,L50, 0 m50,50 L50,50 m50,50, L50,50 Z"
            stroke="#000b76"
            stroke-width="3px"
            stroke-opacity="1"
          />
        </g>
      </svg>
    </div>
  );
};
