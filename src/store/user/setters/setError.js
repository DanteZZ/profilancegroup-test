import Update from 'immutability-helper';

export const SET_ERROR = new String('SET_ERROR');

export const SetError = (data) => ({
	type: SET_ERROR,
	payload: data
});

export const MutateError = (state, data) =>
	Update(state, {
		error: { $set: data }
	});
