import AsyncStorage from '@react-native-community/async-storage'


export const Login=(user)=>{
    return async (dispatch)=>{
        // const userid='user'
        console.log(user)
        await AsyncStorage.setItem('ujian_jc12',user)
        dispatch({type:'LOGIN',payload:{username:user}})
    }
    // return {type:'LOGIN'}
}

export const KeepLogin=(user)=>{
    console.log('keeplogin')
    return {type:'KEEPLOGIN',payload:{username:user}}
}

export const Logout=()=>{
    return async (dispatch)=>{
        AsyncStorage.removeItem('ujian_jc12')
        dispatch({type:'LOGOUT'})
    }
    // return {type:'LOGOUT'}
}


export const Update=(update)=>{
    // console.log('update')
    // console.log(update)
    return {type:'UPDATE',payload:update}
}