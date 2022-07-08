import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React,{useState} from "react";
import { Slider } from "./Slider/Slider";
import { Button } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import { ScrollView } from "react-native";
import Recents from "./Recents";
const HomeScreen = ({navigation}) => {

    const [image, setImage]=useState()
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
 
        if (!result.cancelled) {
            setImage(result.uri);
            console.log(result.uri);
             result.name;
        }
    
    };
    const openCamera = async () => {
        // Ask the user for the permission to access the camera
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("You've refused to allow this appp to access your camera!");
          return;
        }
    
        const result = await ImagePicker.launchCameraAsync();
  
        // Explore the result
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
          console.log(result.uri);
          
        }
  };
  
  const results = () => {
    if (image == null) {
      console.log("worket empty");
      alert("Please select the picture first");
    
    }
    else {
      navigation.navigate("Result",{img:image})
    }
  }
  // const ss = () => {
  //   console.log("gsjhgsj");
// }
  return (
      // <ScrollView showsVerticalScrollIndicator={false}>
      <View>

  
          <Text style={{marginTop:60,fontWeight:"bold",fontSize:20,alignSelf:'center'}}>Welcome User!</Text>
      <View style={styles.container}>
        <Slider />
      </View>
      <View style={{marginTop:10,marginLeft:7}}>
        <Text style={{color:"gray",fontWeight:"bold"}}>Popular Diseases</Text>
      </View>
     {/* TouchableOpacity from me */}
      {/* <Recents  /> */}
      <ScrollView  horizontal={true} style={{paddingRight:5,padding:5}}>
      <TouchableOpacity onPress={() => navigation.navigate("Leaf Blight")} style={styles.tch} >
            <View style={{flexDirection:"column"}}>
                <View style={styles.reSty}>
                <Image style={{ width: 35, height: 35 }} source={require("../assets/leaf1.png")}/>
            </View>
               
            </View>
            
            </TouchableOpacity>
            <Text style={{flexDirection:"row",marginTop:15,alignSelf:'center'}}>Leaf Blight</Text>

            <TouchableOpacity onPress={() => navigation.navigate("Brown Spot")} style={styles.tch}>
            <View style={{flexDirection:"column",marginLeft:10}}>
                <View style={styles.reSty}>
                <Image
            style={{ width: 35, height: 35 }}
            source={require("../assets/leaf3.png")}
          />
            </View>
                
            </View>
           
            </TouchableOpacity>
            <Text style={{flexDirection:"row", marginTop:15,alignSelf:'center'}}>Brown Spot</Text>
            

            <TouchableOpacity onPress={() => navigation.navigate("Leaf Blast")} style={styles.tch}>
            <View style={{flexDirection:"column",marginLeft:10}}>
                <View style={styles.reSty}>
                <Image
            style={{ width: 35, height: 35 }}
            source={require("../assets/leaf4.png")}
          />
            </View>
            </View>
            </TouchableOpacity>
           
            <Text style={{flexDirection:"row",marginTop:15,alignSelf:'center'}}>Leaf Blast</Text>
            </ScrollView>
            {/* <ScrollView  horizontal={true} style={{paddingRight:5,padding:5}} >
              <View style={{flexDirection:"row"}}>
            <Text style={{marginTop:15,alignSelf:'center'}}>Leaf Blight</Text>
            <Text style={{marginTop:15,alignSelf:'center'}}>  Brown Spot</Text> 
            <Text style={{marginTop:15,alignSelf:'center'}}>  Leaf Blast</Text>
            </View>
            </ScrollView>
            */}

            {/* End her */}
       
      <View style={{marginTop:40,flexDirection:"row",justifyContent:"space-evenly"}}>
        <TouchableOpacity style={styles.HelperContainer} onPress={()=>pickImage()}>
          <Image
            style={{ width: 35, height: 35 }}
            source={require("../assets/ButtonIcon/upload.png")}
          />
          <Text
            style={{
              marginTop: 15,
              fontWeight: "bold",
              color: "#1976d2",
              fontSize: 11,
            }}
          >
            Upload
          </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.HelperContainer} onPress={()=>openCamera()}>
          <Image
            style={{ width: 35, height: 35 }}
            source={require("../assets/ButtonIcon/camera1.png")}
          />
          <Text
            style={{
              marginTop: 15,
              fontWeight: "bold",
              color: "#1976d2",
              fontSize: 11,
            }}
          >
            Camera
          </Text>
        </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.btnsty} onPress={()=>results()}>
            <Text style={{fontWeight:'bold',color:"#ffff",fontSize:20}}>Show Result</Text>
      </TouchableOpacity>
      <View style={{height:150}}></View>
      </View>
    // </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  HelperContainer: {
    height: 110,
    width: 110,
    borderRadius: 20,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Platform.OS == "ios" ? "#ffff" : "#f5f5f5",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,
    },
    btnsty: {
        height: 50,
        width: 255,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        alignSelf:'center',
        backgroundColor:"#00c853",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4.65,
        marginTop:50
  },
  tch: {
    height: 70, 
      width: 70,
      borderRadius: 80/2,
      borderColor: "gray",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: Platform.OS == "android" ? "#ffff" : "#f5f5f5",
      // backgroundColor: Platform.OS == "ios" ? "#ffff" : "#f5f5f5",
      shadowColor: "#000",
      shadowOffset: {
        width: 5,
        height: 2,
      },
      // shadowOpacity: 0.2,
      // shadowRadius: 4.65,
  },

});
