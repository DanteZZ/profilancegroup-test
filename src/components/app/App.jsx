import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HeaderMenu from '../headerMenu';
import Home from '../pages/home';
import Posts from '../pages/posts';

const App = () => {
	return (
		<div className="wrapper">
			<HeaderMenu />
			<div className="main">
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/posts" element={<Posts />} />
				</Routes>
			</div>
		</div>
	);
};

export default App;
