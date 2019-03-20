import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity,FlatList} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { ScrollView } from "react-native-gesture-handler";

export default class Lend extends Component {
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
      <View style={{ flex: 1 }}>
        <View
          style={{
            justifyContent: "center",
            // marginLeft : 30,
            alignItems: "center",
            width: "100%",
            backgroundColor: "#d8d4d4",
            // backgroundColor: "red",
            borderBottomWidth: 1,
            flexDirection: "row",
            height: hp("8%")
          }}
        >
          <View
            style={{
              position: "absolute",
              width: "100%",
              height: hp("8%"),
              // backgroundColor: "blue",
              justifyContent: "center"
            }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={{ width: wp("16%"), margin: 10 }}
            >
              <Text style={{ fontSize: 18, fontWeight: "200", color: "black" }}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={{ fontSize: 30, color: "black" }}> Lend </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 5,
            width: "100%"
          }}
        >
          <Text
            style={{
              fontSize: 20,

              //   backgroundColor: "red",
              color: "#1E93E4",
              fontWeight: "bold"
              // backgroundColor : 'white'
            }}
          >
            Select the item you'd like to lend
          </Text>
        </View>
        
          <ScrollView>
            <View
              style={{
                alignItems: "center",
                marginVertical: 5,
                justifyContent: "space-between"
              }}
            >
              <FlatList
                data={this.state.dataSource}
                renderItem={({ item }) => (
                  <View>
                    <TouchableOpacity style={{ margin: 5 }}>
                      <View
                        style={{
                          height: wp("40%"),
                          width: wp("46%"),
                          borderRadius: 15,
                          justifyContent: "space-evenly",
                          alignItems: "center",
                          backgroundColor: "#F4F4F4"
                        }}
                      >
                        <Image
                          source={{ uri: `${item.icon}` }}
                          style={{ width: "60%", height: "60%" }}
                        />
                        <Text style={styles.textImage}>{item.name}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
                keyExtractor={({ id }, index) => id}
                horizontal={false}
                numColumns={2}
              />
            </View>
          </ScrollView>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  touchitems: {
    backgroundColor: "#d8d4d4",
    borderRadius: 10,
    // height: "100%",
    width: "45%",
    justifyContent: "center",
    alignItems: "center"
  }
});
