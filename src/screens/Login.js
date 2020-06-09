import React, { useState } from 'react'
import {View,Text,TextInput} from 'react-native'
import {Button} from 'react-native-material-ui'
// import {MyTextField} from '../components/material-ui'
import {TextField} from 'react-native-material-textfield'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import {stylesCall,primaryColor} from '../supports/Styles'
import {connect} from 'react-redux'
import {Login as ActionLogin} from '../redux/actions'


const Login=({ActionLogin})=>{

    const [user,setuser] = useState('')
    
    return (
        <View style={{
            alignItems:'center',
            paddingTop:100,
            paddingHorizontal:20,
        }}>
            <Text style={[stylesCall.architectsDaughter,{marginBottom:50,fontSize:25}]}>Login</Text>
            <View style={{flexDirection:'row',marginTop:10}}>
                <TextInput
                    placeholder='Enter your name'
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, width:'100%', marginBottom:20 }}
                    onChangeText={(text)=>{
                        console.log(text)
                        setuser(text)
                    }}
                    value={user}
                />
            </View>
            <View style={{width:'100%'}}>
                <Button
                    primary
                    raised
                    text='Login'
                    style={{
                        container:{height:50},
                        text:[stylesCall.architectsDaughter,{fontSize:25,letterSpacing:4}]
                    }}
                    onPress={()=>{ActionLogin(user)}}
                />
            </View>
        </View>
    )
}

// const buttonprops={
//     container:{height:50},
//     text:{fontSize:25,letterSpacing:1}
// }

export default connect (null,{ActionLogin}) (Login);