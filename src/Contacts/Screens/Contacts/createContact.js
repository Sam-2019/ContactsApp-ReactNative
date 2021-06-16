import React from "react";
import { StyleSheet, View, TextInput, Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useInput } from "../../utils";

function Create() {
  const fname = useInput("");
  const lname = useInput("");
  const email = useInput("");
  const numberWork = useInput("");
  const numberHome = useInput("");

  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={saveContact} title="Save" color="blue" />
      )
    });
  }, [navigation]);

  // function onChangeText() {
  //   setInputValue(inputValue);
  // }

  function saveContact() {
    const newContact = {
      fname: fname.value,
      lname: lname.value,
      email: email.value,
      numberWork: numberWork.value,
      numberHome: numberHome.value
    };
    console.log(fname);

    console.log(newContact);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        keyboardType="default"
        value={fname.value}
        onChangeText={fname.onChangeText}
      />

      <TextInput
        style={styles.input}
        placeholder="Last Name"
        keyboardType="default"
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Work Phone"
        keyboardType="number-pad"
      />

      <TextInput
        style={styles.input}
        placeholder="Home Phone"
        keyboardType="phone-pad"
      />
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
