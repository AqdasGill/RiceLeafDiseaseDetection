import React, { useState, useRef, useEffect } from "react";
import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Pressable,
  View,

  StatusBar,

} from "react-native";
import { Button, SocialIcon } from "react-native-elements";

import { StyleSheet } from "react-native";


export default function ProfileEdit({ navigation }) {
  const [loading, setloading] = useState(false);
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [images, setImage] = useState("");
  const phoneRef = useRef(undefined);



 

  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
    
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginScreenContainer}>
            <View style={styles.loginFormView}>
              <Text style={styles.logoText}>Edit Profile</Text>
              <View style={styles.margin}>
              <Image style={styles.imgsty} source={require("../assets/agent.png")} />
              </View>
              <TextInput
                placeholder="Full name"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
                value={fullName}
                onChangeText={(t1) => {
                  setFullname(t1);
                }}
              />
              <TextInput
                placeholder="Email"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
                keyboardType="email-address"
                value={email}
                onChangeText={(t1) => {
                  setEmail(t1);
                }}
              />
              <TextInput
                placeholder="Phone"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
                keyboardType="phone-pad"
                value={phone}
                onChangeText={(t1) => {
                  setPhone(t1);
                }}
              />

              <Button
                buttonStyle={styles.loginButton}
                onPress={() => navigation.goBack()}
                title="Update"
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    alignItems: "center",
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginBottom: 30,
    alignSelf:'flex-start'
  },
  loginFormView: {
    flex: 1,
  },
  createNewAccount: {
    marginTop: 14,
    alignSelf: "center",
    fontSize: 14,
    color: "#3897f1",
    },
    imgsty: {
        height: 120,
        width: 120,
        borderRadius: 120 / 2,
        borderColor: "gray",
        borderWidth: 2,
      },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#eaeaea",
    backgroundColor: "#fafafa",
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  loginButton: {
    backgroundColor: "#3897f1",
    borderRadius: 5,
    height: 45,
    marginTop: 30,
    width: 350,
    alignItems: "center",
  },
  margin: {
      marginBottom: 30,
      alignContent:'center',alignSelf:'center'
  },

  container: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    paddingTop: 30,
    // backgroundColor: "#ecf0f1",
    padding: 1,
  },
  spinnerTextStyle: {
    color: "#FFF",
    fontSize: 15,
  },
  phoneInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#eaeaea",
    backgroundColor: "#fafafa",
    paddingLeft: 10,
    marginTop: 10,
    marginBottom: 5,
  },
});
