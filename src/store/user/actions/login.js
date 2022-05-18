import { login } from '../../../api';
import { SetError } from '../setters/setError';
import { SetIsAuth } from '../setters/setIsAuth';
import { SetUser } from '../setters/setUser';

export const Login = (data) => async (dispatch) => {
	const info = login(data);
	console.log(info);
	if (info) {
		dispatch(SetIsAuth(true));
		dispatch(SetUser(info));
		dispatch(SetError(null));
	} else {
		dispatch(SetError('Неверный логин или пароль'));
	}
};
