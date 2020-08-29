import React from 'react';

import '../css/main.css';
import { logo2 } from '../components/reusable/logo';

export const Loader = () => {
	const loaderStyle = {
		height: '100vh',
		width: '100vw',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		background: '#eee',
	};

	return (
		<div className="load-fallback" style={{ ...loaderStyle }}>
			{logo2}
		</div>
	);
};
