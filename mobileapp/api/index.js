import axios from 'react-native-axios'
import { API_URL } from "@env";
import useAuthRepo, { getToken } from '../repositories/auth.repo';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OPTIONS = {
    baseURL: API_URL + '/api/v1',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
}

console.log(API_URL);
const axiosInst = axios.create(OPTIONS);

//
const axiosAuthInst = axios.create(OPTIONS);
axiosAuthInst.interceptors.request.use( config => {
    const token = getToken();
    if (!config.headers.jwt) {
        config.headers.jwt = token;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
})

export { axiosInst, axiosAuthInst }