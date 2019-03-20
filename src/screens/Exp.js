import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";
import Swiper from "react-native-swiper";

export default class Exp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: "30%", width: "100%", position : 'relative',top : 0 }}>
          <Swiper
            containerStyle={{ height: 300 }}
            autoplay={false}
            showsButtons={true}
            loop={true}
            showsPagination={false}
          >
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <ImageBackground
                resizeMode="stretch"
                opacity={0.9}
                source={require("C:/Users/BabA/Desktop/nTrust/src/images/adv.jpg")}
                style={{
                  height: "100%",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text
                  style={{ fontSize: 20, fontWeight: "bold", color: "#1FA1D3", margin : 15 }}
                >
                  Experience
                </Text>
                <Text style={{ fontSize: 30, color: "white" }}>
                  The Great Adventures
                </Text>
                <Text style={{ fontSize: 25, color: "white" }}>
                  NO of items
                </Text>
              </ImageBackground>
            </View>

            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <ImageBackground
                resizeMode="stretch"
                opacity={0.9}
                source={require("C:/Users/BabA/Desktop/nTrust/src/images/adv2.jpg")}
                style={{
                  height: "100%",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text
                  style={{ fontSize: 20, fontWeight: "bold", color: "#1FA1D3", margin : 15 }}
                >
                  Experience
                </Text>
                <Text style={{ fontSize: 30, color: "white" }}>
                  The Great Adventures
                </Text>
                <Text style={{ fontSize: 25, color: "white" }}>
                  NO of items
                </Text>
              </ImageBackground>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <ImageBackground
                resizeMode="stretch"
                opacity={0.9}
                source={require("C:/Users/BabA/Desktop/nTrust/src/images/adv3.jpg")}
                style={{
                  height: "100%",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text
                  style={{ fontSize: 20, fontWeight: "bold", color: "#1FA1D3", margin : 15 }}
                >
                  Experience
                </Text>
                <Text style={{ fontSize: 30, color: "white" }}>
                  The Great Adventures
                </Text>
                <Text style={{ fontSize: 25, color: "white" }}>
                  NO of items
                </Text>
              </ImageBackground>
            </View>
          </Swiper>
        </View>
        <View>
          <View
            style={[
              styles.icon,
              {
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 40,
                alignItems: "center"
              }
            ]}
          >
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate("ItemDetail")}
            >
              <View style={{ alignItems: "center" }}>
                <Image
                  style={styles.iconimage}
                  source={require("C:/Users/BabA/Desktop/nTrust/src/images/n_square.png")}
                />
                <Text
                  style={{ fontWeight: "bold", fontSize: 20, color: "black" }}
                >
                  abcd
                </Text>
                <Text style={{ fontSize: 20, color: "black" }}>abcd</Text>
                <Text style={{ fontSize: 18, color: "#28C470" }}>abcd</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate("ItemDetail")}
            >
              <View style={{ alignItems: "center" }}>
                <Image
                  style={styles.iconimage}
                  source={require("C:/Users/BabA/Desktop/nTrust/src/images/n_square.png")}
                />
                <Text
                  style={{ fontWeight: "bold", fontSize: 20, color: "black" }}
                >
                  abcd
                </Text>
                <Text style={{ fontSize: 20, color: "black" }}>abcd</Text>
                <Text style={{ fontSize: 18, color: "#28C470" }}>abcd</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate("ItemDetail")}
            >
              <View style={{ alignItems: "center" }}>
                <Image
                  style={styles.iconimage}
                  source={require("C:/Users/BabA/Desktop/nTrust/src/images/n_square.png")}
                />
                <Text
                  style={{ fontWeight: "bold", fontSize: 20, color: "black" }}
                >
                  abcd
                </Text>
                <Text style={{ fontSize: 20, color: "black" }}>abcd</Text>
                <Text style={{ fontSize: 18, color: "#28C470" }}>abcd</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    flexDirection: "row",
    width: "100%"
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15
  },
  iconimage: {
    height: 50,
    width: 50,
    borderRadius: 5,
    margin: 10
  },
  text: {
    fontSize: 40,
    color: "black",
    fontWeight: "bold"
  },
  infotext: {
    color: "white",
    fontSize: 18,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  textinput: {
    borderColor: "gray",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 5,
    width: "90%",
    elevation: 3
    // borderColor: 'black'
  },
  search: {
    height: 25,
    width: 25,
    margin: 10
  },
  adv: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15
  },
  slide: {
    flex: 1
  }
});
