import { axiosAuthInst, axiosInst } from ".";
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

const getUser = async id => {
    try {
        const res = await axiosInst.get(`/user/${id}`);
        return res.data
    } catch(err) {
        console.error(err);
        return null;
    }
}

const getReqRec = async email => {
    try {
        const res = await axiosInst.get(`/user/request-recovery/${email}`)
        return res;
    } catch(err) {
        return null;
    }
}

const resetPassword =  async (data) => {
    try {
        const res = await axiosInst.patch('/user/reset-password', data);
        return res.status === StatusCodes.OK;
    } catch(err) {
        console.error(err);
        return false;
    }
}

const delUser = async userId => {
    try {
        const res = await axiosAuthInst.delete(`/user/${userId}`);
        return res.status === StatusCodes.OK;
    } catch(err) {
        console.error(err);
        return false;
    }
}

const updateUser = async (userId, userData) => {
    try {
        const res = await axiosAuthInst.patch(`/user/${userId}`, userData);
        return res.status === StatusCodes.ACCEPTED
    } catch(err) {
        console.error(err);
        return false;
    }
}

const UserAPI = {
    registerUser,
    activateUser,
    getUser,
    getReqRec,
    resetPassword,
    delUser,
    updateUser,
}
export default UserAPI;