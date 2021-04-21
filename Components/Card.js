import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RadioButton } from "react-native-paper";
import { useState } from "react/cjs/react.development";
import { MaterialIcons } from "@expo/vector-icons";

export default function Card(props) {
  const [checked, setCheckState] = useState(false);
  return (
    <View
      style={[styles.container]}
      onStartShouldSetResponder={() => {
        setCheckState(!checked);
      }}
    >
      <View style={styles.body}>
        <View style={{ alignSelf: "flex-start" }}>
          <RadioButton
            status={checked ? "checked" : "unchecked"}
            color="tomato"
            onPress={() => {
              setCheckState(!checked);
            }}
          />
        </View>
        <Text style={styles.textItem}>{props.Todoitem}</Text>
      </View>
      <View style={styles.dueDateWrapper}>
        <MaterialIcons name="date-range" size={20} color="#a0a4a3" />
        <Text style={styles.dueDate}>12th April</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "95%",
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginVertical: 5,
    borderColor: "#bbbdbf",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  body: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  dueDateWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  dueDate: {
    color: "#b0a7a7",
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "right",
    marginTop: 2,
  },
  textItem: {
    width: "95%",
    fontSize: 12.5,
  },
});
