import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import List from "./List";
import ListInput from "./ListInput";
import { useSelector } from "react-redux";
import { dataData } from "./features/dataSlice";

function App() {
  const dataList = useSelector(dataData);

  const [name, setName] = useState("");

  return (
    <View styles={styles.container}>
      <ListInput name={name} setName={setName} />
      <List data={dataList} />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
