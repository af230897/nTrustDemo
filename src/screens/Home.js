import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList
} from "react-native";
import Swiper from "react-native-swiper";
import TextIn from "../Components/TextIn";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };
  }

  componentDidMount() {
    return fetch("http://192.168.1.63:3001/api/v1/users/dashboard", {
      method: "GET"
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.Data.Experiences
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View style={[styles.icon, {}]}>
            <Image
              style={styles.iconimage}
              source={require("C:/Users/BabA/Desktop/nTrust/src/images/n_square.png")}
            />
            <Text style={[styles.text, { fontSize: 25 }]}>Welcome!</Text>
            <Text style={{ fontSize: 20, color: "black" }}>
              Lets get you Started
            </Text>

            <View
              style={{
                width: "100%",
                height: hp("10%"),
                alignItems: "center",
                justifyContent: "center",
                // backgroundColor :'red',
                marginTop: 10
              }}
            >
              <View
                style={[
                  styles.textInput,
                  { borderRadius: 5, width: wp("90%") }
                ]}
              >
                {/* <Image style={{ width: 20, height: 20 }} source={img} /> */}
                <Image
                  style={styles.search}
                  source={require("C:/Users/BabA/Desktop/nTrust/src/images/ic_search.png")}
                />
                <TextInput style={styles.textSearch} placeholder="Search" />
              </View>
            </View>
            
              {/* <FlatList
                data={this.state.dataSource}
                renderItem={({ item }) => (
                  <View>
                    <TouchableOpacity style={{ margin: 5 }}>
                      <View
                        style={{
                          justifyContent: "space-evenly",
                          alignItems: "center"
                        }}
                      >
                        <Text>{item.name}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
                keyExtractor={({ id }, index) => id}
                horizontal={false}
                numColumns={2}
              /> */}
            <View
              style={{
                width: wp("90%"),
                marginVertical: 3,
              
              }}
            >
              <Text
                style={{
                  color: "#60858D",
                  fontSize: 30,
                  fontWeight: "500",
                  marginBottom: 6
                }}
              >
                Experiences
              </Text>
            </View>
          </View>

          <Swiper
            containerStyle={{ height: 300 }}
            autoplay={true}
            showsButtons={false}
            loop={true}
          >
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Exp")}
                style={[
                  styles.adv,
                  {
                    height: 250,
                    width: wp("90%"),
                    marginHorizontal: 15
                  }
                ]}
              >
                <Image
                  style={{
                    height: 250,
                    width: "100%",
                    marginHorizontal: 15,
                    borderRadius: 15
                  }}
                  source={require("C:/Users/BabA/Desktop/nTrust/src/images/adv.jpg")}
                />
              </TouchableOpacity>
            </View>

            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Exp")}
                style={[
                  styles.adv,
                  {
                    height: 250,
                    width: wp("90%"),
                    marginHorizontal: 15
                  }
                ]}
              >
                <Image
                  style={{
                    height: 250,
                    width: "100%",
                    marginHorizontal: 15,
                    borderRadius: 15
                  }}
                  source={require("C:/Users/BabA/Desktop/nTrust/src/images/adv2.jpg")}
                />
              </TouchableOpacity>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Exp")}
                style={[
                  styles.adv,
                  {
                    height: 250,
                    width: wp("90%"),
                    marginHorizontal: 15
                  }
                ]}
              >
                <Image
                  style={{
                    height: 250,
                    width: "100%",
                    marginHorizontal: 15,
                    borderRadius: 15
                  }}
                  source={require("C:/Users/BabA/Desktop/nTrust/src/images/adv3.jpg")}
                />
              </TouchableOpacity>
            </View>
          </Swiper>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View
              style={{
                width: wp("90%")
              }}
            >
              <Text
                style={{ color: "#60858D", fontSize: 30, fontWeight: "500" }}
              >
                Popular Items
              </Text>
            </View>
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
      </ScrollView>
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
    width: wp("80%"),
    elevation: 3
    // borderColor: 'black'
  },
  adv: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15
  },

  textInput: {
    elevation: 10,
    borderWidth: 0.3,
    backgroundColor: "white",
    shadowOpacity: 1,
    shadowOffset: {
      height: 2,
      width: 2,
      flexDirection: "row"
    },
    shadowColor: "grey",

    // borderWidth:1,
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: 'center',
    padding: 5
  },
  textSearch: {
    // fontWeight: '500',
    fontSize: 15,
    padding: 10,
    color: "#000",
    width: wp("85%"),
    height: wp("10%")
    // pointerEvents="none"
  },
  search: {
    height: 25,
    width: 25,
    marginHorizontal: 2
  },
  headerLogo: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 5
  },
  textStyle: {
    fontSize: 15,
    color: "#000",
    padding: 5
  }
});
