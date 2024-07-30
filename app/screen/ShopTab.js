import { createDrawerNavigator } from '@react-navigation/drawer'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import {Text} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import HomeScreen from './shop/HomeScreen'


const Drawer = createDrawerNavigator()

const ShopTab = () => {
    const navigation = useNavigation()
  return (
    <Drawer.Navigator screenOptions={{headerStyle:{backgroundColor:'purple'},headerTintColor:'white',drawerStyle : {backgroundColor:'#F0EDED'}}}>
        <Drawer.Screen name="Home" component={HomeScreen} options={{headerTitle:'Raza-Shop',drawerActiveTintColor:'black',headerRight:()=><TouchableWithoutFeedback onPress={()=>navigation.navigate('UserLogin')}><Text style={{color:'white',fontSize:18,paddingRight:20,fontWeight:'bold'}}>Login</Text></TouchableWithoutFeedback>}} />
    </Drawer.Navigator>
  )
}

export default ShopTab