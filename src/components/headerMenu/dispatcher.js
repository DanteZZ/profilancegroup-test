import { Login } from '../../store/user/actions/login';
import { Logout } from '../../store/user/actions/logout';

const dispatcher = (dispatch) => ({
	doLogin: (data) => dispatch(Login(data)),
	doLogout: () => dispatch(Logout())
});

export default dispatcher;
