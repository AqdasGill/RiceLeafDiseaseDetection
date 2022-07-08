import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'

const Result = ({ route }) => {
    const { img } = route.params;
  return (
    <View>
          
            <View style={{alignItems:'center',marginTop:20}}>
          <Image
            style={{ width: "90%", height: 250 }}
            source={{uri: img}}
              />
          </View>
          <Text style={{fontWeight:"bold",fontSize:25,marginTop:25,alignSelf:'center',color:'#00c853'}}>Your Result is : </Text>
    </View>
  )
}

export default Result
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  