/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';

import {Provider, connect} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import Thunk from 'redux-thunk'
import reducers from './src/redux/reducers'

import {NavigationContainer} from '@react-navigation/native'

import {
  getTheme,
  ThemeContext,
  COLOR
} from 'react-native-material-ui'

import Cover from './src/screens/Cover'
import HomeStack from './src/navigations/HomeStack'
import MainTab from './src/navigations/MainTab'
import Login from './src/screens/Login'

import AsyncStorage from '@react-native-community/async-storage'
import {KeepLogin} from './src/redux/actions'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';




const AppInit=({User,KeepLogin})=>{

  const [loading,setloading] = useState(true)

  useEffect(()=>{
    console.log('didmount init')
    CallBack()
  },[])

  const CallBack= async()=>{
    try{
      const user=await AsyncStorage.getItem('ujian_jc12')
      if(user){
        console.log('user')
        console.log(user)
        KeepLogin(user)
      }
      setloading(false)
    }catch(err){
      console.log(err)
      setloading(false)
    }
  }

  if(loading){
    return (
      <Cover/>
    )
  }else{
    return (
      User.islogin?
      // <HomeStack/>
      <MainTab/>
      :
      <Login/>
    )
  }
}

const MapstatetoProps=(state)=>{
  return {
    User: state.Auth
  }
}

const AppInitReduxed=connect(MapstatetoProps,{KeepLogin})(AppInit);




const store=createStore(reducers,{},applyMiddleware(Thunk))

const theme={
  palette:{
    primaryColor: COLOR.teal600,
    accentColor: COLOR.red600
  }
}

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ThemeContext.Provider value={getTheme(theme)}>
          <AppInitReduxed/>
        </ThemeContext.Provider>
      </NavigationContainer>
    </Provider>
  );
};



export default App;
