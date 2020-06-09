import React from 'react'
import {View,Text, Image} from 'react-native'
import {Button} from 'react-native-material-ui'
import {stylesCall,primaryColor} from '../supports/Styles'
import {defaultUser} from '../images'
import {connect} from 'react-redux'
import {Logout} from '../redux/actions/'

const Profile=({User})=>{

    return (
        <View style={stylesCall.center}>
            <View style={{
                width:250,
                height: 250,
                borderRadius:200,
                overflow:'hidden',
                // borderColor:'red',
                // borderWidth:1,
                justifyContent:'center'
            }}>
                <Image
                    style={{
                        width: '100%',
                        height: 300,
                        marginBottom: 20,
                        // flex: 1,
                        // aspectRatio: 4/1.3,
                        // resizeMode: 'cover'
                    }}
                    source={
                        User.displayPicture?
                        {uri: User.displayPicture}
                        :
                        defaultUser
                    }
                    // source={{
                    // uri: User.displayPicture,
                    // }}
                    // resizeMethod='resize'
                />
            </View>
            <Text style={[stylesCall.architectsDaughter,{fontSize:20,marginTop:20}]}>
                {User.username}
            </Text>
        </View>
    )
}

const MapstatetoProps=(state)=>{
    return {
        User: state.Auth
    }
}

export default connect (MapstatetoProps,{Logout}) (Profile);