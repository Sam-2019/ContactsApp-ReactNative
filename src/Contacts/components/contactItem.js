import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

function ContactItem({ id, fname, lname, image, workPhone }) {
  const navigation = useNavigation();

  function pageNavigate() {
    navigation.navigate("User", {
      user: fname,
      userID: id
    });
  }

  return (
    <Pressable onPress={pageNavigate}>
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: image
          }}
        />
        <View style={styles.nameXnumber}>
          <Text style={styles.name}>
            {fname} {lname}
          </Text>

          <Text style={styles.number}>{workPhone}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ContactItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 20,
    margin: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#f0f0f0",
    backgroundColor: "#f9f9f9"
  },
  tinyLogo: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 100
  },

  name: {
    fontSize: 18,
    fontWeight: 400
  },
  number: {
    fontSize: 15,
    color: "blue"
  }
});
