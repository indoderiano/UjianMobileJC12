import React, { useEffect } from 'react'
import {View,Text,Image} from 'react-native'
import {Button} from 'react-native-material-ui'
import {stylesCall} from '../supports/Styles'
import {Update} from '../redux/actions'
import { connect } from 'react-redux'

const StackTwo=({route,Update,User,navigation})=>{

    const {data}=route.params

    useEffect(()=>{
        // console.log(route.params)
        // console.log(defaultUser)

    },[])

    return (
        <View style={stylesCall.center}>
            <Image
                style={{
                    width: '100%',
                    height: 300,
                    marginBottom: 20,
                    // flex: 1,
                    // aspectRatio: 4/1.3,
                    // resizeMode: 'cover'
                }}
                
                source={{
                uri: data.url,
                }}
                // resizeMethod='resize'
            />

            <Button
                primary
                raised
                text='Set As Display Picture'
                style={{
                    container:{height:50},
                    text:[stylesCall.architectsDaughter,{fontSize:15,letterSpacing:2}]
                }}
                onPress={()=>{
                    Update({displayPicture:data.url});
                    navigation.goBack()
                }}
            />

            {/* <Text>User display picture: {User.displayPicture}</Text> */}
        </View>
    )
}

const MapstatetoProps=(state)=>{
    return {
        User: state.Auth
    }
}

export default connect(MapstatetoProps,{Update}) (StackTwo);