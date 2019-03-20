import React, { Component } from "react";
import { Modal, Text, TouchableOpacity, View, Alert } from "react-native";

export default ModalExample = ({modalVisible,onClose,bgcolor,text,customCompo,abc}) => {
  return (
    <View
      style={{ marginTop: 22, justifyContent: "center", alignItems: "center" }}
    >
      <Modal
        backdrop={false}
        animationType="fade"
        transparent={true}
        visible={modalVisible}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#00000050"
// backgroundColor : bgcolor
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "80%",
              height: "50%",
              backgroundColor : bgcolor,
              borderRadius: 8
            }}
          >
            <TouchableOpacity
              onPress={onClose}
            >

            {customCompo}
                          <Text>{text}</Text>
                          <TouchableOpacity>{abc}</TouchableOpacity>

              <Text>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
