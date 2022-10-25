import axios from 'axios'

const url = 'http://localhost:3001';
const path = '/user'

export function signIn(email, password){
axios.post(`${url}${path}`, {email, password})
}