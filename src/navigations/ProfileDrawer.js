import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Profile from '../screens/Profile'
import Setting from '../screens/Setting'


const Drawer=createDrawerNavigator()

const ProfileDrawer=()=>{

    return (
        <Drawer.Navigator drawerPosition={'right'}>
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Setting" component={Setting} />
        </Drawer.Navigator>
    )
}

export default ProfileDrawer;