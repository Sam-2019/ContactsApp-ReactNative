import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import List from "./List";
import User from "./User";

const Stack = createStackNavigator();

function ContactsStack() {
  return (
    <Stack.Navigator initialRouteName="List">
      <Stack.Screen name="List" component={List} />
      <Stack.Screen
        name="User"
        component={User}
        options={({ route }) => ({ title: route.params.user })}
      />
    </Stack.Navigator>
  );
}

export default ContactsStack;
