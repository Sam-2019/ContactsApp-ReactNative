import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

function Create() {
  const [fname, setFName] = React.useState("");
  const [lname, setLName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [numberWork, setNumberWork] = React.useState("");
  const [numberHome, setNumberHome] = React.useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setFName}
        value={fname}
        placeholder="First Name"
        keyboardType="default"
      />

      <TextInput
        style={styles.input}
        onChangeText={setLName}
        value={lname}
        placeholder="Last Name"
        keyboardType="default"
      />

      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        onChangeText={setNumberWork}
        value={numberWork}
        placeholder="Work Phone"
        keyboardType="number-pad"
      />

      <TextInput
        style={styles.input}
        onChangeText={setNumberHome}
        value={numberHome}
        placeholder="Home Phone"
        keyboardType="phone-pad"
      />
    </View>
  );
}

export default Create;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    height: 40,
    marginBottom: 15,
    borderWidth: 1
  }
});
