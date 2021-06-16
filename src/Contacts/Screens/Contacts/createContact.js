import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Create() {
  const [fname, setFName] = React.useState("");
  const [lname, setLName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [numberWork, setNumberWork] = React.useState("");
  const [numberHome, setNumberHome] = React.useState("");

  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={saveContact} title="Save" color="blue" />
      )
    });
  }, [navigation, saveContact]);

  function saveContact() {
    const newContact = {
      fname,
      lname,
      email
    };

    console.log(newContact);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        label="First Name"
        value={fname}
        onChangeText={(fname) => setFName(fname)}
      />

      <TextInput
        style={styles.input}
        label="Last Name"
        value={lname}
        onChangeText={(lname) => setLName(lname)}
      />

      <TextInput
        style={styles.input}
        label="Email"
        value={email}
        onChangeText={(email) => setEmail(email)}
      />

      <TextInput style={styles.input} label="Work Phone" />

      <TextInput style={styles.input} label="Home Phone" />

      <Button onPress={saveContact} title="Save" />
    </View>
  );
}

export default Create;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    paddingRight: 5,
    paddingLeft: 5
  },
  input: {
    height: 40,
    marginBottom: 15,
    borderWidth: 1
  }
});
