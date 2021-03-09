import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Formik } from "formik";
import { TextInput, Button } from "react-native-paper";

const FormUser = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enter Personal Details</Text>
      <View style={styles.form}>
        <Formik
          initialValues={{
            email: props.values.email,
            firstName: props.values.firstName,
            lastName: props.values.lastName,
          }}
          onSubmit={(values) => {
            // console.log(values);

            props.handleUserValues(values);
            props.nextStep();
          }}
        >
          {(props) => (
            <View>
              <TextInput
                label="Email"
                value={props.values.email}
                onChangeText={props.handleChange("email")}
              ></TextInput>
              <TextInput
                label="firstName"
                value={props.values.firstName}
                onChangeText={props.handleChange("firstName")}
              ></TextInput>
              <TextInput
                label="lastName"
                value={props.values.lastName}
                onChangeText={props.handleChange("lastName")}
              ></TextInput>
              <Button mode="contained" onPress={props.handleSubmit}>
                Continue
              </Button>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 60,
  },
  header: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  form: {
    marginTop: 20,
  },
});
export default FormUser;
