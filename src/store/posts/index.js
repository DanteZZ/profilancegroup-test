import DefaultState from './defaultState';

import { SET_POSTS, MutatePosts } from './setters/setPosts';

export default function Reducer(state = DefaultState, { type, payload }) {
	switch (type) {
		case SET_POSTS:
			return MutatePosts(state, payload);
		default:
			return state;
	}
}
