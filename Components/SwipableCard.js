import React, { useRef, useState } from "react";
import { useEffect } from "react";
import {
  Animated,
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
} from "react-native";

export default function SwipableCard(props) {
  const swipe = useRef(new Animated.Value(0)).current;
  const { AddTodoModalVisible } = props;

  useEffect(() => {
    if (AddTodoModalVisible) {
      Animated.timing(swipe, {
        toValue: 150,
        duration: 950,
        useNativeDriver: false,
      }).start();
    }
  }, [AddTodoModalVisible]);

  useEffect(() => {
    Keyboard.addListener("keyboardDidHide", () => {
      props.setAddTodoModalVisible(false);
    });
    return () => {
      Keyboard.removeListener("keyboardDidHide");
    };
  }, []);

  return (
    // <View style={[StyleSheet.absoluteFill, styles.container]}>
    <Animated.View style={[styles.box, { height: swipe }]}>
      <TextInput
        placeholder="e.g: React Native conference at 15th, 10am"
        autoFocus
        style={{ padding: 10 }}
      />
    </Animated.View>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // position: "absolute",
    // width: "100%",
    // padding: 0,
    // marginHorizontal: 0,
    // height: "100%",
    // flex: 1,
    backgroundColor: "rgba(0,0,0,.5)",
    // zIndex: 10,
  },
  box: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    color: "red",
    elevation: 5,
    // padding: 10,
  },
});
