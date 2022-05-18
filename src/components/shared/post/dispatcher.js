import { AcceptPost } from '../../../store/posts/actions/acceptPost';
import { DeclinePost } from '../../../store/posts/actions/declinePost';

const dispatcher = (dispatch) => ({
	doAcceptPost: (id) => dispatch(AcceptPost(id)),
	doDeclinePost: (id) => dispatch(DeclinePost(id))
});

export default dispatcher;
