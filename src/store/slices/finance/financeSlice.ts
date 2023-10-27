import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../rootStore';
import { FinanceBlock } from 'src/shared/types/general';

interface FinanceState {
  finances: FinanceBlock[];
  selectedBlock: FinanceBlock | null;
}

const initialState: FinanceState = {
    finances: [],
    selectedBlock: null,
};

export const financeSlice = createSlice({
    name: 'finance',
    initialState,
    reducers: {
        fillFinances: (state, action: PayloadAction<FinanceBlock[]>) => {
            state.finances = action.payload;
            state.selectedBlock = action.payload[0];
        },
        selectBlock: (state, action: PayloadAction<FinanceBlock>) => {
            state.selectedBlock = action.payload;
        },
    },
});

export const { fillFinances, selectBlock, } = financeSlice.actions;

export const selectFinaces = (state: RootState) => state.finance.finances;
export const selectSelectedBlock = (state: RootState) => state.finance.selectedBlock;

export const financeReducer = financeSlice.reducer;