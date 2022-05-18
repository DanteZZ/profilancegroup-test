import DefaultState from './defaultState';

import { SET_USER, MutateUser } from './setters/setUser';
import { SET_IS_AUTH, MutateIsAuth } from './setters/setIsAuth';
import { SET_ERROR, MutateError } from './setters/setError';

export default function Reducer(state = DefaultState, { type, payload }) {
	switch (type) {
		case SET_USER:
			return MutateUser(state, payload);
		case SET_IS_AUTH:
			return MutateIsAuth(state, payload);
		case SET_ERROR:
			return MutateError(state, payload);
		default:
			return state;
	}
}
