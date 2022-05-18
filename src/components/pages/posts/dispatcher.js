import { AddPost } from '../../../store/posts/actions/addPost';
import { LoadPosts } from '../../../store/posts/actions/loadPosts';

const dispatcher = (dispatch) => ({
	doAddPost: (data) => dispatch(AddPost(data)),
	doLoadPosts: () => dispatch(LoadPosts())
});

export default dispatcher;
