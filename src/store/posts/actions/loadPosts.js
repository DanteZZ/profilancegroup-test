import { getPosts } from '../../../api';
import { SetPosts } from '../setters/setPosts';

export const LoadPosts = () => async (dispatch) => {
	dispatch(SetPosts(getPosts()));
};
