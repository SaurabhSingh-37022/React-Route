import { createSlice } from "@reduxjs/toolkit";


const initialState = {  // 2-step
    value : 0,
}

export const CounterSlice = createSlice({ // 1-step
    name : "counter",  // 1.1 step
    initialState, // 2.1 step
    reducers : {  // 3 step
        increment : (state) => {
            state.value += 1;
        },
        decrement : (state) => {
            state.value -= 1;
        }
    }


})
export const {increment, decrement} = CounterSlice.actions;
export default CounterSlice.reducer;
