import { createSlice } from '@reduxjs/toolkit'

export const indexSlice = createSlice({
    name: 'index',
    initialState: {value: 0},
    reducers:{
        increment: (state) =>{
            state.value += 1
        },
        decrement: (state) =>{
            state.value -= 1
        }
    }
})

export const {increment , decrement} = indexSlice.actions;
export default indexSlice.reducer;