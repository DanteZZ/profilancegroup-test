import Update from 'immutability-helper';

export const SET_POSTS = new String('SET_POSTS');

export const SetPosts = (data) => ({
	type: SET_POSTS,
	payload: data
});

export const MutatePosts = (state, data) =>
	Update(state, {
		list: { $set: data }
	});
