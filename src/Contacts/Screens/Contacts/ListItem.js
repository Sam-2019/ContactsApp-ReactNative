import React from "react";
import { View, Text, Button } from "react-native";
import { useDispatch } from "react-redux";
import { removeData } from "./features/dataSlice";

function ListItem({ id, text }) {
  const dispatch = useDispatch();

  function remove() {
    console.log(id);
    dispatch(removeData(id));
  }

  return (
    <View>
      <Text>{text}</Text>

      <Button onPress={remove}>Delete</Button>
    </View>
  );
}

export default ListItem;
