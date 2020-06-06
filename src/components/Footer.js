import React from 'react';
import style from './Footer.module.scss';

const Footer = () => {
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
	return (
		<footer className={style.footer__display}>
			<div className={style.left}>
				<p>
					Copyright Alex Roth <span>&copy;</span> 2020.
				</p>
			</div>
			<div className={style.center}>
				{urls.map((item, i) => {
					return (
						<a href={item.url} key={i} target="_blank" rel="noopener noreferrer">
							{item.icon}
						</a>
					);
				})}
			</div>
			<div className={style.right}>
				<a href="mailto:alex@alexshiresroth.com" alt="email">
					alex@alexshiresroth.com
				</a>
			</div>
		</footer>
	);
};

export default Footer;
