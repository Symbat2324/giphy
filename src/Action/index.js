import axios from 'axios'
import {API, KEY} from '../Config'

export const GET_GIPHY = 'GET_GIPHY'


export function getGiphy(name) {
    const url = API +name + KEY
    const request = axios.get(url)
    console.log(request)
    return{
        type:GET_GIPHY,
        payload:request
    }
}
