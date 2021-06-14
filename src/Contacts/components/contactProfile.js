import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function ContactProfile({
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
      <Image
        style={styles.tinyLogo}
        source={{
          uri:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=="
        }}
      />
      <Text>Sam</Text>
      <Text>Dom</Text>
      <Text>email</Text>
      <Text>workPhone</Text>
      <Text>homePhone</Text>
    </View>
  );
}

export default ContactProfile;

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
