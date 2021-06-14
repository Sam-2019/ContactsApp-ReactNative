import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const dataSlice = createSlice({
  name: "data",
  initialState: [
    {
      id: uuidv4(),
      fname: "Alexander",
      lname: "Anderson",
      email: "alex.anderson@gmail.com",
      image: "",
      number: {
        work: "",
        home: ""
      }
    },
    {
      id: uuidv4(),
      fname: "Leanne",
      lname: "Graham",
      email: "Sincere@april.biz",
      image: "",
      number: {
        work: "92998-3874",
        home: "1-770-736-8031 x56442"
      }
    },
    {
      id: uuidv4(),
      fname: "Ervin",
      lname: "Howell",
      email: "Shanna@melissa.tv",
      image: "",
      number: {
        work: "90566-7771",
        home: "010-692-6593 x09125"
      }
    },
    {
      id: uuidv4(),
      fname: "Clementine",
      lname: "Bauch",
      email: "Nathan@yesenia.net",
      image: "",
      number: {
        work: "59590-4157",
        home: "1-463-123-4447"
      }
    },
    {
      id: uuidv4(),
      fname: "Patricia",
      lname: "Lebsack",
      email: "Julianne.OConner@kory.org",
      image: "",
      number: {
        work: "53919-4257",
        home: "493-170-9623 x156"
      }
    },
    {
      id: uuidv4(),
      fname: "Chelsey",
      lname: "Dietrich",
      email: "Lucio_Hettinger@annie.ca",
      image: "",
      number: {
        work: "33263",
        home: "(254)954-1289"
      }
    },
    {
      id: uuidv4(),
      fname: "Dennis",
      lname: "Schulist",
      email: "Karley_Dach@jasper.info",
      image: "",
      number: {
        work: "23505-1337",
        home: "1-477-935-8478 x6430"
      }
    },
    {
      id: uuidv4(),
      fname: "Kurtis",
      lname: "Weissnat",
      email: "Telly.Hoeger@billy.biz",
      image: "",
      number: {
        home: "210.067.6132",
        work: "58804-1099"
      }
    },
    {
      id: uuidv4(),
      fname: "Nicholas",
      lname: "Runolfsdottir",
      email: "Sherwood@rosamond.me",
      image: "",
      number: {
        work: "45169",
        home: "586.493.6943 x140"
      }
    },
    {
      id: uuidv4(),
      fname: "Glenna",
      lname: "Reichert",
      email: "Chaim_McDermott@dana.io",
      image: "",
      number: {
        work: "76495-3109",
        home: "(775)976-6794 x41206"
      }
    },
    {
      id: uuidv4(),
      fname: "Clementina",
      lname: "DuBuque",
      email: "Rey.Padberg@karina.biz",
      image: "",
      number: {
        work: "31428-2261",
        home: "024-648-3804"
      }
    }
  ],
  reducers: {
    adddata: (state, action) => {
      return state.concat(action.payload);
    },
    removeData: (state, action) => {
      return state.filter((result) => result.id !== action.payload);
    }
  }
});

export const { adddata, removeData } = dataSlice.actions;

export const dataData = (state) => state.data;

export default dataSlice.reducer;
