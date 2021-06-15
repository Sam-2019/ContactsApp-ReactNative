import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import FavoriteList from "./favoriteList";
import FavoriteProfile from "../../components/contactProfile";

const Stack = createStackNavigator();

function FavoritesScreen() {
  return (
    <Stack.Navigator initialRouteName="FavoriteList">
      <Stack.Screen
        name="Favorites"
        component={FavoriteList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="User"
        component={FavoriteProfile}
        options={({ route }) => ({ title: route.params.user })}
      />
    </Stack.Navigator>
  );
}

export default FavoritesScreen;
