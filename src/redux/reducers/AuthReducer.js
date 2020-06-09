const INITIAL_STATE={
    username:'default user',
    islogin:false,
    displayPicture:'https://lh3.googleusercontent.com/proxy/Z-JgJms-MY3oOtd83oJZxgVgo-8WRK97IAHzCItJX9BHxqes2UmyPBabTy-RiNbk_BsB3WsWGyGx0X3IlJIzcdI7BXqEsKc'
}


const reducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'LOGIN':
            return {...state,islogin:true,...action.payload}
        case 'KEEPLOGIN':
            return {...state,islogin:true,...action.payload}
        case 'LOGOUT':
            return INITIAL_STATE
        case 'UPDATE':
            return {...state,...action.payload}
        default:
            return state
    }
}

export default reducer;