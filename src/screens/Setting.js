import React from 'react'
import {View,Text} from 'react-native'
import {Button} from 'react-native-material-ui'
import {stylesCall,primaryColor} from '../supports/Styles'
import {connect} from 'react-redux'
import {Logout} from '../redux/actions/'

const Setting=({Logout})=>{

    return (
        <View style={stylesCall.center}>
            <View>
                {/* <Button
                    // title='test'
                    color={primaryColor}
                /> */}
                <Button
                    primary
                    raised
                    text='Logout'
                    icon='logout'
                    iconSet='MaterialCommunityIcons'
                    style={{
                        container:{height:50},
                        text:[stylesCall.architectsDaughter,{fontSize:20,letterSpacing:2}]
                    }}
                    onPress={Logout}
                />
            </View>
        </View>
    )
}

export default connect (null,{Logout}) (Setting);