import React from "react";
import { View } from "react-native";
import List from "./List";

function ContactsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <List />
    </View>
  );
}

export default ContactsScreen;
