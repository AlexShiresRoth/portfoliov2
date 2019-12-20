import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import '../css/main.css';

import { Icons } from './reusable/Icons';
import HeaderTag from './header/HeaderTag';

const Header = _ => {
	const urls = [
		{
			icon: <i className="fab fa-github" />,
			url: `https://github.com/AlexShiresRoth?tab=repositories`,
		},
		{
			icon: <i className="fab fa-codepen" />,
			url: `https://codepen.io/Alexroth96/#`,
		},
		{
			icon: <i className="fab fa-twitter" />,
			url: `https://twitter.com/AlexShiresRoth`,
		},
	];

	const AnimatedIcons = animated(Icons);

	const [icons, setIcons] = useState(urls);

	//animations
	const fade = useSpring({
		config: { duration: 1000 },
		opacity: 1,
		from: { opacity: 0 },
	});
	const rotate = useSpring({
		config: { duration: 600 },
		delay: 1000,
		to: { transform: 'rotate(-3deg)' },
		from: { transform: 'rotate(0deg)' },
	});
	const slideDown = useSpring({
		config: { duration: 500 },
		delay: 500,
		to: { transform: 'translateY(0vh)', opacity: 1 },
		from: { transform: 'translateY(-20vh)', opacity: 0 },
	});
	const slideInFromLeft = useSpring({
		config: { duration: 500 },
		delay: 700,
		to: { transform: 'translateX(0vh)', opacity: 1 },
		from: { transform: 'translateX(30vh)', opacity: 0 },
	});
	const slideUpLong = useSpring({
		config: { duration: 500 },
		delay: 900,
		to: { transform: 'translateY(0vh)', opacity: 1 },
		from: { transform: 'translateY(30vh)', opacity: 0 },
	});
	useEffect(() => {
		setIcons(urls);
	}, []);

	return (
		<animated.section className="section__header" style={fade}>
			<animated.div className="section__header--title-and-desc" style={{ ...fade }}>
				<animated.div
					className="section__header--title-and-desc--back"
					style={{ ...fade, ...rotate }}
				></animated.div>
				<animated.div
					className="section__header--title-and-desc--text-container"
					style={{ ...slideInFromLeft, ...fade }}
				>
					<h1>Hey,</h1>
					<div className="section__header--title-and-desc--text-container--about">
						<p>
							I'm Alex Rothenberg, a <HeaderTag /> from Long Island, NY. Currently, I am working in the
							MERN stack and learning some game development on the side. Check out my projects below.
						</p>
					</div>
				</animated.div>
				<div className="separator"></div>
				<AnimatedIcons icons={icons} slideUpLong={slideUpLong} />
			</animated.div>
		</animated.section>
	);
};

export default Header;
