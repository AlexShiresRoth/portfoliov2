import React, { useState, useEffect } from 'react';
import { ProjectsMap } from './projects/ProjectsMap';
import { apps } from './projects/projects';
import style from './Projects.module.scss';
import IntersectionObserver from 'intersection-observer-polyfill';

const Projects = ({ projectsRef, setNav }) => {
	const [visibility, setVisibility] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisibility(true);
					setNav({
						navPosition: true,
						active: 'Projects',
					});
				}
			},
			{ rootMargin: '0px 0px -200px 0px', threshold: 0.8 }
		);
		if (projectsRef.current) {
			observer.observe(projectsRef.current);
		}
	}, [setNav, projectsRef]);

	return (
		<section className={style.section__projects}>
			<div className={style.border_top}></div>
			<div
				ref={projectsRef}
				className={style.buttons}
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
				<h2>Projects</h2>
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
								transition: 'all .4s ease-in-out',
								transform: 'translateY(20vh)',
						  }
				}
			>
				<ProjectsMap projects={apps} />
			</div>
			<div className={style.border_bottom}></div>
		</section>
	);
};

export default Projects;
