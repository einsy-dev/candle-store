import { $host, $authHost } from '../http';


export const authUser = async () => {
    const { data } = await $authHost.get('/user/auth');
    return data;
}

export const loginUser = async (email, password) => {
    const { data } = await $host.post('/user/login', { email, password })
    return data
}
export const registerUser = async (name, email, password) => {
    const { data } = await $host.post('/user/register', { name, email, password })
    return data
}

export const wishList = async (arr) => {
    const { data } = await $authHost.post('/user/wishlist', { arr })
    return data
}

export const getWishList = async () => {
    const { data } = await $authHost.get('/user/wishlist')
    return data
}

export const basket = async (arr) => {
    const { data } = await $authHost.post('/user/basket', { arr })
    return data
}

export const getBasket = async () => {
    const { data } = await $authHost.get('/user/basket')
    return data
}

export const order = async (info) => {
    const { data } = await $authHost.post('/user/order', { info })
    return data
}

export const orders = async () => {
    const { data } = await $authHost.get('/user/orders')
    return data
}

export const changeStatus = async (id, status) => {
    const { data } = await $authHost.patch(`/user/orders`, { id, status })
    return data
}