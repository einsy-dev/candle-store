import { $authHost } from '../http';

export const authUser = async () => {
    const { data } = await $authHost.get('/user')
    return data
}