import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Formik } from "formik";
import { TextInput, Button } from "react-native-paper";

const FormPersonalDetails = (props) => {
  const handleBack = () => {
    props.prevStep();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enter Company Details</Text>
      <View style={styles.form}>
        <Formik
          initialValues={{
            occupation: props.values.occupation,
            city: props.values.city,
            bio: props.values.bio,
          }}
          onSubmit={(values) => {
            // console.log(values);
            props.handlePersonalValues(values);
            props.nextStep();
          }}
        >
          {(props) => (
            <View>
              <TextInput
                label="Email"
                value={props.values.occupation}
                onChangeText={props.handleChange("occupation")}
              ></TextInput>
              <TextInput
                label="city"
                value={props.values.city}
                onChangeText={props.handleChange("city")}
              ></TextInput>
              <TextInput
                multiline
                label="bio"
                value={props.values.bio}
                onChangeText={props.handleChange("bio")}
              ></TextInput>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: 240,
                  marginTop: 20,
                }}
              >
                <Button mode="contained" onPress={props.handleSubmit}>
                  Continue
                </Button>
                <Button mode="contained" onPress={handleBack}>
                  Back
                </Button>
              </View>
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
export default FormPersonalDetails;
