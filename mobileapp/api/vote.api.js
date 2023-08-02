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

const addVote = async () => {
    
}

const VoteAPI = {
    getPollWithVotes,
    addVote
}
export default VoteAPI;