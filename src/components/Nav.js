import React from "react";
import PropTypes from "prop-types";

const Nav = props => {
  return (
    <nav>
      <div className="nav__logo">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
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
        <p>Alex Rothenberg</p>
      </div>
      <div className="nav__components--links">
        <p>About</p>
        <p>Projects</p>
        <p>Contact</p>
      </div>
    </nav>
  );
};

Nav.propTypes = {};

export default Nav;
