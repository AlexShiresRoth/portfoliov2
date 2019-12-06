import React, { useState, useEffect, useRef } from "react";

const About = () => {
  const [visibility, setVisibility] = useState(false);

  const aboutRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0.2) {
          setVisibility(true);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0
      }
    );
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
  }, []);

  return (
    <section className="section__about" ref={aboutRef}>
      <div
        className="section__about--grid"
        style={
          visibility
            ? {
                opacity: 1,
                transition: "all .4s ease-in-out",
                transform: "translateY(0vh)"
              }
            : {
                opacity: 0,
                transition: "all .4s ease-in-out",
                transform: "translateY(20vh)"
              }
        }
      >
        <h2>Hey,</h2>
        <p>
          I'm Alex Rothenberg, a self-taught full stack dev from Long Island,
          NY. Currently, I am working in the MERN stack and learning some game
          development on the side. Check out my projects below.
        </p>
      </div>
    </section>
  );
};

export default About;
