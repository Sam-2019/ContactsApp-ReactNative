import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./Contacts/features/contactSlice";
import favoriteReducer from "./Contacts/features/favoriteSlice";

export default configureStore({
  reducer: {
    contact: contactReducer,
    favorite: favoriteReducer
  }
});
