import React from "react";
import { View, FlatList } from "react-native";
import { useSelector } from "react-redux";

import { dataData } from "../../features/dataSlice";
import ListItem from "./ListItem";

function List() {
  const dataList = useSelector(dataData);

  const renderItem = ({ item }) => (
    <ListItem
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
    <View>
      <FlatList
        data={dataList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default List;
