import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import FormUser from "./FormUser";

import { TextInput } from "react-native-paper";
import FormPersonalDetails from "./FormPersonalDetails";
import Success from "./Success";

class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };
  handleUserValues = (values) => {
    const { email, firstName, lastName } = this.state;

    this.setState({
      email: values.email,
      firstName: values.firstName,
      lastName: values.lastName,
    });
    console.log(email, firstName, lastName);
  };
  handlePersonalValues = (values) => {
    const { occupation, city, bio } = this.state;

    this.setState({
      occupation: values.occupation,
      city: values.city,
      bio: values.bio,
    });
    console.log(occupation, city, bio);
  };
  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    switch (step) {
      case 1:
        return (
          <View>
            <FormUser
              nextStep={this.nextStep}
              values={values}
              handleUserValues={this.handleUserValues}
            />
          </View>
        );
      case 2:
        return (
          <View>
            <FormPersonalDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
              handlePersonalValues={this.handlePersonalValues}
            />
          </View>
        );

      case 3:
        return (
          <View>
            <Success values={values} />
          </View>
        );

      default:
        return (
          <View>
            <Text>Multistep Form</Text>
          </View>
        );
    }
  }
}

// const UserForm = () => {
// };

const styles = StyleSheet.create({
  container: {},
});
export default UserForm;
