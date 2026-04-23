import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AccountState {
  balance: number;
  currency: string;
}

const initialState: AccountState = {
  balance: 1250000,
  currency: 'LKR',
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setBalance(state, action: PayloadAction<number>) {
      state.balance = action.payload;
    },
  },
});

export const { setBalance } = accountSlice.actions;
export default accountSlice.reducer;
