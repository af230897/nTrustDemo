import React, { Component } from "react";
import { Text, View } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
} from "react-navigation";
import Welcome from "../screens/Welcome";
import Home from "../screens/Home";
import Exp from '../screens/Exp';
import ItemDetail from '../screens/ItemDetail';
import TabNavigator from "./TabNavigator";
import Lend from "../screens/Lend";
import Profile from "../screens/profile";
import LendItems from "../screens/LendItems";




const AppNavigator = createStackNavigator(
  {
    Welcome: { screen: Welcome },
    Home: { screen: Home },
    Exp : {screen : Exp},
    ItemDetail : {screen :ItemDetail},
    TabNavigator : {screen : TabNavigator},
Lend :{screen : Lend},
Profile :{screen : Profile},
LendItems :{screen : LendItems}


  },

  {
    initialRouteName: "Welcome",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;


