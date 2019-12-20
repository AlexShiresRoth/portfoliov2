import React from "react";
import PropTypes from "prop-types";

const Nav = props => {
  return (
    <nav className="nav__components">
      <div className="nav__logo">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <g>
            <circle
              cx="50"
              cy="50"
              r="50"
              stroke="#000b76"
              fill="#000b76"
              stroke-width="5px"
              fill-opacity="0"
              stroke-opacity="1"
            ></circle>
            <path
              d="M0,50 L50,0 m0,0 L50,50 m0,0 L0,50 m50 0 L0, 100 m0,0 L50,0 m0,100 L50,0 m50,50,L50, 0 m50,50 L50,50 m50,50, L50,50 Z"
              stroke="#000b76"
              stroke-width="5px"
              stroke-opacity="1"
            />
          </g>
        </svg>
        <p>AlexShiresRoth</p>
      </div>
      <div className="nav__components--links">
        <a>About</a>
        <a>Projects</a>
        <a>Contact</a>
      </div>
      <div className="nav__components--links--mobile">
        <svg viewBox="0 0 100 100">
          <g>
            <path
              d="M 0 50 L100 50 Z"
              stroke-width="6px"
              stroke="#333"
              fill="#333"
            />
            <path
              d="M 0, 30 L100, 30 Z"
              stroke-width="6px"
              stroke="#333"
              fill="#333"
            />
            <path
              d="M 0, 70 L100, 70 Z"
              stroke-width="6px"
              stroke="#333"
              fill="#333"
            />
          </g>
        </svg>
      </div>
    </nav>
  );
};

Nav.propTypes = {};

export default Nav;
