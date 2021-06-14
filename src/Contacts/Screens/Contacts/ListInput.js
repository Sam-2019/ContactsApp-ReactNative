import React from "react";
import { View, TextInput, Button } from "react-native";
import { adddata } from "./features/dataSlice";
import { useDispatch } from "react-redux";

function ListInput({ name, setName }) {
  const dispatch = useDispatch();

  function onChange(text) {
    setName(text);
  }

  function submit() {
    if (!name) {
      return;
    }
    const addData = {
      id: Math.random(),
      name
    };

    dispatch(adddata(addData));

    setName("");
  }

  return (
    <View>
      <TextInput name="asset" value={name} onChange={onChange(name)} />

      <Button onPress={submit}> Submit </Button>
    </View>
  );
}

export default ListInput;
