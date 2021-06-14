import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useSelector } from "react-redux";
import { dataData } from "./features/dataSlice";

import List from "./List";
import ListInput from "./ListInput";

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function Contacts() {
  const dataList = useSelector(dataData);

  const [name, setName] = useState("");

  return (
    <View styles={styles.container}>
      <View styles={styles.container}>
        <ListInput name={name} setName={setName} />
      </View>

      <View styles={styles.container}>
        <List data={dataList} />
      </View>
    </View>
  );
}

export default Contacts;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
