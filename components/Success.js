import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const Success = (props) => {
  return (
    <View style={styles.container}>
      <Text>Confirmation Page</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 5,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>Email:</Text>
        <Text>{props.values.email}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontWeight: "bold" }}>Occupation:</Text>
        <Text>{props.values.occupation}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 60,
  },
});
export default Success;
