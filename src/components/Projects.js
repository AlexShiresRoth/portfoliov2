import React, { useState, useEffect, useRef } from 'react';
import { ProjectsMap } from './projects/ProjectsMap';

import '../css/main.css';

const Projects = () => {
	const [visibility, setVisibility] = useState(false);
	const projectsRef = useRef();

	const apps = [
		{
			title: 'Italiano Bros Website',
			tech: 'Built with ReactJS, GatsbyJS, Sass, and NodeJs. ',
			desc: 'Dynamic and responsive website for a construction company.',
			img: [
				'https://res.cloudinary.com/snackmanproductions/image/upload/v1567980236/portfolio/2019-09-08_5_ciahbf.png',
			],
			url: 'http://www.italianobrosenterprise.com/',
			codeurl: 'https://github.com/AlexShiresRoth/italianobrosv2',
		},
		{
			title: 'Progress Journal',
			tech: 'built with MongoDB Atlas, Sass, Express, Javascript, NodeJS, and PassportJS.',
			desc: 'Fully functional and responsive CRUD app, ',
			img: [
				'https://res.cloudinary.com/snackmanproductions/image/upload/v1567978820/portfolio/2019-09-08_iyhfcc.png',
			],
			url: 'https://www.progressjournalsapp.com/',
			codeurl: 'https://github.com/AlexShiresRoth/progress-journal',
		},
		{
			title: 'Send Noods',
			tech: 'built with ReactJS and Redux.',
			desc: `Dynamic and responsive web app for finding ramen restaurants from search. 
        Integrated with Google Places/Maps API and`,
			img: [
				'https://res.cloudinary.com/snackmanproductions/image/upload/v1575660519/portfolio/2019-12-06_1_awxsjf.png',
			],
			url: 'https://send-noods.netlify.com/',
			codeurl: 'https://github.com/AlexShiresRoth/send-noods',
		},
		{
			title: 'Consurgo International, Inc',
			tech: 'built with ReactJS, GatsbyJS, Sass, NodeJS.',
			desc: `Responsive SPA for an exporting company,`,
			img: [
				'https://res.cloudinary.com/snackmanproductions/image/upload/v1572395030/portfolio/2019-10-29_kzfuqc.png',
			],
			url: 'https://consurgointl.com/',
			codeurl: 'https://github.com/AlexShiresRoth/consurgointl',
		},
	];

	const wip = [
		{
			title: 'Timer App',
			tech: 'PassportJS, Express, Javascript, NodeJS.',
			desc: `Simple timer app made with vanilla js and passportjs for user authentication.`,
			img: [
				'https://res.cloudinary.com/snackmanproductions/image/upload/v1567980273/portfolio/2019-09-08_8_hziqvh.png',
			],
			url: 'http://personaltimerapp.herokuapp.com/login',
			codeurl: 'https://github.com/AlexShiresRoth/timerapp',
		},
		{
			title: 'Rothenberg Law Offices',
			tech: 'Express, Javascript, NodeJS.',
			desc: `Responsive and dynamic website for a law office.`,
			img: [
				'https://res.cloudinary.com/snackmanproductions/image/upload/v1567980368/portfolio/2019-09-08_11_zbquop.png',
			],
			url: 'http://www.urmyattorney.com/',
			codeurl: 'https://github.com/AlexShiresRoth/lawoffice',
		},
	];

	const [projects, loadProjects] = useState([]);

	useEffect(() => {
		loadProjects(apps);

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.intersectionRatio > 0.5) {
					setVisibility(true);
				}
			},
			{
				root: null,
				rootMargin: '0px',
				threshold: 1.0,
			}
		);
		if (projectsRef.current) {
			observer.observe(projectsRef.current);
		}
	}, []);

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
