import React, { Fragment, useState, useMemo, useEffect } from 'react';
import { ROLE_ADMIN, ROLE_USER } from '../../../consts';
import Post from '../../shared/post';

const Posts = ({ isAuth, userInfo, list, doLoadPosts, doAddPost }) => {
	useEffect(() => {
		doLoadPosts();
	}, []);
	const [ search, setSearch ] = useState('');
	const [ title, setTitle ] = useState('');
	const [ content, setContent ] = useState('');
	const [ message, setMessage ] = useState(null);

	const isAdmin = useMemo(() => isAuth && userInfo.priority === ROLE_ADMIN, [ isAuth, userInfo ]);
	const isUser = useMemo(() => isAuth && userInfo.priority === ROLE_USER, [ isAuth, userInfo ]);

	const posts = useMemo(
		() =>
			list.filter((e) => {
				if (
					e.title.toLowerCase().includes(search.toLowerCase()) ||
					e.content.toLowerCase().includes(search.toLowerCase())
				) {
					if (!isAuth || !userInfo.priority === isAdmin) {
						if (!e.moderated && e.author !== userInfo.ID) {
							return false;
						}
					}
					return true;
				}
				return false;
			}),
		[ list, search, userInfo, isAuth ]
	);

	const searchHandler = ({ target: { value } }) => setSearch(value);
	const searchFormHandler = (e) => e.preventDefault();
	const addPostHandler = (e) => {
		doAddPost({ title, content });
		setMessage('Ваша новость отправлена на модерацию');
		setTimeout(() => {
			setMessage(null);
		}, 3000);
		e.preventDefault();
	};

	const titleHandler = ({ target: { value } }) => setTitle(value);
	const contentHandler = ({ target: { value } }) => setContent(value);

	return (
		<Fragment>
			<h1 className="main__head">Новости</h1>
			<div className="main__content">
				<form onSubmit={searchFormHandler} className="form form__card">
					<label className="form__label">Поиск среди новостей</label>
					<input
						value={search}
						placeholder="Поиск..."
						onChange={searchHandler}
						type="text"
						className="form__input last"
					/>
				</form>
				{isUser && (
					<form onSubmit={addPostHandler} className="form form__card">
						<h3>Запостить новость</h3>
						{message && <div className="alert">{message}</div>}
						<label className="form__label">Заголовок</label>
						<input onChange={titleHandler} value={title} type="text" className="form__input" />
						<label className="form__label">Контент</label>
						<textarea onChange={contentHandler} value={content} type="text" className="form__textarea" />
						<button className="btn btn-blue">Отправить</button>
					</form>
				)}
				<h2>Последние новости</h2>

				<div className="posts">{posts.map((p) => <Post key={p.ID} {...p} />)}</div>
			</div>
		</Fragment>
	);
};

export default Posts;
