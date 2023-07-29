import { $host, /* $authHost */ } from '../http';

export const getAllCards = async (filter, page) => {
    const { data } = await $host.get('/items', {
        params: { filter, page }
    })
    return data
}

export const getOneCard = async (id) => {
    const { data } = await $host.get('/item/' + id)
    return data
}