import axios from 'axios'

const url = 'http://localhost:3001';
const path = '/user'

export function signIn(username, password){
axios.post(`${url}${path}`, {username, password})
}