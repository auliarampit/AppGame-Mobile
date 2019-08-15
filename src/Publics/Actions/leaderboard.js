import axios from 'axios'

export const getLeaderboard = () => {
    // console.log(data);
    
    return {
        type : 'GET_LEADERBOARD',
        payload : axios.get(`http://192.168.6.124:9999/score`)
    }
}