import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
// import ChatBox from './src/screens/ChatBox'
import MyDatePicker from "./src/Components/Date";
import Lend from "./src/screens/Lend";
// import Navigate from './src/Navigator/Navigate'
// import AppNavigator from './src/Navigator/Navigate'
import AppNavigator from "./src/Navigator/Navigate";
import TabNavigator from "./src/Navigator/TabNavigator";

import AppContainer from "./src/Navigator/Navigate";
import Exp from "./src/screens/Exp";
import ItemDetail from "./src/screens/ItemDetail";
import Example from "./src/Components/TextIn";
import Home from "./src/screens/Home";
import Modal from "./src/Components/Modal";
import Wheel from "./src/Components/Wheel";
const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Exp/> */}
        <AppContainer />
        {/* <Lend/> */}
        {/* <TabNavigator/> */}
        {/* <MyDatePicker/> */}
        {/* <Wheel /> */}
        {/* <ItemDetail/> */}
        {/* <Modal/> */}

        {/* <Home/> */}
        {/* // <Example/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
