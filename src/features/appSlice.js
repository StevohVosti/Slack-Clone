import {  createSlice } from '@reduxjs/toolkit';


const initialState = {
  channelId: null,
  channelName: null,
};


export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    enterRoom: (state,action) => {
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;
    },
    decrement: (state,action) => {
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },

});

export const {enterRoom} = appSlice.actions;

// // The function below is called a selector and allows us to select a value from
// // the state. Selectors can also be defined inline where they're used instead of
// // in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectRoomId = (state) => state.app.channelId;
export const selectRoomName = (state) => state.app.channelName;



export default appSlice.reducer;
