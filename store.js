import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice"; // Import the default export

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
