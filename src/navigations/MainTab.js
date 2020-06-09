import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
// import Home from '../screens/Home'
import HomeStack from './HomeStack'
import Profile from '../screens/Profile'
import ProfileDrawer from './ProfileDrawer'
import Setting from '../screens/Setting'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import {COLOR} from 'react-native-material-ui'
import {primaryColor,stylesCall} from '../supports/Styles'

const Tab=createBottomTabNavigator()

const MainTab=()=>{

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'HomeStack') {
                    iconName = focused
                    ? 'home-variant'
                    : 'home-variant-outline';
                    return <MCIcon name={iconName} size={size} color={color}/>;
                }else if(route.name==='Profile'){
                    iconName = focused
                    ? 'user-circle'
                    : 'user-circle-o';
                    return <FAIcon name={iconName} size={size} color={color}/>;
                } else if (route.name === 'Settings') {
                    iconName = focused ? 'ios-list-box' : 'ios-list';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            })}
            tabBarOptions={{
                activeTintColor: primaryColor,
                inactiveTintColor: 'gray',
                style:{padding:5,height:60},
                labelStyle:[{marginBottom:5,fontSize:12},stylesCall.montserratSemibold],
            }}
        >
            <Tab.Screen name="HomeStack" component={HomeStack} />
            <Tab.Screen name="Profile" component={ProfileDrawer}/>
            {/* <Tab.Screen name="Settings" component={Setting} /> */}
        </Tab.Navigator>
    )
}

export default MainTab;