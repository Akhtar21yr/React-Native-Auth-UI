import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DashBoardScreen from './DashBoardScreen'

const Drawer = createDrawerNavigator()

const UserPanelTab = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="DashBoard" component={DashBoardScreen} />
      {/* <Drawer.Screen name="UserPanel" component={UserPanelScreen} /> */}
    </Drawer.Navigator>
  )
}

export default UserPanelTab