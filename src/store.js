import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./Contacts/features/dataSlice";

export default configureStore({
  reducer: {
    data: dataReducer
  }
});
