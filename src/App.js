import React, { Fragment, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Loader } from './loader/Loader';

import './css/main.css';

const Home = lazy(() => import('./components/Home'));

const App = () => {
	return (
		<Fragment>
			<Suspense fallback={<Loader />}>
				<div>
					<Router>
						<Route exact path="/" component={() => <Home />} />
					</Router>
				</div>
			</Suspense>
		</Fragment>
	);
};

export default App;
