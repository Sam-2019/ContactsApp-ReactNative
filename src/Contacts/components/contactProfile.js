import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { contactData } from "../features/dataSlice";

import { FilterData } from "../utils";

function ContactProfile() {
  const route = useRoute();
  const contactID = route.params.userID;

  const contacts = useSelector(contactData);

  const newData = FilterData(contacts, contactID);
  const ContactObject = Object.assign({}, newData[0]);

  return (
    <View>
      <Image
        style={styles.tinyLogo}
        source={{
          uri:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=="
        }}
      />
      <Text>{ContactObject.fname}</Text>
      <Text>{ContactObject.lname}</Text>
      <Text>{ContactObject.email}</Text>
      <Text>{ContactObject.number.work}</Text>
      <Text>{ContactObject.number.home}</Text>
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
