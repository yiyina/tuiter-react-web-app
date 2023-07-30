import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
  "userName": "Apple",
  "handle": "@apple",
  "image": "apple.jpg",
};

const templateTuit = {
  ...currentUser,
  "topic": "tech",
  "time": "just now",
  "liked": false,
  "replies": 0,
  "retuits": 0,
  "likes": 0,
}

const tuitsSlice = createSlice({
  name: 'tuits',
  initialState: { tuits: tuits },
  reducers: {
    createTuit(state, action) {
      state.tuits.unshift({
        ...action.payload,
        ...templateTuit,
        _id: (new Date()).getTime(),
      })
    },
    deleteTuit(state, action) {
      state.tuits = state.tuits.filter(tuit => tuit._id !== action.payload);
    }
  }
});

export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;