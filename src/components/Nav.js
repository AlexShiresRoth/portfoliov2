import React, { useState } from "react";
import PropTypes from "prop-types";

const Nav = props => {
  const [show, toggle] = useState(false);

  const onClick = e => {
    toggle(!show);
  };

  const navSvg = (
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
  );
  const mobileMenu = (
    <div className={show ? "mobile-menu show" : "mobile-menu hide"}>
      <a>Home</a>
      <a>Projects</a>
      <a>Contact</a>
    </div>
  );
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
        <a>Home</a>
        <a>Projects</a>
        <a>Contact</a>
      </div>
      <div
        className={
          show
            ? "nav__components--links--mobile rotated"
            : "nav__components--links--mobile"
        }
        onClick={e => onClick(e)}
      >
        {navSvg}
      </div>
      {mobileMenu}
    </nav>
  );
};

Nav.propTypes = {};

export default Nav;
