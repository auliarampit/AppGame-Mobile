import axios from 'axios'

export const score = (idUser, score) => {
    return {
        type : 'PATCH_SCORE',
        payload : axios.patch(`http://192.168.6.124:9999/score/patch/:${idUser}`,score)
    }
}