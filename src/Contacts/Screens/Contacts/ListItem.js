import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { removeData } from "../../features/dataSlice";

function ListItem({ id, fname, lname, image, email, workPhone, homePhone }) {
  const dispatch = useDispatch();

  function remove() {
    console.log(id);
    dispatch(removeData(id));
  }

  console.log(image);
  return (
    <View>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: image
        }}
      />
      <Text>{fname}</Text>
      <Text>{lname}</Text>
      <Text>{email}</Text>
      <Text>{workPhone}</Text>
      <Text>{homePhone}</Text>

      <Button onPress={remove}>Delete</Button>
    </View>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50
  },
  tinyLogo: {
    width: 50,
    height: 50
  },
  logo: {
    width: 66,
    height: 58
  }
});
