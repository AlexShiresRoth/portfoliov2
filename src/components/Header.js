import React, { useState, useEffect } from 'react';
import '../css/main.css';

import { Icons } from './reusable/Icons';
import HeaderTag from './header/HeaderTag';

const Header = _ => {
	const urls = [
		{
			icon: <i className="fab fa-github" />,
			url: `https://github.com/AlexShiresRoth?tab=repositories`,
		},
		{
			icon: <i className="fab fa-codepen" />,
			url: `https://codepen.io/Alexroth96/#`,
		},
		{
			icon: <i className="fab fa-twitter" />,
			url: `https://twitter.com/AlexShiresRoth`,
		},
	];

	const [icons, setIcons] = useState(urls);

	useEffect(() => {
		setIcons(urls);
	}, []);

	return (
		<section className="section__header">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill="#00095d"
					fillOpacity="1"
					d="M0,96L60,80C120,64,240,32,360,64C480,96,600,192,720,224C840,256,960,224,1080,213.3C1200,203,1320,213,1380,218.7L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
				></path>
			</svg>
			<div className="section__header--title-and-desc">
				<div className="section__header--logo">
					<img
						src={
							'https://res.cloudinary.com/snackmanproductions/image/upload/v1570836532/portfolio/white_logo_transparent_background_ql1iww.png'
						}
						alt="asr logo"
					/>
				</div>
				<div className="section__header--title-and-desc--h1-container">
					<h1>Alex Shires Roth</h1>
				</div>
				<HeaderTag />
				<Icons icons={icons} />
			</div>
		</section>
	);
};

export default Header;
