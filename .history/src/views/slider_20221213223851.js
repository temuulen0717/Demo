import React from 'react'
import {View, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Medicine from './Medicine'

const Drawer = createDrawerNavigator();

const Sidebar = () => {
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen
                    key='Medicine'
                    name = 'Medicine'
                    component = {Medicine}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}