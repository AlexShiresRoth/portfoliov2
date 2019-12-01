import React, { Fragment, lazy } from 'react';
import '../css/main.css';

const Header = lazy(() => import('./Header'));
const Projects = lazy(() => import('./Projects'));
const Skills = lazy(() => import('./Skills'));
const Contact = lazy(() => import('./Contact'));
const About = lazy(() => import('./About'));

const Home = () => {
	return (
		<Fragment>
			<Header />
			<About />
			<Projects />
			<Skills />
			<Contact />
		</Fragment>
	);
};

export default Home;
