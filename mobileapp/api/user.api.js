import { axiosInst } from ".";
import { StatusCodes } from 'http-status-codes';

const registerUser = async userData => {
    let res;
    try {
        res = await axiosInst.post('/user', userData);
    } catch(err) {
        console.error(err);
        return false;
    }
    return res.status === StatusCodes.CREATED;
}

const activateUser = async otpCode => {
    let res;
    try {
        res = await axiosInst.patch(`/user/activate/${otpCode}`);
    } catch(err) {
        console.error(err);
        return false;
    }
    return res.status == StatusCodes.OK;
}

const UserAPI = {
    registerUser,
    activateUser,
}
export default UserAPI;