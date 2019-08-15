import { AsyncStorage } from "react-native";


const initalState = {
    leaderboardList: [],
    isLoading: false,
    isRejected: false,
    isFulFilled: false
}

const Leaderboard = (state = initalState, action) => {
    switch(action.type) {

        case 'GET_LEADERBOARD_PENDING':
            
            return {
               ...state,
               isLoading: true,
               isFulFilled: false,
               isRejected:false
            }
        case 'GET_LEADERBOARD_REJECTED':
            
            return {
                ...state,
                isLoading: false,
                isRejected: true,
                        
            }
        case 'GET_LEADERBOARD_FULFILLED': 
        // console.log(action.payload.data)
        //         if (typeof action.payload.data === 'object') {
        //             for (let a = 0; a < Object.keys(action.payload.data).length; a++) { console.log(a)
        //                 AsyncStorage.setItem(Object.keys(action.payload.data)[a], Object.values(action.payload.data)[a])
        //             }
        //         }
                return {
                    ...state,
                    isLoading: false,
                    isFulFilled: true,
                    leaderboardList: action.payload.data
                }

                default:
                    return state
    }
}
export default Leaderboard