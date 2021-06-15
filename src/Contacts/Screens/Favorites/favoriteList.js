import React from "react";
import { ScrollView, FlatList, View, Text } from "react-native";
import { useSelector } from "react-redux";

import { favoriteData } from "../../features/favoriteSlice";
import ContactItem from "../../components/contactItem";

function ContactList() {
  const favorites = useSelector(favoriteData);
  console.log(favorites);

  const renderItem = ({ item }) => (
    <ContactItem
      id={item.id}
      fname={item.fname}
      lname={item.lname}
      image={item.image}
      email={item.email}
      workPhone={item.number.work}
      homePhone={item.number.home}
    />
  );

  return (
    <ScrollView>
      <View>
        <Text>Hello</Text>
      </View>

      {/* <FlatList
        data={favorites}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      /> */}
    </ScrollView>
  );
}

export default ContactList;
