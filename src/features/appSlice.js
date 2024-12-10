import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"appslice",
    initialState:{
        chatLoading:false,
        roomId:null,
    },
    reducers:{
        enterRoom: (state,action)=>{
           state.roomId = action.payload.roomId;
        }
    }
});


export const {enterRoom} = appSlice.actions;

export const selectRoomId = state => state.app;



export default appSlice.reducer;

