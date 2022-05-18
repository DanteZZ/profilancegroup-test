import { addPost } from '../../../api';
import { SetPosts } from '../setters/setPosts';

export const AddPost = (data) => async (dispatch, getState) => {
	const { posts: { list }, user: { info: { ID } } } = getState();
	const post = addPost({ ...data, author: ID });
	dispatch(SetPosts([ ...list, post ]));
};
