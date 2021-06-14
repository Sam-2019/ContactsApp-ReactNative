import React from "react";
import { View, FlatList } from "react-native";
import { useSelector } from "react-redux";

import { dataData } from "../../features/dataSlice";
import ListItem from "./ListItem";

function List() {
  const dataList = useSelector(dataData);
  console.log(dataList);

  const renderItem = ({ item }) => <ListItem text={item.name} id={item.id} />;

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
