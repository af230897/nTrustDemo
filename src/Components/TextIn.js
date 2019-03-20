import React, { Component } from 'react';
import TextInput from 'react-native-textinput-with-icons';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
export default class TextIn extends Component {
  state = {
    name: ''
  }
 
  render() {
    let { name } = this.state
 
    return (
      <TextInput
      // placeholder="Search for the item you'd like to rent"
      containerStyle={{borderColor : 'red',borderWidth: 1,}}
      
        // RTL must used when label in arabic ex: label="اللغة العربيه"
        leftIcon="search"
        leftIconType="oct"
        // rippleColor="blue"
        rightIcon="close"
        rightIconType="material"
        value={name}
        refrance={(refrance) => {
            this.input = refrance;
        }}
        onChangeText={name => this.setState({ name })}
      />
    )
  }
}