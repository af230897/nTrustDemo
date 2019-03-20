import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput
} from "react-native";
import Wheel from "../Components/Wheel";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default class LendItems extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            backgroundColor: "#d8d4d4",
            // backgroundColor: "yellow",
            borderBottomWidth: 1,
            // flexDirection: "row",
            height: hp("8%")
          }}
        >
          <View
            style={{
              position: "absolute",
              // backgroundColor: "blue",
              // height: hp("12%"),
              width: "100%",
              marginTop: 4
            }}
          >
            <TouchableOpacity
              //   onPress={() => this.props.navigation.navigate("Profile")}
              onPress={() => this.props.navigation.goBack()}
              style={{ marginLeft: "1.5%", width: wp("8%"), marginTop: 4 }}
            >
              <Image
                style={{ height: 30, width: 30, borderRadius: 5 }}
                source={require("C:/Users/BabA/Desktop/nTrust/src/images/arrow_dark.png")}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: 25,
              color: "black",
              fontWeight: "bold",
              marginTop: 4
            }}
          >
            Item Name
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center"
          }}
        >
          <Image
            style={styles.iconimage}
            source={require("C:/Users/BabA/Desktop/nTrust/src/images/camera.png")}
          />
        </View>
        <ScrollView>
          <View
            style={{
              marginVertical: 13,
              height: hp("20%"),
              width: "100%",
              //   backgroundColor: "yellow",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center"
            }}
          >
            <TouchableOpacity
              style={styles.touchitems}
              onPress={() => this.props.navigation.navigate("LendItems")}
            >
              <Text>Abcd</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchitems}>
              <Text>Abcd</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              marginBottom: 13,
              height: hp("20%"),
              width: "100%",
              //   backgroundColor: "yellow",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center"
            }}
          >
            <TouchableOpacity style={styles.touchitems}>
              <Text>Abcd</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchitems}>
              <Text>Abcd</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginBottom: 13,
              height: hp("20%"),
              width: "100%",
              //   backgroundColor: "yellow",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center"
            }}
          >
            <TouchableOpacity style={styles.touchitems}>
              <Text>Abcd</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchitems}>
              <Text>Abcd</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconimage: {
    height: 150,
    width: 150,
    marginVertical: 10
    // backgroundColor: 'red'
  },

  textinput: {
    borderColor: "gray",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 5,
    width: wp("90%"),
    elevation: 3
  },

  touchitems: {
    backgroundColor: "#d8d4d4",
    borderRadius: 10,
    height: "100%",
    width: "45%",
    justifyContent: "center",
    alignItems: "center"
  }
});
