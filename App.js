import "react-native-gesture-handler";
import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome } from "@expo/vector-icons";
import { Appbar, Menu } from "react-native-paper";

import colors from "./Configs/colors";
import Welcome from "./Screens/Welcome";
import TodoList from "./Screens/TodoList";

const Stack = createStackNavigator();

function HeaderComponent({ styles, navigation, previous }) {
  const [headerMenuVisible, setHeaderMenuVisible] = useState(false);
  return (
    <Appbar.Header style={styles.Header}>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="Todo" />
      <Appbar.Action icon="magnify" onPress={() => {}} />
      <Menu
        style={{ marginTop: 20 }}
        visible={headerMenuVisible}
        onDismiss={() => {
          setHeaderMenuVisible(!headerMenuVisible);
        }}
        anchor={
          <Appbar.Action
            icon="dots-vertical"
            color="white"
            onPress={() => {
              setHeaderMenuVisible(!headerMenuVisible);
            }}
          />
        }
      >
        <Menu.Item
          onPress={() => {
            setHeaderMenuVisible(!headerMenuVisible);
          }}
          title="Notifications"
        />
        <Menu.Item
          onPress={() => {
            setHeaderMenuVisible(!headerMenuVisible);
          }}
          title="Activity log"
        />
        <Menu.Item
          onPress={() => {
            setHeaderMenuVisible(!headerMenuVisible);
          }}
          title="Settings"
        />
      </Menu>
    </Appbar.Header>
  );
}

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            header: (props) => <HeaderComponent styles={styles} {...props} />,
          }}
        >
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              title: "Overview",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Todo"
            component={TodoList}
            options={{
              title: "Kooi",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  Header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.primary,
    fontWeight: "400",
    marginTop: 20,
  },
  HeaderText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
