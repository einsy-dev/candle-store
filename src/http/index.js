import axios from 'axios';

export const $host = axios.create({
    baseURL: 'http://localhost:5000',
})

export const $authHost = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
    }
})