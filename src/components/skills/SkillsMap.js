import React, { Fragment } from 'react';

import style from '../Skills.module.scss';

export const SkillsMap = ({ skills }) => {
	const renderSkills = skills.map((skill, i) => {
		return (
			<div key={i} className={style.skill__row__icon_block}>
				{skill.icon} <h3>{skill.title}</h3>
			</div>
		);
	});
	return <Fragment>{renderSkills}</Fragment>;
};
