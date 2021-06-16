import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ContactStack from "./Screens/Contacts/ContactStack";
import FavoriteScreen from "./Screens/Favorites/Favorites";
import MeScreen from "./Screens/Me/Me";

const Tab = createBottomTabNavigator();

function Contacts() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Contacts" component={ContactStack} />
        <Tab.Screen name="Favorites" component={FavoriteScreen} />
        <Tab.Screen name="Me" component={MeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Contacts;
