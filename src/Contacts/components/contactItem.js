import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

function ContactItem({
  fname,
  lname,
  image,
  email,
  workPhone,
  homePhone,
  navigation
}) {
  return (
    <View>
      <Pressable onPress={() => navigation.navigate("User")}>
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
      </Pressable>
    </View>
  );
}

export default ContactItem;

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
