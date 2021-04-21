import React, { useState } from "react";
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  ScrollView,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import SwipableCard from "../Components/SwipableCard";
import Card from "../Components/Card";

export default function TodoList() {
  const [AddTodoModalVisible, setAddTodoModalVisible] = useState(false);

  const todoItemlist = [
    "Attend JSConf",
    "Work on Todo application",
    "Start writting blogs",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "Complete learning tailwind",
    "Resume working on Youtube",
    "Feed dog",
    "Create apps ",
    "Contribute open source and chill",
  ];

  const renderTodoList = () => {
    return todoItemlist.map((Todoitem, index) => {
      return <Card Todoitem={Todoitem} key={index} />;
    });
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <ScrollView>{renderTodoList()}</ScrollView>
      <TouchableHighlight
        style={styles.addTodoButton}
        underlayColor="#d1453b"
        onPress={() => {
          setAddTodoModalVisible(!AddTodoModalVisible);
        }}
      >
        <FontAwesome5 name="plus" size={18} color="#fff" />
      </TouchableHighlight>
      {AddTodoModalVisible && (
        <SwipableCard
          AddTodoModalVisible={AddTodoModalVisible}
          setAddTodoModalVisible={setAddTodoModalVisible}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  addTodoButton: {
    backgroundColor: "#db4a42",
    padding: 18,
    borderRadius: 100,
    position: "absolute",
    bottom: 30,
    right: 30,
    shadowColor: "#000",
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    shadowOffset: {
      width: 3,
      height: 2,
    },
    elevation: 4,
  },
});
