import React, { Component } from "react";
import { Image } from "react-native";
import Home from "../screens/Home";
import Exp from "../screens/Exp";
import Lend from '../screens/Lend'
import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import Chat from '../screens/Chat'

const TabNavigator = createBottomTabNavigator({
  // Welcome: {screen : Welcome},
  Home: {screen : Home,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon:
          <Image source={require('../images/ic_home.png')} style={{ height: 20, width: 20 }} />
  }
  },
 
  
  Lend : {screen : Lend,
    navigationOptions: {
      tabBarLabel: "Lend",
      tabBarVisible : false,
      tabBarIcon:
          <Image source={require('../images/ic_lend.png')} style={{ height: 20, width: 20 }} />
  }
  },
  nBox : {screen : Chat,
    navigationOptions: {
      tabBarLabel: "nBox",
      // tabBarVisible : false,
      tabBarIcon:
          <Image source={require('../images/ic_nbox.png')} style={{ height: 20, width: 20 }} />
  }
  },
  
} ,
{
  initialRouteName: "Home",
  headerMode: "none"
}
);
const AppContainer = createAppContainer(TabNavigator);
export default AppContainer;









