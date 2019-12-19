import React, { useState, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import "../css/main.css";

import { Icons } from "./reusable/Icons";
import HeaderTag from "./header/HeaderTag";

const Header = _ => {
  const urls = [
    {
      icon: <i className="fab fa-github" />,
      url: `https://github.com/AlexShiresRoth?tab=repositories`
    },
    {
      icon: <i className="fab fa-codepen" />,
      url: `https://codepen.io/Alexroth96/#`
    },
    {
      icon: <i className="fab fa-twitter" />,
      url: `https://twitter.com/AlexShiresRoth`
    }
  ];

  const AnimatedIcons = animated(Icons);

  const [icons, setIcons] = useState(urls);

  //animations
  const fade = useSpring({
    config: { duration: 1000 },
    opacity: 1,
    from: { opacity: 0 }
  });
  const fillSvg = useSpring({
    config: { duration: 600 },
    x: 100,
    from: { x: 0 }
  });
  const slideDown = useSpring({
    config: { duration: 500 },
    delay: 500,
    to: { transform: "translateY(0vh)", opacity: 1 },
    from: { transform: "translateY(-20vh)", opacity: 0 }
  });
  const slideInFromLeft = useSpring({
    config: { duration: 500 },
    delay: 700,
    to: { transform: "translateX(0vh)", opacity: 1 },
    from: { transform: "translateX(30vh)", opacity: 0 }
  });
  const slideUpLong = useSpring({
    config: { duration: 500 },
    delay: 900,
    to: { transform: "translateY(0vh)", opacity: 1 },
    from: { transform: "translateY(30vh)", opacity: 0 }
  });
  useEffect(() => {
    setIcons(urls);
  }, []);

  return (
    <animated.section className="section__header" style={fade}>
      <animated.div
        className="section__header--title-and-desc"
        style={{ ...fade }}
      >
        <animated.div
          className="section__header--logo"
          style={{ ...slideDown, ...fade }}
        ></animated.div>
        <animated.div
          className="section__header--title-and-desc--h1-container"
          style={{ ...slideInFromLeft, ...fade }}
        >
          <h1>Alex Shires Roth</h1>
        </animated.div>
        <HeaderTag />
        <AnimatedIcons icons={icons} slideUpLong={slideUpLong} />
      </animated.div>
    </animated.section>
  );
};

export default Header;
