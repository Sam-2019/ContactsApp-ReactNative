import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ContactList from "./contactList";
import CreateContact from "./createContact";
import ContactProfile from "../../components/contactProfile";

const Stack = createStackNavigator();

function ContactsStack() {
  return (
    <Stack.Navigator initialRouteName="ContactList">
      <Stack.Screen
        name="Contacts"
        component={ContactList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="User"
        component={ContactProfile}
        options={({ route }) => ({ title: route.params.user })}
      />
      <Stack.Screen name="Create contact" component={CreateContact} />
    </Stack.Navigator>
  );
}

export default ContactsStack;
