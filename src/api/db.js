import localStorageDB from 'localstoragedb';

const db = new localStorageDB('database', localStorage);

if (db.isNew()) {
	/* CREATING USERS */
	db.createTable('users', [ 'login', 'password', 'priority' ]);
	db.insert('users', { login: 'admin', password: 'admin', priority: 1 });
	db.insert('users', { login: 'user', password: 'user', priority: 2 });

	/* NEWS */
	db.createTable('posts', [ 'title', 'content', 'date', 'moderated', 'author' ]);
	db.insert('posts', {
		title: 'Привет мир!',
		content: 'Первая новость',
		date: '2022-05-18',
		moderated: true,
		author: 1
	});
	db.commit();
}

window.DB = db;

export default db;
