import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Component/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from './Component/Signup';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from './Component/HomeScreen';
import Result from './Component/Result';
import { Profil } from './Component/Profil';
import { Changepassword } from './Component/Changepassword';
import { ForgotPassword } from './Component/ForgotPassword';
import TermCondition from './Component/TermCondition';
import ProfileEdit from './Component/ProfileEdit';
import DiseasesDetail from './Component/DiseaseDetail';
import BrownSpotz from './Component/BrownSpotDetail';
import Leafblast from './Component/LeafBlast';
const Stack = createNativeStackNavigator();

export default function App() {
  const Tab = createBottomTabNavigator();
 
  function Home() {
    return (
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen name="Homescreen" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Result" component={Result} />
        </Stack.Group>
        </Stack.Navigator>
    );
  }
  function Profile() {
    return (
      <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="Profil" component={Profil} options={{ headerShown: false }}/>
          <Stack.Screen name="ChangePassword" component={Changepassword} options={{ headerShown: false }} />
          <Stack.Screen name="Forgot Password" component={ForgotPassword}  />
          <Stack.Screen name="Term Condition" component={TermCondition} />
          <Stack.Screen name="Profile Edit" component={ProfileEdit}  />
      </Stack.Group>
      </Stack.Navigator>
    
    );
  }
 
  function FrontScreen({ route }) {
 
    return (
      
    <Tab.Navigator  
   // screenOptions={{  gesturesEnabled: false,route}}  
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home-outline";
          
            } else if (route.name === "Chat") {
              iconName = focused
                ? "ios-chatbox-ellipses"
                : "ios-chatbox-ellipses-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "ios-person" : "ios-person-outline";
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={35} color={color} />;
          },
          tabBarActiveTintColor: "#00c853",
          tabBarInactiveTintColor: "gray",
        })}
      >
     
        <Tab.Screen name="Home" component={Home} options={{ headerShown: false}}/> 
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
       
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="FrontScreen" component={FrontScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Forgot Password" component={ForgotPassword}  />
        <Stack.Screen name="Leaf Blight" component={DiseasesDetail} options={{headerShown:true}} />
        <Stack.Screen name="Brown Spot" component={BrownSpotz} options={{headerShown:true}} />
        <Stack.Screen name="Leaf Blast" component={Leafblast} options={{headerShown:true}} />
      </Stack.Navigator>
      </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
