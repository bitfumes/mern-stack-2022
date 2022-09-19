import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth.js";

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
