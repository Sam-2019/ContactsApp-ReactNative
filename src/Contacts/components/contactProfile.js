import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { contactData } from "../features/contactSlice";

import { FilterItem } from "../utils";

function ContactProfile() {
  const route = useRoute();
  const contactID = route.params.userID;

  const contacts = useSelector(contactData);

  const newData = FilterItem(contacts, contactID);
  const ContactObject = Object.assign({}, newData[0]);

  return (
    <View style={styles.container}>
      <View style={styles.imageXnameXnumber}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=="
          }}
        />

        <Text style={styles.name}>
          {ContactObject.fname} {ContactObject.lname}
        </Text>
        <Text style={styles.number}>{ContactObject.number.work}</Text>
      </View>

      <View style={styles.item_wrapper}>
        <Text style={styles.item}>Email </Text>
        <Text style={styles.text}>{ContactObject.email}</Text>
      </View>

      <View style={styles.item_wrapper}>
        <Text style={styles.item}>Work</Text>
        <Text style={styles.text}>{ContactObject.number.work}</Text>
      </View>

      <View style={styles.item_wrapper}>
        <Text style={styles.item}>Personal</Text>
        <Text style={styles.text}>{ContactObject.number.home}</Text>
      </View>
    </View>
  );
}

export default ContactProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  imageXnameXnumber: {
    marginTop: 70,
    marginBottom: 70,
    alignItems: "center"
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 100
  },

  name: {
    fontSize: 18,
    fontWeight: 400
  },
  number: {
    fontSize: 15
  },
  item_wrapper: {
    marginBottom: 10,
    padding: 10
  },
  item: {
    fontWeight: "bold",
    fontSize: 17
  },
  text: {
    fontSize: 15,
    color: "blue"
  }
});
