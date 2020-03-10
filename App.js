import React from "react";
import { StatusBar, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Main from "./src/screens/Main";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Drawer.Navigator
        initialRouteName="Main"
        drawerStyle={{ backgroundColor: "#c6cbef", width: 240 }}
        drawerPosition="left"
        drawerType="slide"
        overlayColor="transparent"
        minSwipeDistance={0}
        hideStatusBar={true}
      >
        <Drawer.Screen name="Main" component={Main} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
