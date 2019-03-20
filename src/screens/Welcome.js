import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Swiper from "react-native-swiper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import TabNavigator from "../Navigator/TabNavigator";

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <LinearGradient
        colors={["#2A4A51", "#335C64", "#2A4A51"]}
        style={styles.linearGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <View style={{ flex: 1 }}>
          <View
            style={{
              alignItems: "center",
              marginTop: 15,
              marginBottom: 10
            }}
          >
            <Image
              // style={{ height: "30%", width: "20%", borderRadius: 5 }}
              style={{ height: 90, width: 90, borderRadius: 5 }}
              source={require("C:/Users/BabA/Desktop/nTrust/src/images/n_square.png")}
            />

            <Text
              style={{
                fontSize: 40,
                color: "white",
                fontWeight: "bold"
              }}
            >
              nTrust
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Swiper
              containerStyle={{ height: hp("100%"), width: wp("90%") }}
              autoplay={true}
              showsButtons={false}
              loop={true}
              activeDotColor="#29E67F"
              dotColor="#1FA1D3"
              showsPagination={true}
              style={{ flex: 1, justifyContent: "center" }}
            >
              <View
                style={{
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: wp("60%")
                  }}
                >
                  <Image
                    style={{
                      height: 150,
                      width: 150,
                      borderRadius: 15
                    }}
                    source={require("C:/Users/BabA/Desktop/nTrust/src/images/introscreen_cartone.png")}
                  />
                  <Text style={styles.infotext}>
                    Borrow an item for few hours or even a few days!
                  </Text>
                </View>
              </View>

              <View
                style={{
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: wp("60%")
                  }}
                >
                  <Image
                    style={{
                      height: 150,
                      width: 150,
                      borderRadius: 15
                    }}
                    source={require("C:/Users/BabA/Desktop/nTrust/src/images/introscreen_walletone.png")}
                  />
                  <Text style={styles.infotext}>
                    Lend your item and make some bank.
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: wp("60%")
                  }}
                >
                  <Image
                    style={{
                      height: 150,
                      width: 150,
                      borderRadius: 15
                    }}
                    source={require("C:/Users/BabA/Desktop/nTrust/src/images/introscreen_verifiedone.png")}
                  />
                  <Text
                    style={{
                      color: "white",
                      fontSize: 18,
                      alignItems: "center",

                      textAlign: "center",

                      marginTop: 10
                    }}
                  >
                    All nTrust users are verified before being allowed to lend
                    or borrow items.
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 18,
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center"
                    }}
                  >
                    we like you! we want to keep you safe
                  </Text>
                </View>
              </View>
            </Swiper>
          </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <LinearGradient
              style={{
                borderRadius: 7,
                justifyContent: "center",
                width: wp("70%"),
                alignItems: "center",
                borderRadius: 5
              }}
              colors={["#28E087", "#24C2AB", "#1E93E4"]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
            >
              <TouchableOpacity
                style={{
                  height: 50,
                  flexDirection: "row",

                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center"
                }}
                onPress={() => this.props.navigation.navigate('TabNavigator')}
                // onPress={() => this.props.navigation.navigate("Home")}
              >
                <Image
                  style={[styles.iconimage, { height: 40, width: 40 }]}
                  source={require("C:/Users/BabA/Desktop/nTrust/src/images/icon_facebook.png")}
                />

                <Text style={{ color: "white", fontSize: 20 }}>
                  Sign In with Facebook
                </Text>
              </TouchableOpacity>
            </LinearGradient>

            <View style={{ marginTop: 8 }}>
              <TouchableOpacity
                // onPress={() => this.props.navigation.navigate("Home")}
                onPress={() => this.props.navigation.navigate('TabNavigator')}
              >
                <Text
                  style={{
                    fontSize: 17,
                    color: "white",
                    fontStyle: "italic",
                    textDecorationLine: "underline",
                    marginBottom: 10
                  }}
                >
                  SKIP FOR LATER
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    flexDirection: "row",
    width: "100%"
  },
  iconimage: {
    height: 80,
    width: 80,
    borderRadius: 5
  },
  text: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold"
  },
  infotext: {
    color: "white",
    fontSize: 18,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginTop: 10
  },
  adv: {
    borderRadius: 15
  },
  slide: {
    flex: 1
  }
});
