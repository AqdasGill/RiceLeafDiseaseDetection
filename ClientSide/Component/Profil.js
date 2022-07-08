import {
  View,
  Text,
  Image,
  StyleSheet,
  BackHandler,
  Alert,
  StatusBar,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { ScrollView, RefreshControl, ActivityIndicator } from "react-native";

import React, { useEffect } from "react";

import { useState } from "react";
import { Ionicons, MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import SettingCompDesign from "./SettingCompDesign";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export const Profil = ({ navigation }) => {
  const [images, setImage] = useState();
  const [fullname, setFullName] = useState();
  const [email, setEmail] = useState();
  const [refreshing, setRefreshing] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const onRefresh = React.useCallback(() => {
    wait(2000).then(() => setRefreshing(false));
  }, []);
  let userToken;

  if (loading) {
    return (
      <View style={{ justifyContent: "center", flex: 1 }}>
        <ActivityIndicator size="large" color="gray" bool="false" />
      </View>
    );
  }

  const backAction = () => {
    Alert.alert("Log Out!", "Are you sure to Log Out?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel",
      },
      {
        text: "YES",
        onPress: () => {
          logout();
        },
      },
    ]);
    return true;
  };

  const logout = () => {
    
        navigation.replace("Login");
      
      
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={{ alignItems: "center" }}>
        <StatusBar barStyle="dark-content" />

        <View style={styles.firstblock}>
          <TouchableOpacity >
            <View style={{ height: 110, width: 100, justifyContent: "center" }}>
              <Image style={styles.imgsty} source={require("../assets/agent.png")} />
            </View>
          </TouchableOpacity>
          <View style={{ justifyContent: "center" }}>
            <Text style={styles.textsty}>MB Malik</Text>
            <Text style={styles.textsty}>Mbmalik23@gmail.com</Text>
          </View>
          <View style={{ paddingBottom: 75, marginLeft: -10 || 0 }}>
            <Feather
              name="edit"
              size={32}
              color="gray"
              onPress={() => navigation.navigate("Profile Edit")}
            />
          </View>
        </View>

        <View>
          <Text style={styles.catText}>Support</Text>
        </View>
        <View style={styles.thirdblock}>
          <SettingCompDesign text={"Contact Us"} />
          <SettingCompDesign
            text={"About Us"}
            onPress={() => null}
          />
          <SettingCompDesign
            text={"Terms of services"}
            onPress={() => navigation.navigate("Term Condition")}
          />
          <SettingCompDesign
            text={"Help"}
            onPress={() => null}
          />
        </View>
        <View>
          <Text style={styles.catText}>Settings</Text>
        </View>
        <View style={styles.thirdblock}>
          <SettingCompDesign
            text={"Change Password"}
            onPress={() => navigation.navigate("ChangePassword")}
          />
          <SettingCompDesign text={"Language"} />
          <Text style={styles.cat3Text} onPress={backAction}>
            Logout
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  textsty: {
    color: "#454b4f",
    fontSize: 18,
    marginLeft: 10,
    fontWeight: "bold",
  },

  textsty2: {
    fontSize: 15,
    marginLeft: 10,
  },
  imgsty: {
    height: 70,
    width: 70,
    borderRadius: 70 / 2,
    borderColor: "gray",
    borderWidth: 2,
    marginLeft: 20,
  },
  catText: {
    color: "gray",
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 20,
    marginRight: 300,
  },
  firstblock: {
    height: 120,
    width: "95%",
    backgroundColor: "#b2ff59",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4.65,
    marginTop: 10,
    borderRadius: 10,
    flexDirection: "row",
  },
  secondblock: {
    height: 50,
    width: "95%",
    backgroundColor: "white",
    shadowColor: "#000",
    alignSelf: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4.65,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: "space-evenly",
    //paddingLeft: 10,
    textAlign: "left",
  },
  thirdblock: {
    height: 150,
    width: "95%",
    backgroundColor: "white",
    shadowColor: "#000",
    alignSelf: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4.65,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: "space-evenly",
    //paddingLeft: 10,
    textAlign: "left",
  },
  cat2Text: {
    marginLeft: 10,
    textAlign: "left",
    fontSize: 15,
  },
  cat3Text: {
    marginLeft: 10,
    color: "red",
    fontSize: 15,
  },
});
