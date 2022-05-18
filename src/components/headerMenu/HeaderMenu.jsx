import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';

const HeaderMenu = ({ isAuth, error, doLogin, doLogout }) => {
	const [ isPopup, setIsPopup ] = useState(false);
	const [ login, setLogin ] = useState('');
	const [ password, setPassword ] = useState('');

	const togglePopupHandler = () => setIsPopup(!isPopup);
	const loginHandler = ({ target: { value } }) => setLogin(value);
	const passwordHandler = ({ target: { value } }) => setPassword(value);
	const authHandler = (e) => {
		doLogin({ login, password });
		e.preventDefault();
	};

	const logoutHandler = () => {
		togglePopupHandler();
		doLogout();
	};

	return (
		<nav className="headerMenu">
			<Link to="" className="headerMenu__logo">
				<img src={logo} alt="" />
			</Link>
			<div className="headerMenu__items">
				<Link to="/posts" className="headerMenu__item">
					Новости
				</Link>
			</div>
			<div className="headerMenu__side">
				{!isAuth ? (
					<button onClick={togglePopupHandler} className="btn btn-primary">
						Авторизация
					</button>
				) : (
					<button onClick={logoutHandler} className="btn btn-primary">
						Выход
					</button>
				)}

				{isPopup &&
				!isAuth && (
					<div className="popUp">
						<form onSubmit={authHandler} className="form">
							{!!error && <div className="alert alert-red">{error}</div>}
							<label className="form__label">Логин</label>
							<input
								onChange={loginHandler}
								placeholder="admin/user"
								value={login}
								type="text"
								className="form__input"
							/>
							<label className="form__label">Пароль</label>
							<input
								onChange={passwordHandler}
								value={password}
								placeholder="admin/user"
								type="text"
								type="password"
								className="form__input"
							/>
							<button className="btn btn-blue btn-block">Войти</button>
						</form>
					</div>
				)}
			</div>
		</nav>
	);
};

export default HeaderMenu;
