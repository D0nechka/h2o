import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './user/userSlice';
import { financeReducer } from './finance/financeSlice';
import { problemsReducer } from './problems/problemsSlice';

export const rootReducer = combineReducers({
    user: userReducer,
    finance: financeReducer,
    problems: problemsReducer,
});