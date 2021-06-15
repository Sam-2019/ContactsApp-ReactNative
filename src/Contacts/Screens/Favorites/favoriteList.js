import React from "react";
import { ScrollView, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { contactData } from "../../features/contactSlice";
import ContactItem from "../../components/contactItem";
import { FilterData } from "../../utils";

function FavoriteList() {
  const contacts = useSelector(contactData);

  const favorites = FilterData(contacts);

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
      <FlatList
        data={favorites}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
}

export default FavoriteList;
