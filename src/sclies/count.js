import { createSlice } from "@reduxjs/toolkit";

export const countSlice =createSlice({
    name:'count',
    initialState:{count:0},
    reducers:{
        plusCounter:
            (state,action)=>{
                state.count+=1

            },
            minesCount:(state,payload)=>{
                state.count-=1
            },
            resetCount:(state,payload)=>{
                state.count = 0
            }
        
    }
})
export const {plusCounter,minesCount ,resetCount}=countSlice.actions

export default countSlice.reducer