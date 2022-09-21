import React from "react";
import { View, Text } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";

import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()
const BottomTab = () => {
    return (
      <Tab.Navigator>
            <Tab.Screen options={{
                tabBarIcon: ({ color }) => (
                    <Entypo name="home" size={24} color={color} />
                ),
                headerShown:false,

            }} name='Home' component={HomeScreen} />
         <Tab.Screen options={{
            tabBarIcon:({color})=>(
                <Ionicons name="person" size={24} color={color}/>
            ),
         }}
          name = 'Profile' component={ProfileScreen}/>
      </Tab.Navigator>
    )
}

export default BottomTab;