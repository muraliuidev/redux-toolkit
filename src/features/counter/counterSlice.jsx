import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value : 0
    },
    reducers : {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        reset: state => {
            state.value = 0
        },
        incrementByValue: (state , actions)=> {
            state.value += Number(actions.payload)
        }
    }
})
export const {increment, decrement, reset, incrementByValue} = counterSlice.actions
export default counterSlice.reducer