import React, { Fragment, lazy } from "react";
import "../css/main.css";

const Header = lazy(() => import("./Header"));
const Projects = lazy(() => import("./Projects"));
const Skills = lazy(() => import("./Skills"));
const Contact = lazy(() => import("./Contact"));
const About = lazy(() => import("./About"));
const Nav = lazy(() => import("./Nav"));

const Home = () => {
  return (
    <Fragment>
      <Nav />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </Fragment>
  );
};

export default Home;
