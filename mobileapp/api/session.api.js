import { axiosInst } from ".";

const createSession = async data => {
    try {
        const res = await axiosInst.post('/session', data)
        console.log(res);
        return res.data
    } catch(err) {
        console.error(err);
        return null;
    }
}

const SessionApi = {
    createSession
}
export default SessionApi;