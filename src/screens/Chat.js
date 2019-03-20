import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { TextInput } from "react-native-gesture-handler";

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lendBorrow: true
    };
  }

  render() {
    const { lendBorrow } = this.state;

    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: "#d8d4d4", paddingTop: 5 }}>
          <View style={styles.headerLogo}>
            <View style={{ flex: 1, alignItems: "center", width: "100%" }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "500",
                  color: "#000",
                  alignItems: "center"
                }}
              >
                nBox
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "flex-end",
                position: "absolute",
                width: "100%"
              }}
            >
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Profile")}
              >
                <Image
                  source={require("../images/profile.png")}
                  style={{ width: 30, height: 30 }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ flexDirection: "row", 
          // backgroundColor :  'red' 
          }}>
            <View style={{ flex: 1, alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => this.setState({ lendBorrow: true })}
              >
                <Text style={styles.textStyle}>Borrowing</Text>
              </TouchableOpacity>
              <View
                style={{
                  backgroundColor: !lendBorrow ? "#FFF" : "#3D87F6",
                  fontWeight: !lendBorrow? '700':'100',
                  width: "100%",
                  height: wp("3%"),
                  alignItems: "center"
                }}
              />
            </View>
            <View style={{ flex: 1, alignItems: "center"}}>
              <TouchableOpacity
                onPress={() => this.setState({ lendBorrow: false })}
              >
                <Text style={styles.textStyle}>Lending</Text>
              </TouchableOpacity>
              <View
                style={{
                  backgroundColor: lendBorrow ? "#FFF" : "#00B654",
                  width: "100%",
                  height: wp("3%"),
                  alignItems: "center"
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            width: wp("100%"),
            height: hp("10%"),
            alignItems: "center",
            justifyContent: "center",
            // backgroundColor :'red',
            marginVertical: 15,
          }}
        >
          <View style={[styles.textInput, { borderRadius: 5 }]}>
            {/* <Image style={{ width: 20, height: 20 }} source={img} /> */}
            <Image
              style={styles.search}
              source={require("C:/Users/BabA/Desktop/nTrust/src/images/ic_search.png")}
            />
            <TextInput style={styles.textSearch} placeholder="Search" />
          </View>
        </View>
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <Image
            resizeMode="center"
            style={styles.iconimage}
            source={require("C:/Users/BabA/Desktop/nTrust/src/images/empty_box.png")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
  },
  iconimage: {
    height: 150,
    width: 150,
    borderRadius: 5,
    margin: 10
    // backgroundColor : 'red'
  }
});








// import React, { Component } from "react";
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   ScrollView,
//   StyleSheet,
//   TextInput
// } from "react-native";
// import Wheel from "../Components/Wheel";
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp
// } from "react-native-responsive-screen";

// export default class Chat extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       lendBorrow: true,
//     };
//   }

//   render() {
//     const { lendBorrow } = this.state

//     return (
//       <View style={{ flex: 1 }}>
//         <View
//           style={{
//             // justifyContent: "center",
//             alignItems: "center",
//             width: "100%",
//             backgroundColor: "#d8d4d4",
//             // backgroundColor: "yellow",
//                     // flexDirection: "row",
//             height: hp("10%")
//           }}
//         >
//           <Text
//             style={{
//               fontSize: 25,
//               color: "black",
//               fontWeight: "bold",
//               marginTop: 4
//             }}
//           >
//             nBox
//           </Text>
//           <View
//             style={{
//               position: "absolute",
//               backgroundColor: "blue",
//               // height: hp("12%"),
//               width: "100%"
//             }}
//           >
//             <TouchableOpacity
//               onPress={() => this.props.navigation.navigate("Profile")}
//               style={{ marginLeft: "90%", width: wp("8%"), marginTop: 4 }}
//             >
//               <Image
//                 style={{ height: 30, width: 30}}
//                 source={require("C:/Users/BabA/Desktop/nTrust/src/images/profile.png")}
//               />
//             </TouchableOpacity>

//           </View>
//               </View>

//         <View
//           style={{
//             width: "100%",
//             justifyContent: "center",
//             alignItems: "center"
//           }}
//         >
//           <View
//             style={{
//               flexDirection: "row",
//               justifyContent: "center",
//               alignItems: "center",
//               marginTop: 20,
//               borderRadius: 5,
//               width: wp("90%"),
//               flexDirection: "row",
//               borderColor: "black",
//               borderWidth: 1,
//               borderRadius: 3,
//               // backgroundColor : 'red',
//               elevation: 3
//             }}
//           >
//             <Image
//               style={styles.search}
//               source={require("C:/Users/BabA/Desktop/nTrust/src/images/ic_search.png")}
//             />
//             <TextInput
//               placeholder="Search"
//               style={{
//                 height: 50,
//                 width: wp("80%"),
//                 fontSize: 20,
//                 justifyContent: "center",
//                 alignItems: "center",
//                 // backgroundColor : 'red',
//                 flexDirection: "row",
//                 padding: 10
//               }}
//             />
//           </View>
//         </View>
//         <View
//           style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
//         >
//           <Image
//             resizeMode="center"
//             style={styles.iconimage}
//             source={require("C:/Users/BabA/Desktop/nTrust/src/images/empty_box.png")}
//           />
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   linearGradient: {
//     flex: 1,
//     flexDirection: "row",
//     width: "100%"
//   },
//   icon: {
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 15
//   },
//   iconimage: {
//     height: 150,
//     width: 150,
//     borderRadius: 5,
//     margin: 10
//     // backgroundColor : 'red'
//   },
//   text: {
//     fontSize: 40,
//     color: "black",
//     fontWeight: "bold"
//   },
//   infotext: {
//     color: "white",
//     fontSize: 18,
//     alignItems: "center",
//     justifyContent: "center",
//     textAlign: "center"
//   },
//   textinput: {
//     borderColor: "gray",
//     borderWidth: 1,
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 20,
//     borderRadius: 5,
//     width: wp("90%"),
//     elevation: 3
//   },
//   search: {
//     height: 25,
//     width: 25
//   },
//   adv: {
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 15
//   },
//   slide: {
//     flex: 1
//   }
// });