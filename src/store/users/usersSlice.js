import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  isLoading: true,
  error: undefined,
};
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    users: () => {},
  },
  extraReducers: {},
});

// export const usersReducer = usersSlice.reducer;
export default usersSlice;
