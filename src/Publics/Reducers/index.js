import { combineReducers } from 'redux'

import  login from './login'
import leaderboard from './leaderboard'



const appReducers = combineReducers({
    login,
    leaderboard
})

export default appReducers