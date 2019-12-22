import React, { Fragment, lazy, useRef, useState } from 'react';
import '../css/main.css';

const Header = lazy(() => import('./Header'));
const Projects = lazy(() => import('./Projects'));
const Skills = lazy(() => import('./Skills'));
const Contact = lazy(() => import('./Contact'));
const Nav = lazy(() => import('./Nav'));

const Home = () => {
	const projectsRef = useRef();
	const skillsRef = useRef();
	const contactRef = useRef();
	const headerRef = useRef();
	const [nav, setNav] = useState({
		navPosition: false,
		active: '',
	});
	const { navPosition, active } = nav;

	return (
		<Fragment>
			<Nav
				fixedNav={navPosition}
				active={active}
				projectsRef={projectsRef}
				skillsRef={skillsRef}
				contactRef={contactRef}
				headerRef={headerRef}
			/>
			<Header headerRef={headerRef} setNav={setNav} />
			<Projects projectsRef={projectsRef} setNav={setNav} />
			<Skills skillsRef={skillsRef} setNav={setNav} />
			<Contact contactRef={contactRef} setNav={setNav} />
		</Fragment>
	);
};

export default Home;
