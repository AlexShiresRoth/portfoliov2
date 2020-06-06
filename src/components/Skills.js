import React, { useState, useEffect } from 'react';
import { iconArray } from './skills/iconArray';
import { SkillsMap } from './skills/SkillsMap';
import style from './Skills.module.scss';
import IntersectionObserver from 'intersection-observer-polyfill';

const Skills = ({ skillsRef, setNav }) => {
	const [visibility, setVisibility] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisibility(true);
					setNav({
						navPosition: true,
						active: 'Skills',
					});
				}
			},
			{ rootMargin: '0px 0px 0px 0px', threshold: 0.4 }
		);
		if (skillsRef.current) {
			observer.observe(skillsRef.current);
		}
	}, [setNav, skillsRef]);

	return (
		<section className={style.section__skills}>
			<div className={style.heading} ref={skillsRef}>
				<h2
					style={
						visibility
							? {
									opacity: 1,
									transition: 'all .4s ease-in-out',
									transform: 'translateY(0vh)',
							  }
							: {
									opacity: 0,
									transition: 'all .4s ease-in-out',
									transform: 'translateY(20vh)',
							  }
					}
				>
					Tech Skills
				</h2>
			</div>
			<div
				className={style.container}
				style={
					visibility
						? {
								opacity: 1,
								transition: 'all .8s ease-in-out',
								transform: 'translateY(0vh)',
						  }
						: {
								opacity: 0,
								transition: 'all .8s ease-in-out',
								transform: 'translateY(20vh)',
						  }
				}
			>
				<SkillsMap skills={iconArray} />
			</div>
		</section>
	);
};

export default Skills;
