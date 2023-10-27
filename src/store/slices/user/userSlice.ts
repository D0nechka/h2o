import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../rootStore';
import avatar from 'src/app/assets/avatar.png';

interface UserState {
    name: string;
    profession: string;
    avatar: string;
}

const initialState: UserState = {
    name: 'Kristina🐰',
    profession: 'менеджер продаж',
    avatar,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});

export const selectUser = (state: RootState) => state.user;

export const userReducer = userSlice.reducer;