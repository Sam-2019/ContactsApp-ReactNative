import React from "react";

import { Provider as StoreProvider } from "react-redux";
import Contacts from "./Contacts/ContactsMain";
import store from "./store";

function App() {
  return (
    <StoreProvider store={store}>
      <Contacts />
    </StoreProvider>
  );
}

export default App;
