import React, { Fragment } from 'react';
import { Icon } from '@iconify/react';
import githubIcon from '@iconify/icons-simple-icons/github';
import externalLink from '@iconify/icons-feather/external-link';

import '../../css/main.css';

export const ProjectsMap = ({ projects }) => {
	const renderProjects = projects.map((project, i) => {
		return (
			<div className="section__projects--container--item" key={i}>
				<div className="section__projects--container--item--image-container">
					{project.img.map((img, i) => {
						return (
							<a key={i} href={project.url} target="_blank" rel="noopener noreferrer">
								<img src={`${img}`} alt={`${project.title}`} />
							</a>
						);
					})}
				</div>
				<div className="section__projects--container--item--info">
					<div className="section__projects--container--item--info--description">
						<div className="section__projects--container--item--info--description--title">
							<h2>{project.title}</h2>
							<div className="section__projects--container--item--info--description--title--separator"></div>
						</div>
						<p>
							{project.desc} {project.tech}
						</p>
						<div className="section__projects--container--item--info--description--links">
							<a href={project.url} target="_blank" rel="noopener noreferrer">
								<Icon icon={externalLink} />
							</a>
							<a href={project.codeurl} target="_blank" rel="noopener noreferrer">
								<Icon icon={githubIcon} />
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	});

	return <Fragment>{renderProjects}</Fragment>;
};
