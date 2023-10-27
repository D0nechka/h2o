import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../rootStore';
import { ProblemBlock } from 'src/shared/types/general';

interface ProblemsState {
    problems: ProblemBlock[]
}

const initialState: ProblemsState = {
    problems: [],
};

export const problemsSlice = createSlice({
    name: 'problems',
    initialState,
    reducers: {
        fillProblems: (state, action: PayloadAction<ProblemBlock[]>) => {
            state.problems = action.payload;
        },
    },
});

export const { fillProblems, } = problemsSlice.actions;

export const selectProblem = (state: RootState) => state.problems.problems;

export const problemsReducer = problemsSlice.reducer;