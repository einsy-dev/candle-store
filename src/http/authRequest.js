import axios from 'axios';

export const authRequest = axios.create({
    baseURL: 'http://localhost:5000',
})