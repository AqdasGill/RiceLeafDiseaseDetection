import { View, Text,ScrollView,StyleSheet,Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web'

const Recents = ({onpress,img}) => {
    return (
      
      <ScrollView horizontal={true} style={{paddingLeft:5,padding:5}}>
            <View onPress={onpress}style={{flexDirection:"column"}}>
                <View style={styles.reSty}>
                <Image
            style={{ width: 35, height: 35 }}
            source={require("../assets/leaf1.png")}
          />
           
            </View>
                <Text style={{marginTop:5,alignSelf:'center'}}>Leaf Blight</Text>
            </View>
            <View onPress={onpress}style={{flexDirection:"column",marginLeft:10}}>
                <View style={styles.reSty}>
                <Image
            style={{ width: 35, height: 35 }}
            source={require("../assets/leaf3.png")}
          />
            </View>
                <Text style={{marginTop:5,alignSelf:'center'}}>Brown Spot</Text>
            </View>
            <View onPress={onpress}style={{flexDirection:"column",marginLeft:10}}>
                <View style={styles.reSty}>
                <Image
            style={{ width: 35, height: 35 }}
            source={require("../assets/leaf4.png")}
          />
            </View>
                <Text style={{marginTop:5,alignSelf:'center'}}>Leaf Blast</Text>
                </View>
      </ScrollView>
     
  )
}

export default Recents
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    reSty: {
        height: 80,
        width: 80,
        borderRadius: 80/2,
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
    }
  });