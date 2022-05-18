import { configureStore } from '@reduxjs/toolkit';
import Thunk from 'redux-thunk';
import reducer from './reducer';

const middleware = [ Thunk ];

export const store = configureStore({
	reducer,
	middleware
});
