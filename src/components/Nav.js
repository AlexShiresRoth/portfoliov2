import React, { useState } from 'react';
import PropTypes from 'prop-types';
import smoothscroll from 'smoothscroll-polyfill';
import style from './Nav.module.scss';
import { logo } from './reusable/logo';

smoothscroll.polyfill();

const Nav = ({ projectsRef, skillsRef, contactRef, fixedNav, active }) => {
	const [show, toggle] = useState(false);

	const onClick = (e) => {
		toggle(!show);
	};

	const navSvg = (
		<svg viewBox="0 0 100 100">
			<g>
				<path d="M 0 50 L100 50 Z" stroke-width="6px" stroke="#333" fill="#333" />
				<path d="M 0, 30 L100, 30 Z" stroke-width="6px" stroke="#333" fill="#333" />
				<path d="M 0, 70 L100, 70 Z" stroke-width="6px" stroke="#333" fill="#333" />
			</g>
		</svg>
	);
	const mobileMenu = (
		<div className={show ? `${style.mobile_menu} ${style.show}` : `${style.mobile_menu} ${style.hide}`}>
			<a onClick={() => handleNavClick()} href="#!">
				Home
			</a>
			<a onClick={() => handleNavClick(projectsRef)} href="#!">
				Projects
			</a>
			<a onClick={() => handleNavClick(skillsRef)} href="#!">
				Skills
			</a>
			<a onClick={() => handleNavClick(contactRef)} href="#!">
				Contact
			</a>
		</div>
	);

	const handleNavClick = (ref) => {
		toggle(false);
		window.scrollTo({
			top: ref ? ref.current.offsetTop - 70 : 0,
			left: 0,
			behavior: 'smooth',
		});
	};

	return (
		<nav className={`${style.nav__components} ${fixedNav ? style.fixed_nav : null}`}>
			<div className={style.nav__logo}>
				{logo}
				<p>Alex Roth</p>
			</div>
			<div className={style.links}>
				<a onClick={() => handleNavClick()} href="#!" className={active === 'Home' ? style.active : null}>
					Home
				</a>
				<a
					onClick={() => handleNavClick(projectsRef)}
					href="#!"
					className={active === 'Projects' ? style.active : null}
				>
					Projects
				</a>
				<a
					onClick={() => handleNavClick(skillsRef)}
					href="#!"
					className={active === 'Skills' ? style.active : null}
				>
					Skills
				</a>
				<a
					onClick={() => handleNavClick(contactRef)}
					href="#!"
					className={active === 'Contact' ? style.active : null}
				>
					Contact
				</a>
			</div>
			<div className={show ? `${style.mobile} ${style.rotated}` : style.mobile} onClick={(e) => onClick(e)}>
				{navSvg}
			</div>
			{mobileMenu}
		</nav>
	);
};

Nav.propTypes = {
	projectsRef: PropTypes.object.isRequired,
	skillsRef: PropTypes.object.isRequired,
	contactRef: PropTypes.object.isRequired,
	fixedNav: PropTypes.bool.isRequired,
	active: PropTypes.string.isRequired,
};

export default Nav;
