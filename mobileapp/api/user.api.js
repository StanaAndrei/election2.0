import { axiosInst } from ".";
import { StatusCodes } from 'http-status-codes';

const registerUser = async userData => {
    let res;
    try {
        res = await axiosInst.post('/user', userData);
    } catch(err) {
        console.error('errrrrrrrrrrrrr');
        console.error(err);
        return false;
    }
    return res.status === StatusCodes.CREATED;
}

const UserAPI = {
    registerUser
}
export default UserAPI;