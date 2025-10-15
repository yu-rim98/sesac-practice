import { createSlice } from "@reduxjs/toolkit";

// 초기 상태
const initialState = {
  count: 0,
  step: 1,
};

// 슬라이스 생성
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.count += state.step;
    },

    decrement(state) {
      state.count -= state.step;
    },

    setStepByAmount(state, action) {
      state.step = action.payload;
    },
  },
});

export const { increment, decrement, setStepByAmount } = counterSlice.actions;

export default counterSlice.reducer;
