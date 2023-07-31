import { $host, $authHost } from '../http';


export const authUser = async () => {
    const { data } = await $authHost.get('/user/auth');
    return data;
}

export const loginUser = async (email, password) => {
    const { data } = await $host.get('/user/login', {
        params: { email, password }
    })
    return data
}
export const registerUser = async (name, email, password) => {
    const { data } = await $host.post('/user/register', {
        params: { name, email, password }
    })
    return data
}