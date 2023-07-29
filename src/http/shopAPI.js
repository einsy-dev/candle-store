import { $host, $authHost } from '.';

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

export const getCategory = async () => {
    const { data } = await $authHost.get('/category')
    return data
}