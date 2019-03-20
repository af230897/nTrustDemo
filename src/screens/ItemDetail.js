import React, { Component } from "react";
// import LinearGradient from "react-native-linear-gradient";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  Alert,
  TouchableHighlight,
  Modal
} from "react-native";
import ModalExample from "../Components/Modal";
import LinearGradient from "react-native-linear-gradient";
import DateTimePicker from "react-native-modal-datetime-picker";
import DatePick from "../Components/DatePick";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default class ItemDetail extends Component {
  _onPressButton() {
    Alert.alert(
      "Deposit",
      "This amount is taken for security purpose.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  }

  state = {
    isDateTimePickerVisible: false,
    modalVisibleOne: false,
    modalVisibleTwo: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisibleOne: visible });
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = date => {
    console.log("A date has been picked: ", date);
    this._hideDateTimePicker();
  };

  render() {
    const { modalVisibleOne, modalVisibleTwo } = this.state;
    return (
      <View style={{ flex: 1, height: "100%" }}>
        <ModalExample
          modalVisible={modalVisibleOne}
          onClose={() => {
            this.setState({ modalVisibleOne: false });
          }}
          bgcolor="yellow"
          text="1"
          customCompo={
            <View>
              <Image
                style={styles.iconimage}
                source={require("C:/Users/BabA/Desktop/nTrust/src/images/camera.png")}
              />
            </View>
          }
        />
        <ModalExample
          modalVisible={modalVisibleTwo}
          onClose={() => {
            this.setState({ modalVisibleTwo: false });
          }}
          bgcolor="blue"
          customCompo={
            <View>
              <Text>123</Text>
            </View>
          }
          abc={<Text>abc</Text>}
        />

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "100%"
          }}
        >
          <Image
            style={styles.iconimage}
            source={require("C:/Users/BabA/Desktop/nTrust/src/images/camera.png")}
          />
          <Text style={styles.text}>Camera</Text>
          <Text style={{ color: "#00BD46", fontSize: 15, fontWeight: "500" }}>
            Current price you'll pay : $23/day{" "}
          </Text>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row"
            }}
          >
            <Text
              style={{
                color: "#256873",
                fontWeight: "bold",
                fontSize: 15,
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              Deposit : $10
            </Text>
            <TouchableOpacity onPress={this._onPressButton}>
              <Image
                style={[
                  styles.iconimage,
                  { height: 15, width: 15, marginLeft: 5 }
                ]}
                source={require("C:/Users/BabA/Desktop/nTrust/src/images/question-mark.png")}
              />
            </TouchableOpacity>
          </View>

          {/* 1 */}
          <View
            style={{
              borderColor: "gray",
              borderWidth: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 40,
              borderRadius: 3,
              elevation: 3,
              width: wp("90%"),
              height: hp("6.5%")
            }}
          >
            <TouchableOpacity
              style={{
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
                flexDirection: "row"
              }}
              onPress={() => {
                this.setState({ modalVisibleOne: true });
              }}
            >
              <Image
                style={styles.search}
                source={require("C:/Users/BabA/Desktop/nTrust/src/images/arrow-darkloc.png")}
              />

              <Text>abcd</Text>

              <Image
                style={styles.search}
                source={require("C:/Users/BabA/Desktop/nTrust/src/images/arrow-dark_edit.png")}
              />
            </TouchableOpacity>
          </View>
          {/* 2 */}
          <View
            style={{
              borderColor: "gray",
              borderWidth: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 40,
              borderRadius: 3,
              elevation: 3,
              width: wp("90%"),
              height: hp("6.5%")
            }}
          >
            <TouchableOpacity
              style={{
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
                flexDirection: "row"
              }}
              onPress={this._showDateTimePicker}
            >
              <DateTimePicker
                isVisible={this.state.isDateTimePickerVisible}
                onConfirm={this._handleDatePicked}
                onCancel={this._hideDateTimePicker}
              />
              <Image
                style={styles.search}
                source={require("C:/Users/BabA/Desktop/nTrust/src/images/calendar.png")}
              />

              <Text>2</Text>

              <Image
                style={styles.search}
                source={require("C:/Users/BabA/Desktop/nTrust/src/images/arrow-dark_edit.png")}
              />
            </TouchableOpacity>
          </View>

          {/* 3 */}
          <View
            style={{
              borderColor: "gray",
              borderWidth: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 40,
              borderRadius: 3,
              elevation: 3,
              width: wp("90%"),
              height: hp("6.5%")
            }}
          >
            <TouchableOpacity
              style={{
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
                flexDirection: "row"
              }}
              onPress={() => {
                this.setState({ modalVisibleTwo: true });
              }}
            >
              <Image
                style={styles.search}
                source={require("C:/Users/BabA/Desktop/nTrust/src/images/arrow-darktime.png")}
              />

              <Text>3</Text>

              <Image
                style={styles.search}
                source={require("C:/Users/BabA/Desktop/nTrust/src/images/arrow-dark_edit.png")}
              />
            </TouchableOpacity>
          </View>

          <Text style={{ fontSize: 10, marginVertical: 30 }}>
            You will not be charged until you select a lender
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            position: "absolute",
            bottom: 0
          }}
        >
          <LinearGradient
            style={{
              justifyContent: "center",
              height: hp("8%"),
              bottom: 0
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
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <Text
                style={{ color: "white", fontSize: 30, fontWeight: "bold" }}
              >
                SEE MATCHES
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>

        {/* modal  */}

        {/* modal */}
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
    justifyContent: "center"
  },
  iconimage: {
    height: 130,
    width: 130,
    borderRadius: 5
  },
  text: {
    marginTop: 10,
    fontSize: 30,
    color: "#256873",
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
    borderRadius: 3,
    width: "90%",
    elevation: 3
    // borderColor: 'black'
  },
  search: {
    height: 25,
    width: 25,
    margin: 5
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
