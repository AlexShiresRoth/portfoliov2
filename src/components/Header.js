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
	const fillSvg = useSpring({
		config: { duration: 600 },
		x: 100,
		from: { x: 0 },
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
			<animated.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" strokeDashoffset={fillSvg.x}>
				<path
					fill="#00095d"
					d="M0,96L60,80C120,64,240,32,360,64C480,96,600,192,720,224C840,256,960,224,1080,213.3C1200,203,1320,213,1380,218.7L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
				></path>
			</animated.svg>
			<animated.div className="section__header--title-and-desc" style={{ ...fade }}>
				<animated.div className="section__header--logo" style={{ ...slideDown, ...fade }}>
					<img
						src={
							'https://res.cloudinary.com/snackmanproductions/image/upload/v1570836532/portfolio/white_logo_transparent_background_ql1iww.png'
						}
						alt="asr logo"
					/>
				</animated.div>
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
