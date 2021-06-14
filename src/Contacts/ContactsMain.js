import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ContactsScreen from "./Screens/Contacts";
import FavoritesScreen from "./Screens/Favorite";
import MeScreen from "./Screens/Me";

const Tab = createBottomTabNavigator();

function Contacts() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Contacts" component={ContactsScreen} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
        <Tab.Screen name="Me" component={MeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Contacts;
