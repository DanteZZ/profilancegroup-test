import DB from './db';

export const login = ({ login, password }) => {
	const res = DB.query('users', { login, password });
	return res[0] ? res[0] : false;
};

export const getPosts = () => DB.queryAll('posts');

export const addPost = ({ title, content, author }) => {
	const ID = DB.insert('posts', {
		title,
		content,
		date: new Date().toISOString().split('T')[0],
		moderated: false,
		author
	});
	DB.commit();
	return DB.query('posts', { ID })[0];
};

export const acceptPost = (ID) => {
	DB.update('posts', { ID }, (r) => ({ ...r, moderated: true }));
	DB.commit();
	return DB.query('posts', { ID })[0];
};

export const declinePost = (ID) => {
	DB.deleteRows('posts', { ID });
	DB.commit();
};
