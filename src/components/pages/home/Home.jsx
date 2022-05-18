import React, { Fragment } from 'react';

const Home = ({ isAuth, userInfo }) => {
	return (
		<Fragment>
			<h1 className="main__head">Главная</h1>
			<div className="main__content">Привет, {isAuth ? userInfo.login : 'Гость'}!</div>
		</Fragment>
	);
};

export default Home;
