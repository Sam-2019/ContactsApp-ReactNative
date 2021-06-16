import React from "react";
import { View, Button, StyleSheet } from "react-native";

import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import ContactList from "./contactList";

function Contact() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ContactList />
      <View style={styles.buttonContainer}>
        <Button
          title="+"
          onPress={() => navigation.navigate("Create contact")}
        />
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
    flex: 0,
    bottom: 20,
    right: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: "red",
    width: 70
  },
  button: {},
  input: {
    height: 40,
    marginBottom: 15,
    borderWidth: 1
  }
});
