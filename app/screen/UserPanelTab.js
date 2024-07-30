import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DashBoardScreen from './DashBoardScreen'
import SideBar from './SideBar'
import ChangePasswordScreen from './auth/ChangePasswordScreen'


const Drawer = createDrawerNavigator()

const UserPanelTab = () => {
  return (
    <Drawer.Navigator drawerContent={props =><SideBar {...props}/> } screenOptions={{headerStyle:{
        backgroundColor : 'purple' , 
    },headerTintColor:'white'}}>
      <Drawer.Screen name="DashBoard" component={DashBoardScreen} />
      <Drawer.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} options={{headerTitle:'Change Password'}} />
    </Drawer.Navigator>
  )
}

export default UserPanelTab