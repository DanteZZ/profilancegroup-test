import { declinePost } from '../../../api';
import { SetPosts } from '../setters/setPosts';

export const DeclinePost = (id) => async (dispatch, getState) => {
	const { posts: { list } } = getState();
	declinePost(id);
	dispatch(SetPosts(list.filter((e) => e.ID !== id)));
};
