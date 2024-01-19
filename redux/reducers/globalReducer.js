import { createSlice } from "@reduxjs/toolkit";

const settingReducer = createSlice({
    name: 'GLOBAL_REDUCER',
    initialState: {
    },
    reducers: {
        // increment: (state) => state + 1,
        // decrement: (state) => state - 1,
    },
});
export const GLOBAL_REDUCER_ACTIONS = settingReducer.actions;
export default settingReducer.reducer;