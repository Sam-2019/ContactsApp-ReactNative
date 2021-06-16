import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native";

import Contact from "./Contacts";
import CreateContact from "./createContact";
import ContactProfile from "../../components/contactProfile";

const Stack = createStackNavigator();

function ContactsStack() {
  return (
    <Stack.Navigator initialRouteName="Contacts">
      <Stack.Screen
        name="Contacts"
        component={Contact}
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
