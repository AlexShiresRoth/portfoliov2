import React, { Fragment } from 'react';

import '../../css/main.css';

export const SkillsMap = ({ skills }) => {
	const renderSkills = skills.map((skill, i) => {
		return (
			<div key={i} className="section__skills--container--skill-row--icon-block">
				{skill.icon ? skill.icon : <h3>{skill.title}</h3>}
			</div>
		);
	});
	return <Fragment>{renderSkills}</Fragment>;
};
