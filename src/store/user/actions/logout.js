import { SetError } from '../setters/setError';
import { SetIsAuth } from '../setters/setIsAuth';
import { SetUser } from '../setters/setUser';

export const Logout = () => async (dispatch) => {
	dispatch(SetIsAuth(false));
	dispatch(SetUser({}));
	dispatch(SetError(null));
};
