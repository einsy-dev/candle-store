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

export const createCategory = async (value) => {
    const { data } = await $authHost.post('/category/create', { value })
    return data
}

export const createStoreItem = async (form) => {
    const { data } = await $authHost.postForm('/items/create', form)
    return data
}