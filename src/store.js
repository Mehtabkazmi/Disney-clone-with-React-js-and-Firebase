import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import movieReducer from "./slice/movieSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
