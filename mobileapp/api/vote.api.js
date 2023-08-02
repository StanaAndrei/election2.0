import { axiosAuthInst, axiosInst } from ".";

const getPollWithVotes = async id => {
    try {
        const res = await axiosAuthInst.get(`/vote/${id}`)
        return res.data;
    } catch(err) {
        console.error(err);
        alert('ERROR!');
    }
}


const VoteAPI = {
    getPollWithVotes
}
export default VoteAPI;