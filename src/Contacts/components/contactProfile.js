import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { dataData } from "../features/dataSlice";

function ContactProfile() {
  const route = useRoute();
  const contactID = route.params.userID;

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
