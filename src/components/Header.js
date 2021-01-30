import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import IntersectionObserver from 'intersection-observer-polyfill';
import { Icons } from './reusable/Icons';
import style from './Header.module.scss';

const Header = ({ headerRef, setNav }) => {
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

	//animations
	const fade = useSpring({
		config: { duration: 1000 },
		opacity: 1,
		from: { opacity: 0 },
	});
	const rotate = useSpring({
		config: { duration: 600 },
		delay: 1000,
		to: { transform: 'rotate(-5deg)' },
		from: { transform: 'rotate(0deg)' },
	});
	const slideUpLong = useSpring({
		config: { duration: 500 },
		delay: 900,
		to: { transform: 'translateY(0vh)', opacity: 1 },
		from: { transform: 'translateY(30vh)', opacity: 0 },
	});
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setNav({
						navPosition: false,
						active: 'Home',
					});
				}
			},

			{ rootMargin: '0px', threshold: 0.6 }
		);
		if (headerRef.current) {
			observer.observe(headerRef.current);
		}
	}, [setNav, headerRef]);

	return (
		<animated.section className={style.section__header} style={fade} ref={headerRef}>
			<animated.div className={style.title_and_desc} style={{ ...fade }}>
				<animated.div className={style.back} style={{ ...fade, ...rotate }}></animated.div>
				<animated.div className={style.text_container} style={{ ...fade }}>
					<h1>
						Hey, I'm Alex Rothenberg, <br /> a Front End Developer from NY.
					</h1>
					<div className={style.about}>
						<p>I'm passionate about all things javascript.</p>
					</div>
				</animated.div>
				<a
					href="https://res.cloudinary.com/snackmanproductions/image/upload/v1594242061/portfolio/Alex_Rothenberg_Resume_6_ntkxgr.pdf"
					download="Alex Roth Resume.pdf"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button>
						Download Resume <i className="fas fa-file-download"></i>
					</button>
				</a>
				<div className={style.separator}></div>
				<AnimatedIcons icons={urls} slideUpLong={slideUpLong} />
			</animated.div>
			<div className={style.border_bottom}></div>
		</animated.section>
	);
};

export default Header;
