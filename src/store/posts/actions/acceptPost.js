import { acceptPost } from '../../../api';
import { SetPosts } from '../setters/setPosts';

export const AcceptPost = (id) => async (dispatch, getState) => {
	const { posts: { list } } = getState();
	const post = acceptPost(id);
	dispatch(SetPosts(list.map((e) => (e.ID == id ? post : e))));
};
