import React, { Fragment } from 'react';
import '../../css/main.css';

export const ProjectsMap = ({ projects }) => {
	const renderProjects = projects.map((project, i) => {
		return (
			<div className="section__projects--container--item" key={i}>
				<div className="section__projects--container--item--image-container">
					<div className="section__projects--container--item--image-overlay"></div>
					{project.img.map((img, i) => {
						return (
							<figure key={i} className="section__projects--container--item--image-container--image">
								<img src={`${img}`} alt={`${project.title}`} />
							</figure>
						);
					})}
					<div className="section__projects--container--item--info">
						<div className="section__projects--container--item--title">
							<h2>{project.title}</h2>
						</div>
						<div className="section__projects--container--item--links">
							<a href={project.url} target="_blank">
								<button>Live</button>
							</a>
							<a href={project.codeurl} target="_blank">
								<button>Code</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	});

	return <Fragment>{renderProjects}</Fragment>;
};
