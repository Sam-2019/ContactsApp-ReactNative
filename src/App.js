import React from "react";
import { Provider } from "react-redux";
import Contacts from "./Contacts/ContactsMain";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Contacts />
    </Provider>
  );
}

export default App;
