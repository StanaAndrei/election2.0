import { StatusCodes } from "http-status-codes";
import { axiosAuthInst, axiosInst } from ".";

const createPoll = async pollData => {
    try {
        const res = await axiosAuthInst.post('/poll', pollData)
        return res.status === StatusCodes.OK
    } catch(err) {
        console.error(err);
        return false
    }
}

const getPollsOf = async userId => {
    try {
        const res = await axiosInst.get(`/poll/of/${userId}`)
        return res;
    } catch(err) {
        alert('error!')
        return null;
    }
}

const PollAPI = {
    createPoll,
    getPollsOf
}
export default PollAPI;