import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import UserLoginScreen from "./app/screen/auth/UserLoginScreen"
import ShopTab from "./app/screen/shop/ShopTab";
import RegistrationScreen from "./app/screen/auth/RegistrationScreen";


const Stack = createNativeStackNavigator()


export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerTintColor:'white',headerStyle:{backgroundColor:'purple'}}} >
        <Stack.Screen name="ShopTab" component={ShopTab} options={{headerShown:false}}  />
        <Stack.Screen name="UserLogin" component={UserLoginScreen} options={{headerTitle:'User Login'}}  />
        <Stack.Screen name="Registration"  component={RegistrationScreen} options={{headerTitle:'Registration',headerBackVisible:false}}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}