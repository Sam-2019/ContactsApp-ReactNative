import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import ContactList from "./contactList";

function Contact() {
  const navigation = useNavigation();

  function openCreateContact() {
    navigation.navigate("Create contact");
  }

  return (
    <View style={styles.container}>
      <ContactList />

      <View>
        <Pressable style={styles.buttonContainer} onPress={openCreateContact}>
          <Text style={styles.text}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between"
  },
  buttonContainer: {
    position: "absolute",
    justifyContent: "center",
    bottom: 20,
    right: 50,
    width: 50,
    height: 50,
    paddingLeft: 9,
    paddingBottom: 10,
    borderRadius: 50,
    backgroundColor: "blue"
  },
  text: {
    fontSize: 50,
    fontWeight: "400",
    color: "white"
  },
  input: {
    height: 40,
    marginBottom: 15,
    borderWidth: 1
  }
});
