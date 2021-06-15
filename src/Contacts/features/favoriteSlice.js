import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const favoriteSlice = createSlice({
  name: "data",
  initialState: [
    {
      id: uuidv4(),
      contactID: "80c407b0-7a4b-486e-b3e7-e016bdc30f6e"
    },
    {
      id: uuidv4(),
      contactID: "2c46ffad-f7fd-4e01-9c71-5a1da9d795a4"
    },
    {
      id: uuidv4(),
      contactID: "96d96228-a5a2-4766-b41e-f8bd40903315"
    },
    {
      id: uuidv4(),
      contactID: "442bb56e-59c9-42a8-80a0-f8f493d84465"
    },
    {
      id: uuidv4(),
      contactID: "2df4e679-ff77-494e-9860-ce81599463ed"
    }
  ],
  reducers: {
    add: (state, action) => {
      return state.concat(action.payload);
    },
    remove: (state, action) => {
      return state.filter((result) => result.id !== action.payload);
    }
  }
});

export const { add, remove } = favoriteSlice.actions;

export const favoriteData = (state) => state.favorite;

export default favoriteSlice.reducer;
