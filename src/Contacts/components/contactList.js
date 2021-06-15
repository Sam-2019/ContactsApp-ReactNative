import React from "react";
import { ScrollView, FlatList } from "react-native";
import { useSelector } from "react-redux";

import { contactData } from "../features/contactSlice";
import ContactItem from "./contactItem";

function ContactList() {
  const dataList = useSelector(contactData);

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
        data={dataList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
}

export default ContactList;
