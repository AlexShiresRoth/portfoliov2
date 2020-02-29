import React from 'react';

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
		<footer className="footer__display">
			<div className="footer__display--left">
				<p>
					Copyright Alex Roth <span>&copy;</span> 2020.
				</p>
			</div>
			<div className="footer__display--center">
				{urls.map((item, i) => {
					return (
						<a href={item.url} key={i} target="_blank" rel="noopener noreferrer">
							{item.icon}
						</a>
					);
				})}
			</div>
			<div className="footer__display--right">
				<a href="mailto:alex@alexshiresroth.com" alt="email">
					alex@alexshiresroth.com
				</a>
			</div>
		</footer>
	);
};

export default Footer;
