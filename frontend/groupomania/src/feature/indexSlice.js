import { createSlice } from '@reduxjs/toolkit'

export const indexSlice = createSlice({
    name: 'index',
    initialState: {value: 0},
    reducers:{
        increment: (state) =>{
            state.value += 2
        },
        decrement: (state) =>{
            state.value -= 2
        }
    }
})

export const {increment , decrement} = indexSlice.actions;
export default indexSlice.reducer;