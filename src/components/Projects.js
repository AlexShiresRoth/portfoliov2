import React, { useState, useEffect } from 'react';
import { ProjectsMap } from './projects/ProjectsMap';
import { apps } from './projects/projects';
import '../css/main.css';
import IntersectionObserver from 'intersection-observer-polyfill';

const Projects = ({ projectsRef, setNav }) => {
	const [visibility, setVisibility] = useState(false);

	const [projects, loadProjects] = useState([]);

	useEffect(() => {
		loadProjects(apps);

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
			{ rootMargin: '0px 0px -200px 0px', threshold: 1 }
		);
		if (projectsRef.current) {
			observer.observe(projectsRef.current);
		}
	}, [projectsRef, loadProjects, setNav]);

	return (
		<section className="section__projects">
			<div
				ref={projectsRef}
				className="section__projects--buttons"
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
				className="section__projects--container"
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
				<ProjectsMap projects={projects} />
			</div>
		</section>
	);
};

export default Projects;
