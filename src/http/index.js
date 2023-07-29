import axios from 'axios';

export const $host = axios.create({
    baseURL: import.meta.env.REACT_URL_API,
})

export const $authHost = axios.create({
    baseURL: import.meta.env.REACT_URL_API,
    headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
    }
})