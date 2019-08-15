import axios from 'axios'

export const login = (data) => {
    console.log(data);
    
    return {
        type : 'POST_LOGIN',
        payload : axios.post(`http://192.168.6.124:9999/login/login`, data)
    }
}