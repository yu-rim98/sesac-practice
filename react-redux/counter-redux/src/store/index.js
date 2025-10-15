import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

// 슬라이스 리듀서를 기반으로 store 생성
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
