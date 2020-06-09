import React from 'react'
import {View,Text} from 'react-native'
import {stylesCall} from '../supports/Styles'

const Cover=()=>{

    return (
        <View style={stylesCall.center}>
            <Text style={[stylesCall.architectsDaughter,{fontSize:50}]}>Cover</Text>
        </View>
    )
}

export default Cover;