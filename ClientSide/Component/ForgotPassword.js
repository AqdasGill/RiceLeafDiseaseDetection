import React from "react";
import { View, TextInput, Text, Image } from "react-native";
import { useState } from "react";
import NewButton from "./NewButton";
export const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [valid1, setValid1] = useState(null);
  const [isValid, setIsValid] = useState(false);
  const [visib, setVisib] = useState(false);
  const [title, setTitle] = useState("Next");
  const emailRegex = /\S+@\S+\.\S+/;


  



  const validateEmail = () => {
    if (emailRegex.test(email)) {
      setIsValid(true);
    } else {
      setIsValid(false);
      setValid1("Please enter a valid email!");
    }
  };

  const forgotPassword = () => {};

  return (
    <View>
      <View style={{ alignItems: "center" }}>
        <Image
          style={{ width: 90, height: 90, marginTop: 100 }}
          source={require("../assets/email.png")}
        />
      </View>
      {/* {visib === false ? */}
      <View
        style={{
          paddingLeft: 30,
          paddingRight: 30,
          paddingBottom: 30,
          paddingTop: 100,
        }}
      >
        <TextInput
          style={{
            fontSize: 16,
            color: "black",
            borderBottomColor: email == "" ? "#ddd" : "green",
            borderBottomWidth: 1,
            paddingBottom: 10,
          }}
          placeholder="Enter Email"
          keyboardType="email-address"
          onChangeText={(t1) => {
            setEmail(t1);
            setValid1("");
          }}
          onChange={validateEmail}
        />
        <Text style={{ color: "red" }}>{valid1}</Text>
      </View>
     
      <View style={{ alignItems: "center", marginTop: 50 }}>
      <NewButton title={"Send Link"} type={"solid"} color={"#00c853"} onPress={()=>navigation.goBack()}/>
      </View>
    </View>
  );
};
