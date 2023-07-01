import axios from 'react-native-axios'
import { API_URL } from "@env";

console.log(API_URL);
var axiosInst = axios.create({
    baseURL: API_URL + '/api/v1',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});

export { axiosInst }