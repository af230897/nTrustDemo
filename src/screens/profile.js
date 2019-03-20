import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Swiper from "react-native-swiper";
import TextIn from "../Components/TextIn";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 10
            }}
          >
            <Text style={{ fontSize: 25, color: "#1E93E4" }}> Settings </Text>
          </View>
          <View
            style={{
              position: "absolute",
              //   backgroundColor: "blue",
              // height: hp("12%"),
              width: "100%"
            }}
          >
            <TouchableOpacity
              //   onPress={() => this.props.navigation.navigate("Profile")}
              onPress={() => this.props.navigation.goBack()}
              style={{ marginLeft: "90%", width: wp("8%"), marginTop: 3 }}
            >
              <Image
                style={{ height: 25, width: 25, borderRadius: 5 }}
                source={require("C:/Users/BabA/Desktop/nTrust/src/images/ic_close.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginLeft: 10 }}>
          <View>
            <Text style={styles.texts}>Earnings</Text>
            <TouchableOpacity style={styles.texttouch}>
              <Text style={styles.innertext}>Listed Items</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.texts}>General</Text>
            <TouchableOpacity style={styles.texttouch}>
              <Text style={styles.innertext}>How it works?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.texttouch}>
              <Text style={styles.innertext}>Contact us</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.texttouch}>
              <Text style={styles.innertext}>About us</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.texttouch}>
              <Text style={styles.innertext}>Terms of services</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.texttouch}>
              <Text style={styles.innertext}>Privacy Policy</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{width:'100%', position: "absolute",
            bottom: 5, justifyContent : 'center', alignItems : 'center'}}>
        <View
          style={{
           justifyContent : 'space-between',
            // backgroundColor: "red",
            width: "85%",
            flexDirection: 'row',
            
          }}
        >
        <TouchableOpacity>
          <Text style={{ fontSize : 20 , color : 'red'}}>Sign Out</Text>
          </TouchableOpacity>
          <View style={{width : wp('16%'),flexDirection : 'row', justifyContent: 'space-between',alignItems : 'center'}}>
          <Image
                style={{ height: 30, width: 30, borderRadius: 5 }}
                source={require("C:/Users/BabA/Desktop/nTrust/src/images/ico-facebook.png")}
              />
              <Image
                style={{ height: 30, width: 30, borderRadius: 5 }}
                source={require("C:/Users/BabA/Desktop/nTrust/src/images/ico-instagram.png")}
              />
          </View>

        </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  texts: {
    fontSize: 30,
    marginVertical: 15,
    color : '#2A4A51',
    fontWeight : 'bold'
  },
  innertext: {
    fontSize: 20,
    color: "black"
  },
  texttouch: {
    marginLeft: 30,
    marginBottom: 10
  }
});
