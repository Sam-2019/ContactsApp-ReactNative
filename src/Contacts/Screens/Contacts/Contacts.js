import React from "react";
import { ScrollView, View } from "react-native";
import List from "./List";

function ContactsScreen() {
  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <List />
      </View>
    </ScrollView>
  );
}

export default ContactsScreen;
