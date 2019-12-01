import React, { Fragment, useState, useEffect } from 'react';

const HeaderTag = props => {
	const tags = [{ title: 'Self Taught Web Developer' }, { title: 'Freelancer' }, { title: 'Indie Game Dev' }];

	const [tag, setTag] = useState(tags[0].title);

	const [visibility, setVisibility] = useState(0);

	const fadeInAndOutTag = () => {
		let index = 0;
		let maxIndex = tags.length;

		setTimeout(() => {
			setVisibility(1);
		}, 1500);

		setInterval(() => {
			if (index >= maxIndex) index = 0;
			setTag(tags[index].title);
			index++;

			setTimeout(() => {
				setVisibility(1);
			}, 10);

			setTimeout(() => {
				setVisibility(0);
			}, 3000);
		}, 4000);

		return clearInterval();
	};

	useEffect(() => {
		fadeInAndOutTag();
	}, []);

	return (
		<Fragment>
			<p style={{ opacity: visibility, transition: 'all .5s ease-in-out' }}>{tag}</p>
		</Fragment>
	);
};

export default HeaderTag;
