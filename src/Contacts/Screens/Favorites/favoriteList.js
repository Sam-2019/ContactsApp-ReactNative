import React from "react";
import { ScrollView, FlatList, View, Text } from "react-native";
import { useSelector } from "react-redux";
import { contactData } from "../../features/contactSlice";
import { favoriteData } from "../../features/favoriteSlice";
import ContactItem from "../../components/contactItem";
import { FilterData } from "../../utils";

function FavoriteList() {
  const favorites = useSelector(favoriteData);
  const contacts = useSelector(contactData);

  const data = FilterData(contacts);
  console.log(data);

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

export default FavoriteList;
