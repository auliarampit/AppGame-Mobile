import { AsyncStorage } from "react-native";


const initalState = {
    login: [],
    isLoading: false,
    isRejected: false,
    isFulFilled: false
}

const Login = (state = initalState, action) => {
    switch(action.type) {

        case 'POST_LOGIN_PENDING':
            
            return {
               ...state,
               isLoading: true,
               isFulFilled: false,
               isRejected:false
            }
        case 'POST_LOGIN_REJECTED':
            
            return {
                ...state,
                isLoading: false,
                isRejected: true,
                        
            }
        case 'POST_LOGIN_FULFILLED': 
        console.log(action.payload.data)
                if (typeof action.payload.data === 'object') {
                    for (let a = 0; a < Object.keys(action.payload.data).length; a++) { console.log(a)
                        // console.log(Object.keys(action.payload.data)[a],' '+Object.values(action.payload.data)[a]);
                        
                        AsyncStorage.setItem(Object.keys(action.payload.data)[a], String(Object.values(action.payload.data)[a]))
                    }
                }
                return {
                    ...state,
                    isLoading: false,
                    isFulFilled: true,
                    login: action.payload.data
                }

                case 'POST_REGISTER_FULFILLED': 
        
                return {
                    ...state,
                    isLoading: false,
                    isFulFilled: true,
                    login: action.payload.data
                }
                default:
                    return state
    }
}
export default Login