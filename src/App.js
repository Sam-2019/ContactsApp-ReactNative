import React from "react";
import Contacts from "./Contacts/Contacts";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Contacts />
    </Provider>
  );
}

export default App;
