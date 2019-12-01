import React, { useState, useEffect, useRef } from 'react';
import { ProjectsMap } from './projects/ProjectsMap';

import '../css/main.css';

const Projects = () => {
	const apps = [
		{
			title: 'Italiano Bros Website',
			tech: 'ReactJS, Express, Javascript, NodeJS',
			desc: 'Simple, dynamic and responsive website for a construction company.',
			img: [
				'https://res.cloudinary.com/snackmanproductions/image/upload/v1567980236/portfolio/2019-09-08_5_ciahbf.png',
			],
			url: 'http://www.italianobrosenterprise.com/',
			codeurl: 'https://github.com/AlexShiresRoth/italiano-bros',
		},
		{
			title: 'Progress Journal',
			tech: 'MongoDB Atlas, Express, Javascript, NodeJS, PassportJS',
			desc: 'Fully CRUD operational web app. ',
			img: [
				'https://res.cloudinary.com/snackmanproductions/image/upload/v1567978820/portfolio/2019-09-08_iyhfcc.png',
			],
			url: 'https://www.progressjournalsapp.com/',
			codeurl: 'https://github.com/AlexShiresRoth/progress-journal',
		},
		{
			title: 'Consurgo International, Inc',
			tech: 'ReactJS, GatsbyJS, Sass, NodeJS',
			desc: `Responsive and dynamic website for an exporting company`,
			img: [
				'https://res.cloudinary.com/snackmanproductions/image/upload/v1572395030/portfolio/2019-10-29_kzfuqc.png',
			],
			url: 'https://consurgointl.com/',
			codeurl: 'https://github.com/AlexShiresRoth/consurgointl',
		},
		{
			title: 'Send Noods',
			tech: 'ReactJS, Express, Javascript, NodeJS',
			desc: `Dynamic and responsive web app for finding ramen restaurants around user location. 
        Integrated with Google Places/Maps API.`,
			img: [
				'https://res.cloudinary.com/snackmanproductions/image/upload/v1567980261/portfolio/2019-09-08_7_vtodo7.png',
			],
			url: 'https://sendnoods.herokuapp.com/',
			codeurl: 'https://github.com/AlexShiresRoth/send-noods',
		},
		{
			title: 'Timer App',
			tech: 'PassportJS, Express, Javascript, NodeJS',
			desc: `Simple timer app made with vanilla js and passportjs for user authentication.`,
			img: [
				'https://res.cloudinary.com/snackmanproductions/image/upload/v1567980273/portfolio/2019-09-08_8_hziqvh.png',
			],
			url: 'http://personaltimerapp.herokuapp.com/login',
			codeurl: 'https://github.com/AlexShiresRoth/timerapp',
		},
		{
			title: 'Rothenberg Law Offices',
			tech: 'Express, Javascript, NodeJS',
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
	}, []);

	return (
		<section className="section__projects">
			<div className="section__projects--buttons">
				<h2>Projects</h2>
			</div>
			<div className="section__projects--container">
				<ProjectsMap projects={projects} />
			</div>
		</section>
	);
};

export default Projects;
