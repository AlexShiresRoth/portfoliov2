import React, { Fragment, lazy, useRef } from "react";
import "../css/main.css";

const Header = lazy(() => import("./Header"));
const Projects = lazy(() => import("./Projects"));
const Skills = lazy(() => import("./Skills"));
const Contact = lazy(() => import("./Contact"));
const Nav = lazy(() => import("./Nav"));

const Home = () => {
  const projectsRef = useRef();
  const skillsRef = useRef();
  const contactRef = useRef();
  const headerRef = useRef();
  return (
    <Fragment>
      <Nav
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
        headerRef={headerRef}
      />
      <Header headerRef={headerRef} />
      <Projects projectsRef={projectsRef} />
      <Skills skillsRef={skillsRef} />
      <Contact contactRef={contactRef} />
    </Fragment>
  );
};

export default Home;
