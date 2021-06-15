import React, { useEffect, useState } from "react";
import { ScrollView, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { useRoute } from "@react-navigation/native";

import { contactData } from "../features/contactSlice";
import { favoriteData } from "../features/favoriteSlice";
import ContactItem from "./contactItem";

function ContactList() {
  const route = useRoute();
  const contacts = useSelector(contactData);
  const favorites = useSelector(favoriteData);

  const [state, setState] = useState(contacts);

  useEffect(() => {
    function onRouteNameChange() {
      if (route.name === "Favorites") {
        setState(favorites);
      }
    }
    onRouteNameChange();
  }, [route.name, favorites]);

  console.log(route.name);

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
        data={state}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
}

export default ContactList;
