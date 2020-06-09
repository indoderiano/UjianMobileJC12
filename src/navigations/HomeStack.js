import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import MainTab from './MainTab'
import Home from '../screens/Home'
import StackTwo from '../screens/StackTwo'


const Stack=createStackNavigator()

const HomeStack=()=>{

    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
            <Stack.Screen name='Detail' component={StackTwo}/>
        </Stack.Navigator>
    )
}

export default HomeStack;