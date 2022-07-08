import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import NewButton from "./NewButton";


export const Changepassword = ({ navigation }) => {
  const [color1, setColor1] = useState("gray");
  const [pass1, setPass1] = useState("");
  const [valid1, setValid1] = useState(null);
  const [eye1, setEye1] = useState("eye-off");
  const [visible1, setVisible1] = useState(true);

  const [color2, setColor2] = useState("gray");
  const [Newpass2, setNewPass2] = useState("");
  const [valid2, setValid2] = useState("");
  const [eye2, setEye2] = useState("eye-off");
  const [visible2, setVisible2] = useState(true);

  const [color3, setColor3] = useState("gray");
  const [pass3, setPass3] = useState("");
  const [valid3, setValid3] = useState(null);
  const [eye3, setEye3] = useState("eye-off");
  const [visible3, setVisibl3] = useState(true);
  const [loading, setloading] = useState(false);





  

  const showpass1 = () => {
    if (eye1 == "eye-off") {
      setEye1("eye");
      setColor1("#3897f1");
      setVisible1(false);
    } else if (eye1 == "eye") {
      setEye1("eye-off");
      setColor1("gray");
      setVisible1(true);
    }
  };
  const showpass2 = () => {
    if (eye2 == "eye-off") {
      setEye2("eye");
      setColor2("#00c853");
      setVisible2(false);
    } else if (eye2 == "eye") {
      setEye2("eye-off");
      setColor2("gray");
      setVisible2(true);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
       
      <Text
        style={{
          fontSize: 30,
          fontWeight: "800",
          marginTop: 35,
          marginBottom: 30,
          textAlign: "left",
          marginLeft:10
        }}
      >
        Change Password
      </Text>
      <View style={{ alignItems: "center" }}>
        <Image
          style={{ width: 90, height: 90, marginBottom: 10 }}
          source={require("../assets/password.png")}
        />
      </View>
      <View
        style={{
          paddingLeft: 20,
          paddingRight: 20,
          marginTop: 50,
        }}
      >
        <TextInput
          style={styles.PassTextInput}
          placeholder="Current Password"
          secureTextEntry={visible1}
          onChangeText={(t2) => {
            setPass1(t2);
            setValid1("");
          }}
        />

        <View
          style={{ marginTop: -37, alignSelf: "flex-end", marginRight: 20 }}
        >
          <Ionicons onPress={showpass1} name={eye1} size={22} color={color1} />
        </View>

        <Text style={{ color: "red", marginTop: 5 }}>{valid1}</Text>
      </View>
      <View style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 30 }}>
        <TextInput
          style={styles.PassTextInput}
          placeholder="New Password"
          secureTextEntry={visible2}
          onChangeText={(t2) => {
            setNewPass2(t2);
            setValid2("");
          }}
        />

        <View
          style={{ marginTop: -37, alignSelf: "flex-end", marginRight: 20 }}
        >
          <Ionicons onPress={showpass2} name={eye2} size={22} color={color2} />
        </View>
        <TouchableOpacity style={{ marginTop: 5, alignSelf: "flex-end" }}>
                <Text
                  style={{ color: "#3897f1", marginTop: 10 }}
                  onPress={() => navigation.navigate("Forgot Password")}
                >
                  Forgot Password?
                </Text>
        </TouchableOpacity>
        <NewButton title={"Change Password"} type={"solid"} color={"#00c853"} onPress={()=>navigation.goBack()}/>
        <Text style={{ color: "red", marginTop: 6 }}>{valid2}</Text>
      </View>

    
        <View style={{ height: 250 }}></View>
        </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  PassTextInput: {
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
});
