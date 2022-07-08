import React, { useEffect, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Button, SocialIcon } from "react-native-elements";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ShowError,ShowSuccess } from "./Error/ShowError";
import { auth } from "../firebase";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [eye, setEye] = useState("eye-off");
  const [color, setColor] = useState("gray");
  const [visible, setVisible] = useState(true);


  const handleLogin = () => {
    auth
    .signInWithEmailAndPassword(email,pass)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log("logged in as",user.email);
      navigation.replace("FrontScreen")
    })
    .catch(error => alert(error.message))
  };

    const onLoginPress = () => {
        console.log("hello");
    if (email == "" && pass == "") {
        // ShowError("Please fill out all required fields");
        alert("Please fill out all required fields")
    } else if (email == "" || pass == "") {
      if (email == "") {
        alert("Please enter your email")
      } else if (pass == "") {
 
        alert("Please enter your Password")
      }
    } else {
        handleLogin();
    }
  };

  const showpass = () => {
    if (eye == "eye-off") {
      setEye("eye");
      setColor("#00c853");
      setVisible(false);
    } else if (eye == "eye") {
      setEye("eye-off");
      setColor("gray");
      setVisible(true);
    }
  };
  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <StatusBar barStyle="dark-content" />

      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginScreenContainer}>
            <View style={styles.loginFormView}>
              <Text style={styles.logoText}>Login</Text>
              <TextInput
                placeholder="Username"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
                keyboardType="email-address"
                onChangeText={(t1) => {
                  setEmail(t1);
                }}
              />

              <TextInput
                placeholder="Password"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
                secureTextEntry={visible}
                onChangeText={(t2) => {
                  setPass(t2);
                }}
              />
              <View
                style={{
                  alignSelf: "flex-end",
                  marginRight: 13,
                  marginTop: -35,
                }}
              >
                <Ionicons
                  onPress={showpass}
                  name={eye}
                  size={22}
                  color={color}
                />
              </View>

              <TouchableOpacity style={{ marginTop: 5, alignSelf: "flex-end" }}>
                <Text
                  style={{ color: "#3897f1", marginTop: 8 }}
                  onPress={() => navigation.navigate("Forgot Password")}
                >
                  Forgot Password?
                </Text>
              </TouchableOpacity>

              <Button
                buttonStyle={styles.loginButton}
                onPress={() => onLoginPress()}
                title="Login"
              />

              <TouchableOpacity onPress={() => navigation.replace("signup")}>
                <Text style={styles.createNewAccount}>Create new account?</Text>
              </TouchableOpacity>
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
    marginTop: 130,
    marginBottom: 30,
    textAlign: "center",
    color: "#00c853",
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
    backgroundColor: "#00c853",
    borderRadius: 5,
    height: 45,
    marginTop: 30,
    width: 350,
    alignItems: "center",
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
  SwitchStyle: {
    marginTop: 65,
    alignSelf: "flex-end",
    marginRight: 25,
  },
});
