import React, { useEffect, useState } from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {Button} from 'react-native-material-ui'
import { connect } from 'react-redux'
import {stylesCall,primaryColor} from '../supports/Styles'
import Axios from 'axios'
import { ScrollView } from 'react-native-gesture-handler'


const Home=({User,navigation})=>{

    const [catlist,setcatlist] = useState([])
    
    useEffect(()=>{
        console.log('didmount home')

        CallBack()

    },[])


    const CallBack=async()=>{

        try{
            Axios.defaults.headers.common['x-api-key'] = "5b5522be-58b1-4dc3-bbe5-b73af5e841ac" // Replace this with your API Key

            var res = await Axios.get('https://api.thecatapi.com/v1/images/search', { params: { limit:12, size:"full" } } ) // Ask for 1 Image, at full resolution

            console.log(res.data.length)

            setcatlist(res.data)

        }catch(err){
            console.log(err)
        }
    }

    const renderCats=()=>{
        if(!catlist.length){
            return (
                <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:100}}>
                    <Text style={[stylesCall.architectsDaughter,{fontSize:20}]}>Loading...</Text>
                </View>
            )
        }
        return catlist.map((cat,index)=>{
            return (
                <TouchableOpacity 
                key={index}
                activeOpacity={.5}
                style={{width:'50%'}} 
                onPress={()=>{navigation.navigate('Detail',{data:cat})}}
                >
                    <View style={{
                        width: '100%',
                        padding:5,
                        paddingBottom:10,
                        height: 200,
                        // borderColor:'red',
                        // borderWidth:1,
                    }}>
                        <View style={{
                            width:'100%',
                            display:'flex',
                            // flexDirection: 'row',
                            borderRadius: 4,
                            overflow: 'hidden',
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 8,
                            },
                            shadowOpacity: 0.44,
                            shadowRadius: 10.32,

                            elevation: 4,    
                        }}>
                                <Image
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        // flex: 1,
                                        // aspectRatio: 4/1.3,
                                        // resizeMode: 'cover'
                                    }}
                                    source={{
                                    uri: cat.url,
                                    }}
                                    // resizeMethod='resize'
                                />
                                {/* <View style={styles.overlay}/> */}
                                
                                {/* <TextUbuntu style={{
                                    position: 'absolute',
                                    top: 5,
                                    left: 5,
                                    color: 'white',
                                    fontSize: 15,
                                    letterSpacing: 4
                                }}>
                                    {store.storename}
                                </TextUbuntu> */}

                                <View style={{
                                    position: 'absolute',
                                    bottom: "50%",
                                    right: 10,
                                    transform: ([{translateY:15}]),
                                    opacity: .8
                                }}>
                                    <View style={{flexDirection:'row'}}>
                                        {/* <Text style={{color:'orange'}}>
                                            menu
                                        </Text> */}
                                        {/* <Icon 
                                            name='long-arrow-alt-right' 
                                            color={primaryColor}
                                            size={30}
                                            style={{
                                                paddingTop:0,
                                                paddingLeft:5,
                                                textAlignVertical:'top',
                                            }}
                                        /> */}
                                    </View>
                                </View>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        })
    }


    return (
        <ScrollView>
            <View style={{flex:1,alignItems:'center'}}>
                <Text style={[stylesCall.architectsDaughter,{fontSize:25,paddingVertical:30}]}>
                    12 Images of Cats
                </Text>
            </View>
            <View style={{flexDirection:'row',flexWrap: 'wrap'}}>
                

                {renderCats()}
                

                
            </View>

        </ScrollView>
    )
}

const MapstatetoProps=(state)=>{
    return {
        User: state.Auth
    }
}

export default connect(MapstatetoProps) (Home);