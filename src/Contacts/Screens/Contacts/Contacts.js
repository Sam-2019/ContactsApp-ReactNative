import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ContactList from "../../components/contactItem";
import ContactProfile from "../../components/contactProfile";

const Stack = createStackNavigator();

function ContactsStack() {
  return (
    <Stack.Navigator initialRouteName="ContactList">
      <Stack.Screen name="Contacts" component={ContactList} />
      <Stack.Screen
        name="User"
        component={ContactProfile}
        options={({ route }) => ({ title: route.params.user })}
      />
    </Stack.Navigator>
  );
}

export default ContactsStack;
