import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: true,
    reducers: {
        changeLayout: (state, action) => {
            return action.payload
        }
    },
});
export const LAYOUT_REDUCER_ACTIONS = counterSlice.actions;
export default counterSlice.reducer;